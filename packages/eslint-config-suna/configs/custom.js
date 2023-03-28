require('@rushstack/eslint-patch/modern-module-resolution');

/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  ignorePatterns: ['dist', 'public'],
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['**/*.test.ts?(x)', '**/jest.setup.ts'] },
    ],
    'import/prefer-default-export': 'off',
  },
};
