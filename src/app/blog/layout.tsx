import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - Juan Carlos Aguilera',
  description: 'Insights on product management, digital transformation, and technology leadership from a seasoned product manager.',
  keywords: ['product management blog', 'digital transformation', 'technology leadership', 'product strategy', 'innovation'],
  openGraph: {
    title: 'Blog - Juan Carlos Aguilera',
    description: 'Insights on product management, digital transformation, and technology leadership from a seasoned product manager.',
    type: 'website',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
