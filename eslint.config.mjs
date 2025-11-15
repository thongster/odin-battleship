// eslint.config.mjs
import { defineConfig } from 'eslint/config';
import eslint from '@eslint/js';
import globals from 'globals';
import prettier from 'eslint-config-prettier';
import eslintPluginPrettier from 'eslint-plugin-prettier';

export default defineConfig([
  // Which files to lint + ignores (replaces .eslintignore)
  {
    files: ['**/*.js'],
    ignores: ['node_modules', 'dist'],
  },

  // Base ESLint recommended rules
  eslint.configs.recommended,

  // Jest support: provides jest global variables
  {
    files: ['**/*.js'],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'warn',
    },
  },

  // Prettier plugin: makes Prettier part of ESLint
  {
    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
      'prettier/prettier': 'error',
    },
  },

  // Disable stylistic rules that conflict with Prettier
  prettier,
]);
