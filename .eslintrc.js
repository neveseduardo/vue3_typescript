module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/typescript/recommended',
        'plugin:prettier/recommended',
    ],
    parser: 'vue-eslint-parser',
    parserOptions: {
        // parser: '@babel/eslint-parser',
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
        ecmaVersion: 2020,
    },
    rules: {
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto',
                trailingComma: 'es5',
                tabWidth: 4,
                semi: false,
                singleQuote: true,
            },
        ],
        indent: ['error', 4],
        'no-var': 'error',
        'no-unused-vars': 'off',
        'prefer-const': 'error',
        eqeqeq: ['error', 'smart'],
        'no-template-curly-in-string': 'error',
        'no-duplicate-imports': 'error',
        'default-param-last': ['error'],
        // Layout/Formataçao -> Sao corrigidas ao salvar
        'array-element-newline': ['error', 'consistent'],
        'arrow-spacing': ['error'],
        'block-spacing': ['error'],
        'brace-style': ['error'],
        'comma-dangle': 'off',
        'comma-spacing': ['error'],
        'function-call-argument-newline': ['error', 'consistent'],
        'jsx-quotes': ['error', 'prefer-double'],
        'key-spacing': ['error', { mode: 'strict' }],
        'keyword-spacing': ['error'],
        'no-multiple-empty-lines': ['error', { max: 1 }],
        'no-tabs': ['error'],
        'no-trailing-spaces': ['error', { ignoreComments: true }],
        'no-whitespace-before-property': ['error'],
        'object-curly-newline': ['error', { consistent: true }],
        'object-curly-spacing': ['error', 'always'],
        'operator-linebreak': 'off',
        'rest-spread-spacing': ['error'],
        'space-before-blocks': ['error'],
        'space-before-function-paren': [
            'error',
            {
                anonymous: 'always',
                named: 'never',
                asyncArrow: 'always',
            },
        ],
        'space-in-parens': ['error', 'never'],
        'space-infix-ops': ['error'],
        'template-curly-spacing': ['error', 'never'],
        'vue/no-side-effects-in-computed-properties': 'off',
        'vue/prop-name-casing': [0],
        'vue/custom-event-name-casing': ['error', 'kebab-case'],
        'vue/script-indent': ['error', 4],
        'vue/multi-word-component-names': 'off',
        'vue/html-indent': [
            'error',
            4,
            {
                attribute: 1,
                baseIndent: 1,
                closeBracket: 0,
                alignAttributesVertically: true,
                ignores: [],
            },
        ],
        '@typescript-eslint/no-explicit-any': 'off',
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    },
    overrides: [
        {
            files: [
                '**/__tests__/*.{j,t}s?(x)',
                '**/tests/unit/**/*.spec.{j,t}s?(x)',
            ],
            env: {
                jest: true,
            },
        },
    ],
}
