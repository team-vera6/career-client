/** @type {import('eslint').ESLint.ConfigData} */

module.exports = {
  extends: [
    'next',
    'prettier',
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:storybook/recommended',
    'plugin:import/recommended',
    '@titicaca/eslint-config-triple',
    '@titicaca/eslint-config-triple/requiring-type-checking',
  ],
  plugins: ['unused-imports', 'simple-import-sort'],
  rules: {
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
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'never',
        exports: 'never',
        functions: 'never',
      },
    ],
    indent: ['error', 2],
    quotes: ['error', 'single'],
    'eol-last': 'error',
    semi: ['error', 'always'],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'no-unused-vars': ['warn', { vars: 'all', args: 'none', ignoreRestSiblings: false }],
    'unused-imports/no-unused-imports': ['warn'],
    'comma-spacing': ['error', { before: false, after: true }],
    'space-before-function-paren': ['error', 'never'],
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest',
  },
};
