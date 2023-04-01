const tailwindConfig = require('@suna/ui/tailwind.config');

/**
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  ...tailwindConfig,
  content: ['src/**/*.@(j|t)s?(x)', '../../packages/ui/src/**/*.@(j|t)s?(x)'],
  darkMode: 'class',
};
