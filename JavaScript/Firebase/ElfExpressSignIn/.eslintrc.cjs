module.exports = {
    env: {
        'browser': true,
        'es2021': true,
        'jest/globals': true,
    },
    extends: [
        'plugin:react/recommended',
        'google',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        'jest',
    ],
    rules: {
        'indent': ['error', 4],
        'object-curly-spacing': ['error', 'always'],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
    },
};
