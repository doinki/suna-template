require('@rushstack/eslint-patch/modern-module-resolution');

/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  overrides: [
    {
      extends: ['plugin:jest/recommended', 'plugin:jest/style'],
      files: [
        '**/__tests__/**/*.@(j|t)s?(x)',
        '**/?(*.)+(spec|test).@(j|t)s?(x)',
      ],
    },
    {
      files: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],
      rules: {
        '@typescript-eslint/unbound-method': 'off',
        'jest/unbound-method': 'error',
      },
    },
  ],
};
