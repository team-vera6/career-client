/** @type {import('eslint').ESLint.ConfigData} */

module.exports = {
  root: true,
  extends: [
    'next',
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:storybook/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  plugins: ['prettier', 'unused-imports', 'simple-import-sort'],
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
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'no-unused-vars': [
      'warn',
      { vars: 'all', args: 'none', ignoreRestSiblings: false },
    ],
    'unused-imports/no-unused-imports': ['warn'],
    'comma-spacing': ['error', { before: false, after: true }],
    'multiline-ternary': 'off',
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest',
  },
};
