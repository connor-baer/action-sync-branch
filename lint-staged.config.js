module.exports = require('@sumup/foundry/lint-staged')({
  '*.ts': () => ['npm run build', 'git add dist'],
});
