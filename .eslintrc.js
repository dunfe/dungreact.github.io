module.exports = {
    env: {
        browser: true,
        node: true,
        es2021: true,
    },
    extends: [
        'plugin:prettier/recommended',
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', 'import'],
    rules: {},

    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
            typescript: {
                alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
                // use <root>/path/to/folder/tsconfig.json
                project: 'packages/*/tsconfig.json',
            },
        },
    },
}
