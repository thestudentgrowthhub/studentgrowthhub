import { NextRequest, NextResponse } from "next/server";
import { submitApplication, submitNewsletterSubscriber } from "@/lib/supabase";

interface SubmissionPayload {
  category: "volunteer" | "yab" | "partner" | "contact" | "newsletter";
  fullName?: string;
  email: string;
  phone?: string;
  country?: string;
  university?: string;
  role?: string;
  message?: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: SubmissionPayload = await req.json();

    if (!body.email || !body.email.includes("@")) {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 }
      );
    }

    const {
      category = "contact",
      fullName = "Anonymous Student",
      email,
      phone = "Not provided",
      country = "Not specified",
      university = "Not specified",
      role = "Not specified",
      message = "No message provided",
    } = body;

    const categoryTitles: Record<string, string> = {
      volunteer: "Volunteer Application",
      yab: "Youth Advisory Board (YAB) Application",
      partner: "Partnership / Sponsorship Inquiry",
      contact: "General Contact / Inquiry",
      newsletter: "Newsletter Subscription",
    };

    const subject = `[The Student Growth Hub] ${categoryTitles[category] || "New Submission"} from ${fullName}`;

    const formattedSummary = `
========================================
NEW SUBMISSION: ${categoryTitles[category] || category.toUpperCase()}
========================================
Full Name: ${fullName}
Email: ${email}
Phone: ${phone}
Country: ${country}
University / Institution: ${university}
Interested Role: ${role}

Message:
${message}

Submitted at: ${new Date().toISOString()}
========================================
`.trim();

    console.log("[The Student Growth Hub Form Submission]:\n", formattedSummary);

    // Save to Supabase database if configured
    if (category === "newsletter") {
      await submitNewsletterSubscriber(email);
    } else {
      await submitApplication({
        category,
        fullName,
        email,
        phone,
        country,
        university,
        role,
        message,
      });
    }

    // 1. If Resend API Key is configured
    if (process.env.RESEND_API_KEY) {
      try {
        const resendRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: "The Student Growth Hub <notifications@studentgrowthhub.org>",
            to: ["thestudentgrowthhub@gmail.com"],
            reply_to: email,
            subject,
            text: formattedSummary,
          }),
        });

        if (resendRes.ok) {
          return NextResponse.json({
            success: true,
            delivery: "resend",
            message: "Your submission has been sent to The Student Growth Hub team!",
          });
        }
      } catch (err) {
        console.warn("[Resend delivery error]:", err);
      }
    }

    // 2. If Web3Forms Access Key is configured
    if (process.env.WEB3FORMS_ACCESS_KEY) {
      try {
        const w3Res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            access_key: process.env.WEB3FORMS_ACCESS_KEY,
            subject,
            from_name: fullName,
            email,
            phone,
            country,
            university,
            role,
            message: formattedSummary,
          }),
        });

        if (w3Res.ok) {
          return NextResponse.json({
            success: true,
            delivery: "web3forms",
            message: "Your submission has been forwarded to The Student Growth Hub team!",
          });
        }
      } catch (err) {
        console.warn("[Web3Forms delivery error]:", err);
      }
    }

    // 3. Fallback: Logged successfully on server
    return NextResponse.json({
      success: true,
      delivery: "logged",
      message:
        "Thank you! Your submission has been received by The Student Growth Hub.",
    });
  } catch (error) {
    console.error("Contact API Route Error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred while processing your request." },
      { status: 500 }
    );
  }
}
