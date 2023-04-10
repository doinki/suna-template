require('@rushstack/eslint-patch/modern-module-resolution');

/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  ignorePatterns: ['coverage', 'dist', 'public', 'storybook-static'],
  rules: {
    '@typescript-eslint/no-unsafe-assignment': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.test.ts?(x)',
          '**/jest.setup.ts',
          '**/next.config.js',
          '**/rollup.config.mjs',
        ],
      },
    ],
    'import/prefer-default-export': 'off',
  },
};
