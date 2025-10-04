import { prof_projects, personal_Projects } from './projects'

describe('Projects Data', () => {
  describe('Professional Projects', () => {
    it('contains expected professional projects', () => {
      expect(prof_projects).toBeDefined()
      expect(Array.isArray(prof_projects)).toBe(true)
      expect(prof_projects.length).toBeGreaterThan(0)
    })

    it('has correct structure for each professional project', () => {
      prof_projects.forEach(project => {
        expect(project).toHaveProperty('id')
        expect(project).toHaveProperty('title')
        expect(project).toHaveProperty('category')
        expect(project).toHaveProperty('year')
        expect(project).toHaveProperty('description')
        expect(project).toHaveProperty('technologies')
        expect(project).toHaveProperty('image')
        expect(project).toHaveProperty('credit')
        expect(project).toHaveProperty('features')
        
        expect(typeof project.id).toBe('string')
        expect(typeof project.title).toBe('string')
        expect(typeof project.category).toBe('string')
        expect(typeof project.year).toBe('string')
        expect(typeof project.description).toBe('string')
        expect(Array.isArray(project.technologies)).toBe(true)
        expect(typeof project.image).toBe('string')
        expect(typeof project.credit).toBe('object')
        expect(Array.isArray(project.features)).toBe(true)
      })
    })

    it('has proper credit structure', () => {
      prof_projects.forEach(project => {
        expect(project.credit).toHaveProperty('author')
        expect(project.credit).toHaveProperty('url')
        expect(project.credit).toHaveProperty('platform')
        expect(project.credit).toHaveProperty('license')
        
        expect(typeof project.credit.author).toBe('string')
        expect(typeof project.credit.url).toBe('string')
        expect(typeof project.credit.platform).toBe('string')
        expect(typeof project.credit.license).toBe('string')
      })
    })

    it('includes ID Buzz AD project', () => {
      const idBuzzProject = prof_projects.find(p => p.title.includes('ID Buzz'))
      expect(idBuzzProject).toBeDefined()
      expect(idBuzzProject?.category).toBe('Product Management')
      expect(idBuzzProject?.technologies).toContain('AWS')
    })

    it('includes John Deere project', () => {
      const johnDeereProject = prof_projects.find(p => p.title.includes('John Deere'))
      expect(johnDeereProject).toBeDefined()
      expect(johnDeereProject?.category).toBe('Research')
      expect(johnDeereProject?.technologies).toContain('Autonomous Vehicles')
    })

    it('has non-empty features arrays', () => {
      prof_projects.forEach(project => {
        expect(project.features.length).toBeGreaterThan(0)
        project.features.forEach(feature => {
          expect(typeof feature).toBe('string')
          expect(feature.length).toBeGreaterThan(0)
        })
      })
    })

    it('has non-empty technologies arrays', () => {
      prof_projects.forEach(project => {
        expect(project.technologies.length).toBeGreaterThan(0)
        project.technologies.forEach(tech => {
          expect(typeof tech).toBe('string')
          expect(tech.length).toBeGreaterThan(0)
        })
      })
    })

    it('has valid image paths', () => {
      prof_projects.forEach(project => {
        expect(project.image).toMatch(/\.(jpg|jpeg|png|webp|avif)$/i)
        expect(project.image).toMatch(/^\/aguilerapjc-portfolio-site\/images\/projects\//)
      })
    })

    it('has valid years format', () => {
      prof_projects.forEach(project => {
        // Year should be in format "YYYY" or "YYYY-YYYY" or "YYYY-Present"
        expect(project.year).toMatch(/^\d{4}(-(\d{4}|Present))?$/)
      })
    })

    it('has unique IDs', () => {
      const ids = prof_projects.map(p => p.id)
      const uniqueIds = new Set(ids)
      expect(uniqueIds.size).toBe(ids.length)
    })
  })

  describe('Personal Projects', () => {
    it('contains expected personal projects', () => {
      expect(personal_Projects).toBeDefined()
      expect(Array.isArray(personal_Projects)).toBe(true)
      expect(personal_Projects.length).toBeGreaterThan(0)
    })

    it('has correct structure for each personal project', () => {
      personal_Projects.forEach(project => {
        expect(project).toHaveProperty('id')
        expect(project).toHaveProperty('title')
        expect(project).toHaveProperty('category')
        expect(project).toHaveProperty('year')
        expect(project).toHaveProperty('description')
        expect(project).toHaveProperty('technologies')
        expect(project).toHaveProperty('image')
        expect(project).toHaveProperty('credit')
        expect(project).toHaveProperty('features')
        
        expect(typeof project.id).toBe('string')
        expect(typeof project.title).toBe('string')
        expect(typeof project.category).toBe('string')
        expect(typeof project.year).toBe('string')
        expect(typeof project.description).toBe('string')
        expect(Array.isArray(project.technologies)).toBe(true)
        expect(typeof project.image).toBe('string')
        expect(typeof project.credit).toBe('object')
        expect(Array.isArray(project.features)).toBe(true)
      })
    })

    it('includes portfolio website project', () => {
      const portfolioProject = personal_Projects.find(p => 
        p.title.toLowerCase().includes('portfolio') || 
        p.title.toLowerCase().includes('website') ||
        p.title.toLowerCase().includes('personal')
      )
      expect(portfolioProject).toBeDefined()
      expect(portfolioProject?.category).toBe('Web Development')
    })

    it('has personal project specific characteristics', () => {
      personal_Projects.forEach(project => {
        // Personal projects should have meaningful descriptions
        expect(project.description.length).toBeGreaterThan(20)
        
        // Should have at least one technology
        expect(project.technologies.length).toBeGreaterThan(0)
        
        // Should have at least one feature
        expect(project.features.length).toBeGreaterThan(0)
      })
    })

    it('has unique IDs within personal projects', () => {
      const ids = personal_Projects.map(p => p.id)
      const uniqueIds = new Set(ids)
      expect(uniqueIds.size).toBe(ids.length)
    })
  })

  describe('Combined Projects Data Integrity', () => {
    it('has unique IDs across all projects', () => {
      const allProjects = [...prof_projects, ...personal_Projects]
      const ids = allProjects.map(p => p.id)
      const uniqueIds = new Set(ids)
      expect(uniqueIds.size).toBe(ids.length)
    })

    it('maintains consistent category naming', () => {
      const allProjects = [...prof_projects, ...personal_Projects]
      const categories = Array.from(new Set(allProjects.map(p => p.category)))
      
      // Check that categories follow a consistent format (title case, can include Management, Development, etc.)
      categories.forEach(category => {
        expect(category).toMatch(/^[A-Z][a-zA-Z\s]*$/)
      })
    })

    it('has consistent technology naming', () => {
      const allProjects = [...prof_projects, ...personal_Projects]
      const allTechnologies = allProjects.flatMap(p => p.technologies)
      
      // Technologies should not be empty strings
      allTechnologies.forEach(tech => {
        expect(tech.length).toBeGreaterThan(0)
        expect(tech.trim()).toBe(tech) // No leading/trailing whitespace
      })
    })

    it('has proper image path consistency', () => {
      const allProjects = [...prof_projects, ...personal_Projects]
      
      allProjects.forEach(project => {
        // All images should follow the same path pattern
        expect(project.image).toMatch(/^\/aguilerapjc-portfolio-site\/images\/projects\//)
        
        // Should have valid image extension
        expect(project.image).toMatch(/\.(jpg|jpeg|png|webp|avif)$/i)
      })
    })

    it('has meaningful descriptions', () => {
      const allProjects = [...prof_projects, ...personal_Projects]
      
      allProjects.forEach(project => {
        // Descriptions should be meaningful (at least 30 characters)
        expect(project.description.length).toBeGreaterThan(30)
        
        // Should not be just placeholder text
        expect(project.description.toLowerCase()).not.toContain('lorem ipsum')
        expect(project.description.toLowerCase()).not.toContain('placeholder')
      })
    })

    it('has properly formatted features', () => {
      const allProjects = [...prof_projects, ...personal_Projects]
      
      allProjects.forEach(project => {
        project.features.forEach(feature => {
          // Features should be meaningful descriptions
          expect(feature.length).toBeGreaterThan(10)
          
          // Should end with proper punctuation or be a complete phrase
          expect(feature.trim()).toBe(feature)
        })
      })
    })
  })
})
