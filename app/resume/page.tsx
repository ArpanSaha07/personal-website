import Link from 'next/link';
import { Document, Page } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;


export default function ResumePage() {
    return (
        <div className="max-w-6xl mx-auto px-6 pt-30 pb-10 flex flex-col gap-6 items-center justify-center">
            <h1 className="text-4xl font-semibold text-gray-900">Check out my resume!</h1>

            {/* <div className="">
                <embed src= "pdf/Arpan_Resume.pdf" type="application/pdf" width="600" height="600"></embed>
            </div> */}

            <button className="relative overflow-hidden rounded-full text-black text-[18px] font-semibold border-black border-2 px-6 py-2 w-fit hover:text-white transition-all duration-300 flex items-center gap-2 group">
            <Link href="pdf/Arpan_Resume.pdf" download={true}>
              <span className="relative z-10">Download</span>
              <span className="absolute bottom-0 left-1/2 w-0 h-0 bg-black rounded-full 
                              transition-all duration-500 ease-out 
                              group-hover:w-[400px] group-hover:h-[400px] 
                              transform -translate-x-1/2 translate-y-1/2 origin-bottom"
              />
            </Link>
          </button>

          {/* width={containerWidth ? Math.min(containerWidth, maxWidth) : maxWidth */}

          <div className="w-full flex justify-center">
            <div className="w-full sm:w-[600px]">
            <Document file="pdf/Arpan_Resume.pdf">
                <Page pageNumber={1} width={800} />
            </Document>
            </div>
        </div>

        </div>
    )
}