import { useEffect, useState } from "react";
import { getPDFs } from "@/lib/getPDFs";  // ✅ Corrected import path

export default function PDFList() {
  const [pdfs, setPdfs] = useState([]);

  useEffect(() => {
    getPDFs().then(setPdfs).catch(console.error);
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold">Latest PDFs</h2>
      <ul className="list-disc pl-5">
        {pdfs.map((pdf) => (
          <li key={pdf.name} className="my-2">
            <a
              href={pdf.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {pdf.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
