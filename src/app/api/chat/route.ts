import { NextRequest, NextResponse } from "next/server";
import { OPPORTUNITIES, COMMUNITY_LINKS } from "@/data/site-data";

interface ChatMessage {
  role: "user" | "model" | "assistant";
  content: string;
}

const TSGH_SYSTEM_PROMPT = `
You are the official AI Student Advisor for "The Student Growth Hub" (TSGH).
Your goal is to warmly and expertly guide students, changemakers, and partners.

Core TSGH Identity:
- Motto: "Beyond Grades. Beyond Limitations." and "Discover. Learn. Grow. Lead."
- Mission: Empowering students across 37+ countries with knowledge, skills, opportunities, mentorship, and supportive networks to thrive beyond the classroom.
- 6 Strategic Pillars:
  1. Academic Excellence
  2. Career & Employability Development (Growth Beyond Grades)
  3. Leadership & Personal Development
  4. Digital Skills & Innovation
  5. Mentorship & Networking
  6. Social Impact & Community Engagement (SDGs)

Flagship Programs:
1. Growth Beyond Grades: 6-week intensive cohort in partnership with The Reboot Wellbeing Foundation. Focuses on mental resilience, employability skills, CV formatting, and career clarity. Cohort 1 reached 30 students across 5 countries (Nigeria, Cameroon, Kenya, Zimbabwe, Bolivia). Cohort 2 is active with 50 students across 12 countries.
2. ELITE Campus × Kryptr: 3-week virtual work experience program (3 hrs/week). Build portfolio, CV proof-of-work, and access paid internships. 100% Free for the 1st month. Direct link: https://app.kryptr.co
3. Student Development Webinars: Monthly masterclasses with global leaders and scholarship evaluators.

Community Links:
- WhatsApp Community (1,500+ members): ${COMMUNITY_LINKS.whatsapp}
- LinkedIn (19,000+ followers): ${COMMUNITY_LINKS.linkedin}
- Email: ${COMMUNITY_LINKS.email}

Currently Available Opportunities:
${OPPORTUNITIES.map(
  (o) =>
    `- ${o.title} (${o.category}, ${o.fundingType}, Region: ${o.eligibleRegion}, Deadline: ${o.deadline}, Link: /opportunities/${o.slug})`
).join("\n")}

Guidelines:
- Keep responses friendly, encouraging, actionable, and concise (2-4 short paragraphs or bullet points).
- Whenever mentioning scholarships, programs, or volunteering, mention the relevant site page or link.
- Emphasize that all opportunities on TSGH are 100% verified and free to discover.
`;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const messages: ChatMessage[] = body.messages || [];

    if (!messages.length) {
      return NextResponse.json({ error: "No messages provided" }, { status: 400 });
    }

    const latestUserMessage = messages[messages.length - 1].content.trim();
    const apiKey = process.env.GEMINI_API_KEY;

    // Dual-Mode 1: Live Google Gemini API Call if GEMINI_API_KEY is configured
    if (apiKey && apiKey !== "your_gemini_api_key_here") {
      try {
        const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

        // Format conversation history for Gemini API
        const contents = [
          {
            role: "user",
            parts: [{ text: `SYSTEM INSTRUCTIONS:\n${TSGH_SYSTEM_PROMPT}\n\nPlease acknowledge and assist the student.` }],
          },
          {
            role: "model",
            parts: [{ text: "Understood. I am the TSGH AI Student Advisor, ready to help students discover opportunities, programs, and community networks." }],
          },
          ...messages.slice(-6).map((m) => ({
            role: m.role === "assistant" ? "model" : "user",
            parts: [{ text: m.content }],
          })),
        ];

        const geminiRes = await fetch(geminiUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents,
            generationConfig: {
              temperature: 0.7,
              maxOutputTokens: 600,
            },
          }),
        });

        if (geminiRes.ok) {
          const geminiData = await geminiRes.json();
          const reply = geminiData.candidates?.[0]?.content?.parts?.[0]?.text;
          if (reply) {
            return NextResponse.json({ reply, source: "gemini" });
          }
        }
      } catch (err) {
        console.warn("Gemini API call failed, falling back to local TSGH engine:", err);
      }
    }

    // Dual-Mode 2: High-Quality Built-in TSGH Knowledge Base Fallback
    const fallbackReply = generateFallbackReply(latestUserMessage);
    return NextResponse.json({ reply: fallbackReply, source: "local_knowledge_base" });
  } catch (error) {
    console.error("Chatbot Route Error:", error);
    return NextResponse.json(
      { reply: "Sorry, I encountered a brief issue. You can browse our Opportunities Hub directly or join our active WhatsApp community!" },
      { status: 200 }
    );
  }
}

function generateFallbackReply(query: string): string {
  const q = query.toLowerCase();

  if (q.includes("scholarship") || q.includes("grant") || q.includes("funding")) {
    return (
      "🎓 **Verified Scholarships on TSGH:**\n\n" +
      "We curate fully funded international scholarships for ambitious students! Top open opportunities include:\n" +
      "• **Chevening UK Government Master's Scholarship** (Fully Funded UK tuition + monthly stipend)\n" +
      "• **Generation Google Scholarship EMEA** (€7,000 for Computer Science & Tech students)\n\n" +
      "You can filter by region and education level right on our [Opportunities Hub](/opportunities)!"
    );
  }

  if (q.includes("growth beyond grades") || q.includes("cohort")) {
    return (
      "🌱 **About Growth Beyond Grades:**\n\n" +
      "Growth Beyond Grades is our flagship 6-week employability and mental resilience program in partnership with **The Reboot Wellbeing & Empowerment Foundation**.\n\n" +
      "• **Cohort 1:** 30 students across 5 countries (Nigeria, Cameroon, Kenya, Zimbabwe, Bolivia).\n" +
      "• **Cohort 2:** 50 students across 12 countries currently active.\n\n" +
      "To join the waitlist for Cohort 3, check our [Programs Page](/programs) or join our [WhatsApp Community](" +
      COMMUNITY_LINKS.whatsapp +
      ") for instant application notifications!"
    );
  }

  if (q.includes("kryptr") || q.includes("elite campus") || q.includes("internship") || q.includes("work experience")) {
    return (
      "💼 **ELITE Campus × Kryptr Virtual Work Experience:**\n\n" +
      "Struggling with the 'need experience to get experience' loop? ELITE Campus is a 3-week virtual work experience program:\n" +
      "• Only **3 hours / week** required\n" +
      "• Work on simulated briefs to build verifiable portfolio proof\n" +
      "• Access to paid startup internships\n" +
      "• **100% Free** for your first month\n\n" +
      "Register directly at **[app.kryptr.co](https://app.kryptr.co)** or view our [Programs Page](/programs)."
    );
  }

  if (q.includes("volunteer") || q.includes("yab") || q.includes("youth advisory") || q.includes("join team")) {
    return (
      "🤝 **Join the TSGH Global Team:**\n\n" +
      "We welcome passionate students as moderators, content creators, and Youth Advisory Board (YAB) members across 37+ countries.\n\n" +
      "Head to our [Get Involved Portal](/get-involved) to submit your intake form. Our coordination team reviews applications weekly!"
    );
  }

  if (q.includes("whatsapp") || q.includes("community") || q.includes("group") || q.includes("linkedin")) {
    return (
      "💬 **Connect with 1,500+ Students:**\n\n" +
      "Your growth journey shouldn't happen alone! Connect with ambitious peers, mentors, and alumni:\n" +
      "• **WhatsApp Community:** [Join 1,500+ Hub](" +
      COMMUNITY_LINKS.whatsapp +
      ")\n" +
      "• **LinkedIn Page:** [Follow 19K+ on LinkedIn](" +
      COMMUNITY_LINKS.linkedin +
      ")\n\n" +
      "We share daily opportunities, webinar links, and peer accountability!"
    );
  }

  // General helpful response
  return (
    "👋 Hello! Welcome to **The Student Growth Hub (TSGH)** — *Beyond Grades. Beyond Limitations.*\n\n" +
    "I can help you with:\n" +
    "1. 🎓 Discovering verified scholarships, internships, and fellowships on our [Opportunities Hub](/opportunities)\n" +
    "2. 🌱 Learning about our **Growth Beyond Grades** cohort training on our [Programs Page](/programs)\n" +
    "3. 💼 Gaining virtual work experience through **ELITE Campus × Kryptr**\n" +
    "4. 🤝 Submitting a volunteer or Youth Advisory Board application on our [Get Involved Portal](/get-involved)\n\n" +
    "What area of your student journey would you like to explore?"
  );
}

