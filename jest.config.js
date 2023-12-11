module.exports = {
    testEnvironment: 'node',
    testMatch: ['**/__Test__/**/*.test.js'],
    // testMatch: ['**/*.test.js'],
    collectCoverage: true,
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: 80,
        },
    },
    coveragePathIgnorePatterns: [
        '/node_modules/',
        '/coverage/',
        '/config/',
    ],
};
