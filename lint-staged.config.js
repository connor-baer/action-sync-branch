import { defineConfig } from '@sumup-oss/foundry/lint-staged';

export default defineConfig({
  '*.ts': () => ['npm run build', 'git add dist'],
});
