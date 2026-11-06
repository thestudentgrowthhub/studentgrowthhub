import { createClient } from "@supabase/supabase-js";
import { OPPORTUNITIES, Opportunity } from "@/data/site-data";

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL || "https://eqxllnshwaclbqxlqvsl.supabase.co";
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
  "";

export const supabase = supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

export async function fetchOpportunities(): Promise<Opportunity[]> {
  if (!supabase) {
    return OPPORTUNITIES;
  }

  try {
    const { data, error } = await supabase
      .from("opportunities")
      .select("*")
      .eq("is_active", true)
      .order("created_at", { ascending: false });

    if (error || !data || data.length === 0) {
      return OPPORTUNITIES;
    }

    return data.map((item) => ({
      id: item.id,
      title: item.title,
      slug: item.slug,
      organization: item.organization,
      category: item.category,
      fundingType: item.funding_type,
      location: item.location,
      eligibleRegion: item.eligible_region,
      deadline: item.deadline,
      isRolling: item.is_rolling,
      description: item.description,
      requirements: item.requirements || [],
      benefits: item.benefits || [],
      applyUrl: item.apply_url,
    }));
  } catch (err) {
    console.warn("Supabase fetchOpportunities fallback:", err);
    return OPPORTUNITIES;
  }
}

export async function submitApplication(payload: {
  category: string;
  fullName?: string;
  email: string;
  phone?: string;
  country?: string;
  university?: string;
  role?: string;
  message?: string;
}) {
  if (!supabase) return { success: false, reason: "no_client" };

  try {
    const { data, error } = await supabase.from("applications").insert([
      {
        category: payload.category,
        full_name: payload.fullName,
        email: payload.email,
        phone: payload.phone,
        country: payload.country,
        university: payload.university,
        role: payload.role,
        message: payload.message,
      },
    ]);

    if (error) {
      console.warn("Supabase submitApplication error:", error);
      return { success: false, error };
    }

    return { success: true, data };
  } catch (err) {
    console.warn("Supabase submitApplication exception:", err);
    return { success: false, error: err };
  }
}

export async function submitNewsletterSubscriber(email: string) {
  if (!supabase) return { success: false, reason: "no_client" };

  try {
    const { error } = await supabase.from("newsletter_subscribers").insert([
      { email, source: "website_footer" },
    ]);

    if (error && error.code !== "23505") {
      // 23505 is unique violation (already subscribed), which is fine
      console.warn("Supabase newsletter insert error:", error);
      return { success: false, error };
    }

    return { success: true };
  } catch (err) {
    console.warn("Supabase newsletter exception:", err);
    return { success: false, error: err };
  }
}
