/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: 'suna/next',
  parserOptions: { project: require.resolve('./tsconfig.json') },
  settings: {
    'import/resolver': {
      typescript: { project: require.resolve('./tsconfig.json') },
    },
    tailwindcss: { config: require.resolve('./tailwind.config.js') },
  },
};
