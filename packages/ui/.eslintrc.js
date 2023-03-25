/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: 'suna/react',
  parserOptions: { project: require.resolve('./tsconfig.json') },
  root: true,
  settings: {
    tailwindcss: { config: require.resolve('./tailwind.config.js') },
  },
};
