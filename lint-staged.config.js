module.exports = require('@sumup/foundry/lint-staged')({
  '*.ts': () => ['yarn build', 'git add dist'],
});
