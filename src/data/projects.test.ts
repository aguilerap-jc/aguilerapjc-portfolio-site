import { prof_projects, personal_Projects } from './projects'

describe('Projects Data', () => {
  describe('Professional Projects', () => {
    it('contains expected professional projects', () => {
      expect(prof_projects).toBeDefined()
      expect(Array.isArray(prof_projects)).toBe(true)
      expect(prof_projects.length).toBeGreaterThan(0)
    })

    it('includes John Deere project', () => {
      const johnDeereProject = prof_projects.find(p => p.title.includes('John Deere'))
      expect(johnDeereProject).toBeDefined()
      expect(johnDeereProject?.category).toBe('Research')
      expect(johnDeereProject?.technologies).toContain('Autonomous Vehicles')
    })

    it('has valid structure', () => {
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
      })
    })
  })

  describe('Personal Projects', () => {
    it('contains expected personal projects', () => {
      expect(personal_Projects).toBeDefined()
      expect(Array.isArray(personal_Projects)).toBe(true)
      expect(personal_Projects.length).toBeGreaterThan(0)
    })

    it('has valid structure', () => {
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
      })
    })
  })

  describe('Combined Data Integrity', () => {
    it('has unique IDs across all projects', () => {
      const allProjects = [...prof_projects, ...personal_Projects]
      const ids = allProjects.map(p => p.id)
      const uniqueIds = new Set(ids)
      expect(uniqueIds.size).toBe(ids.length)
    })

    it('maintains consistent category naming', () => {
      const allProjects = [...prof_projects, ...personal_Projects]
      const categories = Array.from(new Set(allProjects.map(p => p.category)))
      
      categories.forEach(category => {
        expect(category).toMatch(/^[A-Z][a-zA-Z\s]*$/)
      })
    })
  })
})
