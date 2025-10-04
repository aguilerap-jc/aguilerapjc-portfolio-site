import React from 'react';

interface PDFViewerProps {
  pdfUrl: string;
  title: string;
  allowDownload?: boolean;
}

export const PDFViewer: React.FC<PDFViewerProps> = ({ 
  pdfUrl, 
  title, 
  allowDownload = true 
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleViewClick = (e: React.MouseEvent) => {
    if (allowDownload) {
      // Default behavior - open PDF in new tab (allows download)
      return;
    } else {
      // Prevent default and show embedded viewer
      e.preventDefault();
      setIsOpen(true);
    }
  };

  const embedUrl = allowDownload 
    ? pdfUrl 
    : `${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`;

  if (!allowDownload && isOpen) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg w-11/12 h-5/6 flex flex-col">
          <div className="flex justify-between items-center p-4 border-b">
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700 text-2xl"
              aria-label="Close viewer"
            >
              ×
            </button>
          </div>
          <div className="flex-1 p-4">
            <iframe
              src={embedUrl}
              className="w-full h-full border border-gray-300 rounded"
              title={title}
              style={{ pointerEvents: 'auto' }}
            />
          </div>
          <div className="p-4 border-t bg-gray-50 text-center">
            <p className="text-sm text-gray-600">
              📄 Viewing only - Download is not available for this presentation
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <a
      href={pdfUrl}
      target={allowDownload ? "_blank" : undefined}
      rel={allowDownload ? "noopener noreferrer" : undefined}
      onClick={handleViewClick}
      className="flex-1 bg-gray-900 text-white text-center px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
      title={allowDownload ? "View and download slides" : "View only - Download disabled"}
      {...(!allowDownload && {
        onContextMenu: (e: React.MouseEvent) => e.preventDefault(),
        style: { userSelect: 'none' as const }
      })}
    >
      {allowDownload ? '📄 View Slides' : '�️ View Only'}
    </a>
  );
};