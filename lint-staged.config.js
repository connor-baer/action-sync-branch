module.exports = require('@sumup/foundry/lint-staged')(
  { language: 'TypeScript' },
  { '*.ts': () => 'yarn build' },
);
