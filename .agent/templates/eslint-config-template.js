/**
 * @file ESLint Config Template
 * @description Standard ESLint configuration for JavaScript/React projects
 */

module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
        jest: true
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        // 'plugin:@typescript-eslint/recommended', // Uncomment for TS
        // 'prettier' // Make sure this is last
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: [
        'react',
        // '@typescript-eslint'
    ],
    settings: {
        react: {
            version: 'detect'
        }
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

        // React specific
        'react/prop-types': 'off', // Turn on if not using TS
        'react/react-in-jsx-scope': 'off', // Not needed in React 17+

        // Best practices
        'curly': 'error',
        'eqeqeq': ['error', 'always'],
        'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }]
    }
};
