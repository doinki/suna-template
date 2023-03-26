/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: 'suna/next',
  parserOptions: { project: require.resolve('./tsconfig.json') },
};
