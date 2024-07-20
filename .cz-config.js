module.exports = {
  types: [
    { value: '✨ feat', name: '✨ feat:\tadd a new feature' },
    { value: '🪛 fix', name: '🪛 fix:\tfix bugs' },
    { value: '♻️ rfac', name: '♻️ rfac:\trefactor code' },
    { value: '🎨 css', name: '🎨 css:\tadd or update the UI and style files' },
    { value: '📦 chore', name: '📦 chore:\tpackage, dependency related works' },
    { value: '🔧 add', name: '🔧 add:\tadd or update configuration files' },
  ],
  allowCustomScopes: false,
  allowBreakingChanges: ['feat', 'fix'],
  skipQuestions: ['body'],
  subjectLimit: 100,
};
