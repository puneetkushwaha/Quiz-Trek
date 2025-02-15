import { supabase } from "@/lib/supabaseClient";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const file = req.body.file; // FormData se file lo
      const fileName = `pdfs/${Date.now()}_${file.name}`;

      const { data, error } = await supabase.storage
        .from("pdfs")
        .upload(fileName, file);

      if (error) throw error;

      res.status(200).json({ url: data.publicURL });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
