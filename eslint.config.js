import { configs, defineConfig } from '@sumup-oss/foundry/eslint';

export default defineConfig([
  configs.ignores,
  {
    extends: [configs.typescript],
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ['*.js', '*.cjs'],
        },
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  configs.node,
]);
