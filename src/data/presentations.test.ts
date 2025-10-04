import { presentations, getPresentationById, getPresentationsByType, getRecentPresentations } from './presentations';

describe('Presentations Data', () => {
  it('should have valid presentation structure', () => {
    presentations.forEach(presentation => {
      expect(presentation).toHaveProperty('id');
      expect(presentation).toHaveProperty('title');
      expect(presentation).toHaveProperty('event');
      expect(presentation).toHaveProperty('date');
      expect(presentation).toHaveProperty('location');
      expect(presentation).toHaveProperty('description');
      expect(presentation).toHaveProperty('topics');
      expect(presentation).toHaveProperty('audience');
      expect(presentation).toHaveProperty('type');
      expect(Array.isArray(presentation.topics)).toBe(true);
      
      // allowDownload is optional, but if present should be boolean
      if (presentation.allowDownload !== undefined) {
        expect(typeof presentation.allowDownload).toBe('boolean');
      }
    });
  });

  it('should find presentation by id', () => {
    if (presentations.length > 0) {
      const firstPresentation = presentations[0];
      const found = getPresentationById(firstPresentation.id);
      expect(found).toEqual(firstPresentation);
    }
    
    const notFound = getPresentationById('non-existent');
    expect(notFound).toBeUndefined();
  });

  it('should filter presentations by type', () => {
    const conferencePrecs = getPresentationsByType('conference');
    conferencePrecs.forEach(pres => {
      expect(pres.type).toBe('conference');
    });
  });

  it('should get recent presentations', () => {
    const recent = getRecentPresentations(2);
    expect(recent.length).toBeLessThanOrEqual(2);
    expect(recent.length).toBeLessThanOrEqual(presentations.length);
    
    // Should be sorted by date (most recent first)
    if (recent.length > 1) {
      const firstDate = new Date(recent[0].date);
      const secondDate = new Date(recent[1].date);
      expect(firstDate.getTime()).toBeGreaterThanOrEqual(secondDate.getTime());
    }
  });
});