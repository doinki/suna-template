/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  env: { browser: true },
  extends: 'suna/base',
  parserOptions: { project: require.resolve('./tsconfig.json') },
  root: true,
};
