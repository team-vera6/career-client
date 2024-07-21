/** @type {import('eslint').ESLint.ConfigData} */

module.exports = {
  root: true,
  extends: [
    'next',
    'prettier',
    'eslint:recommended',
    'plugin:storybook/recommended',
    'plugin:import/recommended',
  ],
  plugins: ['unused-imports'],
  rules: {
    '@typescript-eslint/no-use-before-define': 'off',
    'react/no-unescaped-entities': 'off',
    '@next/next/no-page-custom-font': 'off',
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ],
    'react/jsx-first-prop-new-line': 'error',
    'eol-last': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'no-unused-vars': ['warn', { vars: 'all', args: 'none', ignoreRestSiblings: false }],
    'unused-imports/no-unused-imports': ['warn'],
    'comma-spacing': ['error', { before: false, after: true }],
    'space-before-function-paren': ['error', 'never'],
    'multiline-ternary': 'off',
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest',
  },
};
