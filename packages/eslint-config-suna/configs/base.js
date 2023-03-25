require('@rushstack/eslint-patch/modern-module-resolution');

/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  env: { es2022: true },
  extends: ['airbnb-base'],
  overrides: [
    {
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'airbnb-base',
        'airbnb-typescript/base',
      ],
      files: '**/*.ts',
      plugins: ['typescript-sort-keys'],
      rules: {
        '@typescript-eslint/consistent-type-exports': 'error',
        '@typescript-eslint/consistent-type-imports': 'error',
        'typescript-sort-keys/interface': 'warn',
      },
    },
  ],
  parserOptions: { ecmaVersion: 'latest' },
  plugins: ['simple-import-sort', 'sort-destructure-keys', 'sort-keys-fix'],
  rules: {
    'simple-import-sort/exports': 'warn',
    'simple-import-sort/imports': 'warn',
    'sort-destructure-keys/sort-destructure-keys': 'warn',
    'sort-keys-fix/sort-keys-fix': 'warn',
  },
  settings: { 'import/resolver': { typescript: { alwaysTryTypes: true } } },
};
