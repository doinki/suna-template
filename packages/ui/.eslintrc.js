/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: 'suna/react',
  parserOptions: { project: require.resolve('./tsconfig.json') },
  root: true,
  rules: {
    '@typescript-eslint/ban-types': [
      'error',
      { extendDefaults: true, types: { '{}': false } },
    ],
  },
  settings: {
    tailwindcss: { config: require.resolve('./tailwind.config.js') },
  },
};
