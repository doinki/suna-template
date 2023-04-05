require('@rushstack/eslint-patch/modern-module-resolution');

/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  ignorePatterns: ['coverage', 'dist', 'public', 'storybook-static'],
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.test.ts?(x)',
          '**/jest.setup.ts',
          '**/next.config.js',
        ],
      },
    ],
    'import/prefer-default-export': 'off',
  },
};
