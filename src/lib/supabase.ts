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
      educationLevel: (item.education_level || "All Levels") as Opportunity["educationLevel"],
      location: item.location,
      eligibleRegion: item.eligible_region,
      deadline: item.deadline,
      description: item.description,
      benefits: item.benefits || [],
      eligibility: item.requirements || [],
      officialLink: item.apply_url || "",
      featured: item.featured ?? false,
    }));
  } catch (err) {
    console.warn("Supabase fetchOpportunities fallback:", err);
    return OPPORTUNITIES;
  }
}

export async function createOpportunityInDb(opp: Omit<Opportunity, "id">): Promise<{ success: boolean; data?: any; error?: any }> {
  if (!supabase) return { success: false, error: "No Supabase client configured" };

  try {
    const { data, error } = await supabase.from("opportunities").insert([
      {
        slug: opp.slug,
        title: opp.title,
        organization: opp.organization,
        category: opp.category,
        funding_type: opp.fundingType,
        education_level: opp.educationLevel || "All Levels",
        location: opp.location,
        eligible_region: opp.eligibleRegion,
        deadline: opp.deadline,
        is_rolling: opp.deadline?.toLowerCase().includes("rolling") || false,
        description: opp.description,
        requirements: opp.eligibility || [],
        benefits: opp.benefits || [],
        apply_url: opp.officialLink,
        featured: opp.featured ?? false,
        is_active: true,
      },
    ]).select();

    if (error) {
      console.error("Supabase createOpportunity error:", error);
      return { success: false, error };
    }
    return { success: true, data: data?.[0] };
  } catch (err) {
    console.error("Supabase createOpportunity exception:", err);
    return { success: false, error: err };
  }
}

export async function updateOpportunityInDb(id: string, updates: Partial<Opportunity>): Promise<{ success: boolean; error?: any }> {
  if (!supabase) return { success: false, error: "No Supabase client configured" };

  try {
    const dbUpdates: Record<string, any> = {};
    if (updates.title !== undefined) dbUpdates.title = updates.title;
    if (updates.slug !== undefined) dbUpdates.slug = updates.slug;
    if (updates.organization !== undefined) dbUpdates.organization = updates.organization;
    if (updates.category !== undefined) dbUpdates.category = updates.category;
    if (updates.fundingType !== undefined) dbUpdates.funding_type = updates.fundingType;
    if (updates.educationLevel !== undefined) dbUpdates.education_level = updates.educationLevel;
    if (updates.location !== undefined) dbUpdates.location = updates.location;
    if (updates.eligibleRegion !== undefined) dbUpdates.eligible_region = updates.eligibleRegion;
    if (updates.deadline !== undefined) {
      dbUpdates.deadline = updates.deadline;
      dbUpdates.is_rolling = updates.deadline.toLowerCase().includes("rolling");
    }
    if (updates.description !== undefined) dbUpdates.description = updates.description;
    if (updates.benefits !== undefined) dbUpdates.benefits = updates.benefits;
    if (updates.eligibility !== undefined) dbUpdates.requirements = updates.eligibility;
    if (updates.officialLink !== undefined) dbUpdates.apply_url = updates.officialLink;
    if (updates.featured !== undefined) dbUpdates.featured = updates.featured;
    dbUpdates.updated_at = new Date().toISOString();

    const { error } = await supabase.from("opportunities").update(dbUpdates).eq("id", id);
    if (error) {
      console.error("Supabase updateOpportunity error:", error);
      return { success: false, error };
    }
    return { success: true };
  } catch (err) {
    console.error("Supabase updateOpportunity exception:", err);
    return { success: false, error: err };
  }
}

export async function deleteOpportunityFromDb(id: string): Promise<{ success: boolean; error?: any }> {
  if (!supabase) return { success: false, error: "No Supabase client configured" };

  try {
    const { error } = await supabase.from("opportunities").delete().eq("id", id);
    if (error) {
      console.error("Supabase deleteOpportunity error:", error);
      return { success: false, error };
    }
    return { success: true };
  } catch (err) {
    console.error("Supabase deleteOpportunity exception:", err);
    return { success: false, error: err };
  }
}

export interface ApplicationRecord {
  id: string;
  category: "volunteer" | "yab" | "partner" | "contact" | "newsletter";
  full_name: string | null;
  email: string;
  phone: string | null;
  country: string | null;
  university: string | null;
  role: string | null;
  message: string | null;
  status: "new" | "reviewed" | "contacted" | "archived";
  created_at: string;
}

export async function fetchApplicationsFromDb(): Promise<ApplicationRecord[]> {
  if (!supabase) return [];

  try {
    const { data, error } = await supabase
      .from("applications")
      .select("*")
      .order("created_at", { ascending: false });

    if (error || !data) return [];
    return data as ApplicationRecord[];
  } catch (err) {
    console.warn("fetchApplicationsFromDb exception:", err);
    return [];
  }
}

export async function updateApplicationStatusInDb(id: string, status: ApplicationRecord["status"]): Promise<boolean> {
  if (!supabase) return false;

  try {
    const { error } = await supabase.from("applications").update({ status }).eq("id", id);
    return !error;
  } catch {
    return false;
  }
}

export interface SubscriberRecord {
  id: string;
  email: string;
  source: string;
  created_at: string;
}

export async function fetchSubscribersFromDb(): Promise<SubscriberRecord[]> {
  if (!supabase) return [];

  try {
    const { data, error } = await supabase
      .from("newsletter_subscribers")
      .select("*")
      .order("created_at", { ascending: false });

    if (error || !data) return [];
    return data as SubscriberRecord[];
  } catch (err) {
    console.warn("fetchSubscribersFromDb exception:", err);
    return [];
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
