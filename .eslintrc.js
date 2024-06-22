module.exports = {
  extends: [
    '@titicaca/eslint-config-triple',
    '@titicaca/eslint-config-triple/requiring-type-checking',
    '@titicaca/eslint-config-triple/prettier',
  ],
  rules: [
    {
      'comma-dangle': ['error', 'always-multiline'],
    },
  ],
}
