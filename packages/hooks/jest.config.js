/**
 * @type {import('jest').Config}
 */
module.exports = {
  testEnvironment: 'jsdom',
  transform: { '\\.(j|t)s$': '@swc/jest' },
};
