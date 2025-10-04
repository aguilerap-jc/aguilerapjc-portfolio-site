"use client";
import Image from 'next/image';
import { PDFViewer } from '@/components/PDFViewer';

interface PresentationViewerProps {
  presentation: {
    id: string;
    title: string;
    slideDeckUrl?: string;
    allowDownload?: boolean;
    image?: string;
    videoUrl?: string;
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
    <div className="flex flex-col items-center space-y-8">
      {/* Thumbnail Image */}
      {presentation.image && (
        <div className="w-full max-w-2xl bg-gray-100 rounded-lg overflow-hidden">
          <div className="relative aspect-video">
            <Image
              src={presentation.image}
              alt={`${presentation.title} thumbnail`}
              fill
              className="object-cover"
            />
          </div>
        </div>
      )}
      
      {/* Presentation Actions */}
      <div className="flex gap-4 justify-center">
        <PDFViewer
          pdfUrl={presentation.slideDeckUrl}
          title={presentation.title}
          allowDownload={presentation.allowDownload ?? true}
          presentationId={presentation.id}
        />
        {presentation.videoUrl && (
          <a
            href={presentation.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-gray-900 text-gray-900 text-center px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-900 hover:text-white transition-colors"
          >
            🎥 Watch Video
          </a>
        )}
      </div>
    </div>
  );
}

// Component for sharing the link
export function ShareLinkButton({ presentationId }: { presentationId: string }) {
  const getShareUrl = () => {
    if (typeof window !== 'undefined') {
      return `${window.location.origin}${window.location.pathname}`;
    }
    return `/presentation/${presentationId}`;
  };

  const copyToClipboard = async () => {
    const shareUrl = getShareUrl();
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
      className="text-sm font-medium text-blue-600 hover:text-blue-800 cursor-pointer flex items-center gap-2 transition-colors justify-start w-full"
    >
      📋 Share this presentation
    </button>
  );
}