module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { configFile: './babel.jest.config.js' }],
  },
  transformIgnorePatterns: [
    'node_modules/(?!(remark|mdast-util|micromark|unified|vfile|unist-util|character-entities|decode-named-character-reference)/)'
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  }
};