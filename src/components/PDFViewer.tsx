import React from 'react';

interface PDFViewerProps {
  pdfUrl: string;
  title: string;
  allowDownload?: boolean;
  presentationId?: string; // Optional: for generating shareable links
}

export const PDFViewer: React.FC<PDFViewerProps> = ({ 
  pdfUrl, 
  title, 
  allowDownload = true,
  presentationId
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [zoom, setZoom] = React.useState(75); // Default to 75% for better fit

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

  const handleZoomChange = (newZoom: number) => {
    setZoom(Math.max(25, Math.min(200, newZoom))); // Limit zoom between 25% and 200%
  };

  const embedUrl = allowDownload 
    ? pdfUrl 
    : `${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0&zoom=${zoom}`;

  if (!allowDownload && isOpen) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg w-11/12 h-5/6 flex flex-col">
          <div className="flex justify-between items-center p-4 border-b">
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <button
                  onClick={() => handleZoomChange(zoom - 10)}
                  className="px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded text-xs font-medium"
                  disabled={zoom <= 25}
                  title="Zoom out"
                >
                  −
                </button>
                <span className="min-w-[3rem] text-center font-medium">{zoom}%</span>
                <button
                  onClick={() => handleZoomChange(zoom + 10)}
                  className="px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded text-xs font-medium"
                  disabled={zoom >= 200}
                  title="Zoom in"
                >
                  +
                </button>
                <button
                  onClick={() => handleZoomChange(100)}
                  className="px-2 py-1 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded text-xs font-medium ml-2"
                  title="Reset to 100%"
                >
                  100%
                </button>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl ml-4"
                aria-label="Close viewer"
              >
                ×
              </button>
            </div>
          </div>
          <div className="flex-1 p-4">
            <iframe
              key={zoom} // Force iframe reload when zoom changes
              src={embedUrl}
              className="w-full h-full border border-gray-300 rounded"
              title={title}
              style={{ pointerEvents: 'auto' }}
            />
          </div>
          <div className="p-4 border-t bg-gray-50 text-center">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <p className="text-sm text-gray-600">
                  📄 Preview
                </p>
                {presentationId && (
                  <SharePresentationButton presentationId={presentationId} />
                )}
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span>Quick zoom:</span>
                {[50, 75, 100, 125, 150].map((zoomLevel) => (
                  <button
                    key={zoomLevel}
                    onClick={() => handleZoomChange(zoomLevel)}
                    className={`px-2 py-1 rounded ${
                      zoom === zoomLevel 
                        ? 'bg-blue-100 text-blue-700 font-medium' 
                        : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                  >
                    {zoomLevel}%
                  </button>
                ))}
              </div>
            </div>
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
      {allowDownload ? '📄 View Slides' : '📄 View Slides'}
    </a>
  );
};

// Component for sharing presentation links
function SharePresentationButton({ presentationId }: { presentationId: string }) {
  const copyShareLink = async () => {
    const basePath = process.env.NODE_ENV === 'production' ? '/aguilerapjc-portfolio-site' : '';
    const shareUrl = typeof window !== 'undefined' 
      ? `${window.location.origin}${basePath}/presentation/${presentationId}`
      : `${basePath}/presentation/${presentationId}`;
    
    try {
      await navigator.clipboard.writeText(shareUrl);
      alert('📋 Share link copied to clipboard!');
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = shareUrl;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      alert('📋 Share link copied to clipboard!');
    }
  };

  return (
    <button
      onClick={copyShareLink}
      className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200 transition-colors"
      title="Copy shareable link"
    >
      🔗 Share
    </button>
  );
}