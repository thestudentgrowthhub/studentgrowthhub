import { NextRequest, NextResponse } from "next/server";
import { OPPORTUNITIES, COMMUNITY_LINKS } from "@/data/site-data";

interface ChatMessage {
  role: "user" | "model" | "assistant";
  content: string;
}

const AI_SYSTEM_PROMPT = `
You are the official AI Advisor for "The Student Growth Hub".
Never use the acronym "TSGH" — always refer to yourself simply as "AI" or "AI Advisor" and the organization as "The Student Growth Hub".
Your goal is to warmly and expertly guide students, changemakers, and partners.

Core Identity:
- Founder & Convener: Greatwisdom Nwigwe. He founded The Student Growth Hub to empower students beyond grades. If anyone asks who founded, started, or leads The Student Growth Hub, always answer clearly that it was founded by Greatwisdom Nwigwe.
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
1. Growth Beyond Grades: 6-week intensive cohort in partnership with The Reboot Wellbeing and Empowerment Foundation. Focuses on mental resilience, employability skills, CV formatting, and career clarity. Cohort 1 reached 30 students across 5 countries (Nigeria, Cameroon, Kenya, Zimbabwe, Bolivia). Cohort 2 is active with 50 students across 12 countries.
2. ELITE Campus × Kryptr: 3-week virtual work experience program (3 hrs/week). Build portfolio, CV proof-of-work, and access paid internships. 100% Free for the 1st month. Direct link: https://app.kryptr.co
3. Student Development Webinars: Monthly learning series featuring professionals, educators, entrepreneurs, and young changemakers.

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
- Answer any academic, career, scholarship, CV, or leadership question the student asks thoughtfully and directly.
- Whenever mentioning scholarships, programs, or volunteering on our platform, include markdown links like [Opportunities Hub](/opportunities) or [Programs Page](/programs).
- Only if a user specifically asks who built, designed, or developed this website/platform, credit **Marvellous Adepoju** (**[Marvel Develops](https://marveldevelops.com)**), a Software Developer and AI Automation Engineer who builds custom software, websites, apps, and AI automations for businesses ([LinkedIn](https://www.linkedin.com/in/marveldevelops)).
`;

const GEMINI_MODELS = [
  "gemini-3.8-flash",
  "gemini-3-flash",
  "gemini-2.5-flash-lite",
  "gemini-flash-latest",
];

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const messages: ChatMessage[] = body.messages || [];

    if (!messages.length) {
      return NextResponse.json({ error: "No messages provided" }, { status: 400 });
    }

    const latestUserMessage = messages[messages.length - 1].content.trim();
    const rawKey =
      process.env.GEMINI_API_KEY ||
      process.env.NEXT_PUBLIC_GEMINI_API_KEY ||
      process.env.GOOGLE_API_KEY ||
      "";
    const apiKey = rawKey.trim().replace(/^["']|["']$/g, "");

    const apiKeyDetected = Boolean(apiKey && apiKey !== "your_gemini_api_key_here");
    const modelErrors: string[] = [];

    if (apiKeyDetected) {
      // Build strictly alternating user/model conversation history starting with a 'user' turn
      const normalizedTurns: { role: "user" | "model"; parts: { text: string }[] }[] = [];

      for (const m of messages.slice(-8)) {
        const mappedRole: "user" | "model" = m.role === "user" ? "user" : "model";
        const text = (m.content || "").trim();
        if (!text) continue;

        // Gemini requires the first turn in `contents` to be role: "user"
        if (normalizedTurns.length === 0 && mappedRole === "model") {
          continue;
        }

        const prevTurn = normalizedTurns[normalizedTurns.length - 1];
        if (prevTurn && prevTurn.role === mappedRole) {
          prevTurn.parts[0].text += `\n\n${text}`;
        } else {
          normalizedTurns.push({
            role: mappedRole,
            parts: [{ text }],
          });
        }
      }

      if (normalizedTurns.length === 0) {
        normalizedTurns.push({
          role: "user",
          parts: [{ text: latestUserMessage }],
        });
      }

      for (const modelName of GEMINI_MODELS) {
        try {
          const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${apiKey}`;

          const geminiRes = await fetch(geminiUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              systemInstruction: {
                parts: [{ text: AI_SYSTEM_PROMPT }],
              },
              contents: normalizedTurns,
              generationConfig: {
                temperature: 0.7,
                maxOutputTokens: 700,
              },
            }),
          });

          if (geminiRes.ok) {
            const geminiData = await geminiRes.json();
            const reply = geminiData.candidates?.[0]?.content?.parts?.[0]?.text;
            if (reply) {
              return NextResponse.json({
                reply,
                source: "gemini",
                model: modelName,
                apiKeyDetected: true,
              });
            } else {
              modelErrors.push(
                `${modelName}: Empty candidate response (${JSON.stringify(
                  geminiData.promptFeedback || geminiData
                )})`
              );
            }
          } else {
            const errorText = await geminiRes.text();
            modelErrors.push(`${modelName} (HTTP ${geminiRes.status}): ${errorText}`);
          }
        } catch (err) {
          modelErrors.push(
            `${modelName} network exception: ${err instanceof Error ? err.message : String(err)}`
          );
        }
      }
    }

    // Fallback to built-in knowledge base if API key is missing or all models returned errors
    const debugReason = !apiKeyDetected
      ? "GEMINI_API_KEY is not set in environment variables (.env.local or Vercel Settings -> Environment Variables). Note: On Vercel, after adding an environment variable, you must trigger a Redeploy for it to take effect."
      : `Gemini API call failed across models: ${modelErrors.join(" | ")}`;

    console.warn("[AI Route Fallback]:", debugReason);

    const fallbackReply = generateFallbackReply(latestUserMessage);
    return NextResponse.json({
      reply: fallbackReply,
      source: "local_knowledge_base",
      apiKeyDetected,
      debugError: debugReason,
    });
  } catch (error) {
    console.error("Chatbot Route Error:", error);
    return NextResponse.json(
      {
        reply:
          "Sorry, I encountered a brief issue. You can browse our Opportunities Hub directly or join our active WhatsApp community!",
        source: "error_handler",
        debugError: error instanceof Error ? error.message : String(error),
      },
      { status: 200 }
    );
  }
}

function generateFallbackReply(query: string): string {
  const q = query.toLowerCase();

  if (
    q.includes("founder") ||
    q.includes("who started") ||
    q.includes("who founded") ||
    q.includes("who created") ||
    q.includes("greatwisdom") ||
    q.includes("nwigwe")
  ) {
    return (
      "🌟 **Founder of The Student Growth Hub:**\n\n" +
      "**Greatwisdom Nwigwe** is the Founder and Convener of **The Student Growth Hub**.\n\n" +
      "He established The Student Growth Hub as a youth-led student development platform to empower students across 37+ countries to grow beyond the classroom through access to verified scholarships, internships, mentorship, practical skills, and supportive networks."
    );
  }

  if (q.includes("scholarship") || q.includes("grant") || q.includes("funding")) {
    return (
      "🎓 **Verified Scholarships:**\n\n" +
      "We curate fully funded international scholarships for ambitious students! Top open opportunities include:\n" +
      "• **Chevening UK Government Master's Scholarship** (Fully Funded UK tuition + monthly stipend)\n" +
      "• **Mastercard Foundation Scholars Program** (Full tuition, accommodation & stipend)\n" +
      "• **Generation Google Scholarship EMEA** (€7,000 for Computer Science & Tech students)\n\n" +
      "You can filter by region and education level right on our [Opportunities Hub](/opportunities)!"
    );
  }

  if (q.includes("growth beyond grades") || q.includes("cohort")) {
    return (
      "🌱 **About Growth Beyond Grades:**\n\n" +
      "Growth Beyond Grades is our flagship 6-week employability and mental resilience program in partnership with **The Reboot Wellbeing & Empowerment Foundation**.\n\n" +
      "• **Cohort 1:** 30 students across 5 countries (Nigeria, Cameroon, Kenya, Zimbabwe, Bolivia).\n" +
      "• **Cohort 2:** 50 students across 12 countries currently ongoing.\n\n" +
      "Check our [Programs Page](/programs) or join our [WhatsApp Community](" +
      COMMUNITY_LINKS.whatsapp +
      ") for upcoming cohort updates!"
    );
  }

  if (q.includes("kryptr") || q.includes("elite campus") || q.includes("internship") || q.includes("work experience")) {
    return (
      "💼 **ELITE Campus × Kryptr Virtual Work Experience:**\n\n" +
      "Struggling with the 'need experience to get experience' loop? ELITE Campus is a 3-week virtual work experience program:\n" +
      "• Only **3 hours / week** required\n" +
      "• Build your portfolio & CV with real work experience\n" +
      "• Access to paid internship opportunities\n" +
      "• **FREE for the 1st month**\n\n" +
      "Register directly at **[app.kryptr.co](https://app.kryptr.co)** or view our [Programs Page](/programs)."
    );
  }

  if (q.includes("volunteer") || q.includes("yab") || q.includes("youth advisory") || q.includes("join team")) {
    return (
      "🤝 **Get Involved with The Student Growth Hub:**\n\n" +
      "We welcome passionate students as volunteers and Youth Advisory Board (YAB) applicants across 37+ countries.\n\n" +
      "Head to our [Get Involved Page](/get-involved) to submit your application!"
    );
  }

  if (q.includes("whatsapp") || q.includes("community") || q.includes("group") || q.includes("linkedin")) {
    return (
      "💬 **Connect with 1,500+ Students:**\n\n" +
      "Your growth journey shouldn't happen alone! Connect with peers and mentors:\n" +
      "• **WhatsApp Community:** [Join 1,500+ Members](" +
      COMMUNITY_LINKS.whatsapp +
      ")\n" +
      "• **LinkedIn Page:** [Follow 19K+ on LinkedIn](" +
      COMMUNITY_LINKS.linkedin +
      ")"
    );
  }

  if (q.includes("who built") || q.includes("who made") || q.includes("developer") || q.includes("marvel develops")) {
    return (
      "💻 **Platform Developer:**\n\n" +
      "This platform and AI system were engineered by **Marvellous Adepoju** (**[Marvel Develops](https://marveldevelops.com)**), a Software Developer & AI Automation Engineer specializing in custom software, websites, apps, and business automations.\n\n" +
      "• **Website:** [marveldevelops.com](https://marveldevelops.com)\n" +
      "• **LinkedIn:** [linkedin.com/in/marveldevelops](https://www.linkedin.com/in/marveldevelops)"
    );
  }

  return (
    "👋 Hello! Welcome to **The Student Growth Hub** — *Beyond Grades. Beyond Limitations.*\n\n" +
    "I'm your **AI Advisor**, and I can help you with:\n" +
    "1. 🎓 Discovering verified scholarships, internships, and fellowships on our [Opportunities Hub](/opportunities)\n" +
    "2. 🌱 Learning about our **Growth Beyond Grades** cohort training on our [Programs Page](/programs)\n" +
    "3. 💼 Gaining virtual work experience through **ELITE Campus × Kryptr**\n" +
    "4. 🤝 Applying to volunteer or join the Youth Advisory Board on our [Get Involved Page](/get-involved)\n\n" +
    "What area of your student journey would you like to explore?"
  );
}
