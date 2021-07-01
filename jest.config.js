const { resolve } = require('path');
const root = resolve(__dirname);

module.exports = {
  rootDir: root,
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: "coverage",
  testEnvironment: 'node',
  clearMocks: true,
  transform: {
    '.+\\.ts$': 'ts-jest',
  },
  preset: 'ts-jest',
  moduleNameMapper: {
    '@src/(.*)': '<rootDir>/src/$1',
    '@test/(.*)': '<rootDir>/test/$1',
  },
};
