require('@rushstack/eslint-patch/modern-module-resolution');

/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  overrides: [
    {
      extends: ['plugin:testing-library/react'],
      files: [
        '**/__tests__/**/*.@(j|t)s?(x)',
        '**/?(*.)+(spec|test).@(j|t)s?(x)',
      ],
    },
  ],
};
