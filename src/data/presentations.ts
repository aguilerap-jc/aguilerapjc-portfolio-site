export interface Presentation {
  id: string;
  title: string;
  event: string;
  date: string;
  location: string;
  description: string;
  topics: string[];
  slideDeckUrl?: string;
  videoUrl?: string;
  image?: string;
  audience: string;
  type: 'conference' | 'workshop' | 'webinar' | 'internal' | 'meetup';
}

export const presentations: Presentation[] = [
  {
    id: 'ModularArch_LDM',
    title: 'Road Ahead: Why Large Driving Models are Redifining Mobility',
    event: 'Kellogg MBA 2025',
    date: '2025-09-30',
    location: 'Remote, Germany,USA',
    description: 'Exploring the shift from Modular Architectures to Large Driving Models (LDMs) in the automotive industry, and how this transformation is set to redefine mobility.',
    topics: ['Autonomous Vehicles', 'Urban Mobility', 'Product Strategy', 'Business Innovation'],
    slideDeckUrl: '/aguilerapjc-portfolio-site/presentations/JCAP_LDM_RedefiningMobility_Kellogg_MBA_Sep_2025.PDF',
    //videoUrl: 'https://youtube.com/watch?v=example',
    image: '/aguilerapjc-portfolio-site/images/presentations/JCAP_Thumbnail_LDM_RedefiningMobility_Kellogg_MBA_Sep_2025.jpg',
    audience: 'MBA Students, Industry Professionals',
    type: 'webinar'
  },
  
  // Add more presentations as needed
];

export function getPresentationById(id: string): Presentation | undefined {
  return presentations.find(presentation => presentation.id === id);
}

export function getPresentationsByType(type: Presentation['type']): Presentation[] {
  return presentations.filter(presentation => presentation.type === type);
}

export function getRecentPresentations(limit: number = 3): Presentation[] {
  return presentations
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}