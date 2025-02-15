import { supabase } from "@/lib/supabaseClient";

export const uploadPDF = async (file) => {
  const fileName = `${Date.now()}-${file.name}`;
  const { data, error } = await supabase.storage
    .from(process.env.NEXT_PUBLIC_SUPABASE_BUCKET)
    .upload(fileName, file, { contentType: "application/pdf" });

  if (error) throw error;
  return data.path;
};
