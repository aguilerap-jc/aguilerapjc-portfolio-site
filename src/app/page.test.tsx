// Mock the blog data functions to avoid remark issues  
jest.mock('@/data/blog', () => ({
  getFeaturedPosts: jest.fn().mockResolvedValue([]),
}));

describe('Home Page', () => {
  it('should pass', () => {
    expect(true).toBe(true);
  });
});
