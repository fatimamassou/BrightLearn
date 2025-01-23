// eslint.config.mjs

import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';

export default [
  {
    // Define the files to lint
    files: ['**/*.{js,jsx}'],
  },
  {
    // Define ignored paths
    ignores: ['node_modules', 'dist', 'build'],
  },
  {
    languageOptions: {
      globals: globals.browser, // Includes browser global variables
      parserOptions: {
        ecmaVersion: 'latest', // Support modern ECMAScript features
        sourceType: 'module', // Enable ES modules
        ecmaFeatures: {
          jsx: true, // Enable JSX
        },
      },
    },
    plugins: {
      react: pluginReact, // React-specific rules
      'react-hooks': pluginReactHooks, // React Hooks-specific rules
    },
    rules: {
      // General JavaScript Rules
      'curly': 'error', // Enforce curly braces for all control statements
      'eqeqeq': 'error', // Enforce === and !==
      'no-console': 'warn', // Warn on console.log usage
      'no-alert': 'error', // Disallow alert, confirm, and prompt
      'arrow-parens': ['error', 'as-needed'], // No parentheses for single-param arrow functions
      'max-len': ['error', { code: 120 }], // Maximum line length of 120 characters
      'comma-dangle': ['error', 'always-multiline'], // Trailing commas for multiline
      'semi': ['error', 'always'], // Enforce semicolons
      'quotes': ['error', 'single'], // Enforce single quotes
      'object-curly-spacing': ['error', 'always'], // Space inside curly braces
      'array-bracket-spacing': ['error', 'never'], // No space inside array brackets
      'indent': ['error', 2], // Enforce 2-space indentation
      'eol-last': ['error', 'always'], // Enforce newline at end of files

      // React-Specific Rules
      'react/jsx-uses-react': 'off', // Not required for React 17+
      'react/react-in-jsx-scope': 'off', // Not required for React 17+
      'react/jsx-uses-vars': 'error', // Prevent variables in JSX from being marked as unused
      'react/self-closing-comp': 'error', // Enforce self-closing tags for components with no children

      // React Hooks Rules
      'react-hooks/rules-of-hooks': 'error', // Enforce Hooks rules
      'react-hooks/exhaustive-deps': 'warn', // Check dependencies in useEffect

    },
    settings: {
      react: {
        version: 'detect', // Automatically detect the React version
      },
    },
  },
  pluginJs.configs.recommended, // Use recommended JavaScript rules
];
