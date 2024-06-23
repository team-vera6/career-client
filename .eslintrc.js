export default {
  extends: [
    'next',
    '@titicaca/eslint-config-triple',
    '@titicaca/eslint-config-triple/requiring-type-checking',
    '@titicaca/eslint-config-triple/prettier',
  ],
  rules: [
    {
      'comma-dangle': ['error', 'always-multiline'],
      'comma-spacing': ['error', { before: false, after: true }],
    },
  ],
}
