import { presentations, getPresentationById } from '@/data/presentations';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import PresentationViewer, { ShareLinkButton } from './PresentationViewer';

interface PresentationPreviewPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function PresentationPreviewPage({ params }: PresentationPreviewPageProps) {
  const { id } = await params;
  const presentation = getPresentationById(id);

  if (!presentation || !presentation.slideDeckUrl) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link 
              href="/experience" 
              className="text-blue-600 hover:text-blue-800 flex items-center gap-2"
            >
              ← Back to Experience
            </Link>
            <div className="text-sm text-gray-500">
              {presentation.event} • {new Date(presentation.date).toLocaleDateString()}
            </div>
          </div>
        </div>
      </div>

      {/* Presentation Preview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Presentation Info Header */}
          <div className="px-6 py-4 border-b border-gray-200">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              {presentation.title}
            </h1>
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <span>📍 {presentation.location}</span>
              <span>👥 {presentation.audience}</span>
              <span>🎯 {presentation.type}</span>
            </div>
            <p className="mt-3 text-gray-700">
              {presentation.description}
            </p>
            {presentation.topics && presentation.topics.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {presentation.topics.map((topic, index) => (
                  <span
                    key={index}
                    className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Presentation Preview */}
          <div className="p-6">
            <PresentationViewer presentation={presentation} />
          </div>

          {/* Share Link Section */}
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
            <ShareLinkButton presentationId={presentation.id} />
          </div>
        </div>
      </div>
    </div>
  );
}

// Generate static params for all presentations
export async function generateStaticParams() {
  return presentations.map((presentation) => ({
    id: presentation.id,
  }));
}