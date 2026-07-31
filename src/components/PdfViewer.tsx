export function PdfViewer({ src, label }: { src: string; label: string }) {
  return (
    <object className="pdf-viewer" data={src} type="application/pdf" aria-label={label}>
      <p className="pdf-fallback">
        Your browser can&rsquo;t display PDFs inline &mdash; <a href={src}>download the PDF</a>{' '}
        instead.
      </p>
    </object>
  )
}
