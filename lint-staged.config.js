module.exports = require('@sumup-oss/foundry/lint-staged')({
  '*.ts': () => ['npm run build', 'git add dist'],
});
