/**
 * @file Jest Config Template
 * @description Configuration for Jest runner
 */

module.exports = {
    // Use jsdom for React/Web testing
    testEnvironment: 'jsdom',

    // Setup files to run before tests
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],

    // Handle non-JS assets
    moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
        '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js',
        '^@/(.*)$': '<rootDir>/src/$1' // Alias matching tsconfig
    },

    // Files to ignore
    testPathIgnorePatterns: ['/node_modules/', '/dist/'],

    // Coverage configuration
    collectCoverage: true,
    collectCoverageFrom: [
        'src/**/*.{js,jsx,ts,tsx}',
        '!src/**/*.d.ts',
        '!src/index.tsx'
    ],
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: 80
        }
    },

    // Transformer setup (usually babel-jest is default)
    // transform: {
    //   '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }]
    // }
};
