import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReactJs from 'eslint-plugin-react';
import pluginReactHooksJs from 'eslint-plugin-react-hooks';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import stylisticTs from '@stylistic/eslint-plugin-ts';
import stylisticJs from '@stylistic/eslint-plugin-js';

export default [
    {
        files: ['**/*.{js,mjs,cjs,jsx,ts,mts,tsx}'],
    },
    {
        ignores: ['**/coverage/*'],
    },
    {
        languageOptions: {
            globals: globals.browser,
            parser: typescriptParser,
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                    useJSXTextNode: true,
                },
            },
        },
        rules: {
            curly: 'error',
            eqeqeq: 'error',
            'no-throw-literal': 'error',
            semi: 'off',
            'eol-last': 'error',
            'no-console': 'error',
            'no-alert': 'error',
            'arrow-parens': ['error', 'as-needed'],
            'max-len': ['error', {
                'code': 120,
                'tabWidth': 4,
                'ignoreStrings': true,
            }],
            'comma-dangle': ['error', {
                'arrays': 'always-multiline',
                'objects': 'always-multiline',
                'functions': 'never',
            }],
            'linebreak-style': ['error', 'unix'],
            'object-curly-spacing': ['error', 'always'],
            'array-bracket-spacing': ['error', 'never'],
            '@typescript-eslint/no-unused-vars': [
                'error',
                {
                    'varsIgnorePattern': '^_',
                },
            ],
            'no-unused-vars': [
                'error',
                {
                    'varsIgnorePattern': '^_',
                },
            ],
            '@stylistic/ts/semi': 'error',
            '@stylistic/ts/comma-spacing': 'error',
            '@stylistic/ts/indent': 'error',
            '@stylistic/ts/keyword-spacing': 'error',
            '@stylistic/ts/key-spacing': 'error',
            '@stylistic/ts/no-extra-semi': 'error',
            '@stylistic/ts/quotes': ['error', 'single'],
            '@stylistic/js/jsx-quotes': ['error', 'prefer-single'],
            '@stylistic/js/padding-line-between-statements': [
                'error',
                { blankLine: 'always', prev: 'import', next: '*' },
                { blankLine: 'never', prev: 'import', next: 'import' },
                {
                    blankLine: 'always',
                    prev: '*',
                    next: ['singleline-const', 'multiline-const', 'block-like'],
                },
                {
                    blankLine: 'always',
                    prev: ['singleline-const', 'multiline-const', 'block-like'],
                    next: '*',
                },
                {
                    blankLine: 'never',
                    prev: 'const',
                    next: 'const',
                },
                {
                    blankLine: 'always',
                    prev: 'multiline-const',
                    next: 'multiline-const',
                },
            ],
            'react/jsx-uses-react': 'error',
            'react/jsx-uses-vars': 'error',
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',
        },
        plugins: {
            '@stylistic/ts': stylisticTs,
            '@stylistic/js': stylisticJs,
            react: pluginReactJs,
            'react-hooks': pluginReactHooksJs,
            '@typescript-eslint': typescriptEslint,
        },
    },
    pluginJs.configs.recommended,
];
