# Adding Presentation Decks

## Directory Structure

```
public/
├── presentations/          # PDF slide decks
│   ├── your-presentation.pdf
│   └── another-deck.pdf
└── images/
    └── presentations/      # Thumbnail images
        ├── presentation-thumb.jpg
        └── another-thumb.jpg
```

## How to Add New Presentations

### 1. Add Your Files

**Slide Decks:**
- Place PDF files in `public/presentations/`
- Recommended naming: `kebab-case-title.pdf`

**Thumbnail Images:**
- Place thumbnail images in `public/images/presentations/`
- Recommended size: 800x600px or 16:9 aspect ratio
- Formats: JPG, PNG, WebP

### 2. Update the Data

Edit `src/data/presentations.ts` and add your presentation to the array:

```typescript
{
  id: 'unique-presentation-id',
  title: 'Your Presentation Title',
  event: 'Conference/Event Name',
  date: '2024-03-15', // YYYY-MM-DD format
  location: 'City, Country',
  description: 'Brief description of what the presentation covers...',
  topics: ['Topic 1', 'Topic 2', 'Topic 3'],
  slideDeckUrl: '/aguilerapjc-portfolio-site/presentations/your-presentation.pdf',
  videoUrl: 'https://youtube.com/watch?v=your-video', // Optional
  image: '/aguilerapjc-portfolio-site/images/presentations/your-thumb.jpg',
  audience: 'Target audience description',
  type: 'conference' // Options: 'conference', 'workshop', 'webinar', 'internal', 'meetup'
}
```

### 3. Presentation Types

- **conference**: Major industry conferences
- **workshop**: Hands-on workshop sessions
- **webinar**: Online presentations
- **internal**: Company/team internal presentations
- **meetup**: Community meetup presentations

## File Naming Conventions

**PDFs:** Use descriptive, URL-friendly names
- ✅ `autonomous-vehicles-future-2024.pdf`
- ✅ `product-management-av-systems.pdf`
- ❌ `My Presentation (Final).pdf`

**Images:** Match the PDF name with `-thumb` suffix
- ✅ `autonomous-vehicles-future-2024-thumb.jpg`
- ✅ `product-management-av-systems-thumb.png`

## Optional Features

### Video Links
Add `videoUrl` if you have a recording of the presentation.

### Custom Thumbnails
If no thumbnail is provided, the presentation will display without an image header.

## Display Location

Presentations appear on the **Experience page** in their own dedicated section below your work history and education.

## Testing

After adding presentations, run:
```bash
npm test -- src/data/presentations.test.ts
```

This ensures your data structure is valid and all functions work correctly.