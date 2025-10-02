import { configs, defineConfig } from '@sumup-oss/foundry/eslint';

export default defineConfig([
  configs.ignores,
  {
    extends: [configs.typescript],
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ['*.js', '*.mjs'],
        },
        // eslint-disable-next-line n/no-unsupported-features/node-builtins
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  configs.node,
]);
