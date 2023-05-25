import { createClient } from "@supabase/supabase-js";

const TABLE_NAME = "marks";

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || "",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
);

export const read = async (studentId) =>
  await supabase.from(TABLE_NAME).select().eq("student_id", studentId).single();

export const insert = (data) =>
  supabase.from(TABLE_NAME).insert(data).select().single();
