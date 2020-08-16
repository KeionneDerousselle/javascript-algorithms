module.exports = {
  testMatch: ['<rootDir>/exercises/**/*.spec.js'],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90
    },
    './exercises/**/*.js': {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90
    }
  },
  collectCoverage: true,
  collectCoverageFrom: [ 'exercises/**/*.js', '!**/node_modules/**', '!**/vendor/**', ],
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/$1',
  },
  moduleFileExtensions: [ 'js', 'json' ],
  transform: {
    '^.+\\.[jt]sx?$': '<rootDir>/node_modules/babel-jest',
  },
}
