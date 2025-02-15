import { useEffect } from 'react';
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const ViewPDF = () => {
  useEffect(() => {
    const pdfUrl = '/path-to-pdf-file/current-affair.pdf'; // Update with your actual PDF path

    const loadingTask = pdfjs.getDocument(pdfUrl);
    loadingTask.promise.then((pdf) => {
      console.log('PDF loaded');
      // You can now render the pages of the PDF (for example, page 1)
      pdf.getPage(1).then((page) => {
        const scale = 1.5;
        const viewport = page.getViewport({ scale });
        const canvas = document.getElementById('pdf-canvas');
        const context = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        const renderContext = {
          canvasContext: context,
          viewport: viewport,
        };

        page.render(renderContext);
      });
    });
  }, []);

  return (
    <div className="flex justify-center mt-8">
      <canvas id="pdf-canvas" className="border"></canvas>
    </div>
  );
};

export default ViewPDF;
