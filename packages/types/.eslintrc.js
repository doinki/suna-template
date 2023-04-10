/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: 'suna/base',
  parserOptions: { project: require.resolve('./tsconfig.json') },
  root: true,
  rules: {
    '@typescript-eslint/ban-types': [
      'error',
      { extendDefaults: true, types: { '{}': false } },
    ],
    '@typescript-eslint/no-explicit-any': 'off',
  },
};
