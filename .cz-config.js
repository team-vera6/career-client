module.exports = {
  types: [
    { value: '✨ feat', name: '✨ feat:\tadd a new feature' },
    { value: '🪛 fix', name: '🪛 fix:\tfix bugs' },
    { value: '📦 chore', name: '📦 chore:\tpackage, dependency related works' },
  ],
  allowCustomScopes: false,
  allowBreakingChanges: ['feat', 'fix'],
  skipQuestions: ['body'],
  subjectLimit: 100,
};
