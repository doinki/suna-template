/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: 'suna/react',
  parserOptions: { project: require.resolve('./tsconfig.json') },
  root: true,
};
