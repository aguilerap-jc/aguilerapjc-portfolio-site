module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { configFile: './babel.jest.config.js' }],
  },
  transformIgnorePatterns: [
    'node_modules/(?!(remark|remark-parse|remark-html|gray-matter|unified|vfile|unist-util-stringify-position|mdast-util-to-string|micromark|decode-named-character-reference|character-entities)/)'
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  }
};