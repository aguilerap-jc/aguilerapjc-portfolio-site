"use client";
import { PDFViewer } from '@/components/PDFViewer';

interface PresentationViewerProps {
  presentation: {
    id: string;
    title: string;
    slideDeckUrl?: string;
    allowDownload?: boolean;
  };
}

export default function PresentationViewer({ presentation }: PresentationViewerProps) {
  if (!presentation.slideDeckUrl) {
    return (
      <div className="bg-gray-100 rounded-lg p-8 text-center">
        <p className="text-gray-600">
          No presentation slides available for this presentation.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 rounded-lg p-8 text-center">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        📄 Presentation Preview
      </h3>
      <p className="text-gray-600 mb-6">
        Click below to view the presentation slides
      </p>
      
      <div className="inline-block">
        <PDFViewer
          pdfUrl={presentation.slideDeckUrl}
          title={presentation.title}
          allowDownload={presentation.allowDownload ?? true}
          presentationId={presentation.id}
        />
      </div>
    </div>
  );
}

// Component for sharing the link
export function ShareLinkButton({ presentationId }: { presentationId: string }) {
  const shareUrl = typeof window !== 'undefined' 
    ? `${window.location.origin}/presentation/${presentationId}`
    : `/presentation/${presentationId}`;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      alert('Link copied to clipboard!');
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = shareUrl;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <button
      onClick={copyToClipboard}
      className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
    >
      📋 Copy Link
    </button>
  );
}