/* eslint-disable */

/**
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  content: ['src/**/*.@(j|t)s?(x)', 'stories/**/*.@(j|t)s?(x)'],
  theme: {
    extend: {
      keyframes: {
        'skeleton-pulse': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.4 },
        },
      },
      animation: {
        'skeleton-pulse': 'skeleton-pulse 1.5s ease-in-out 0.5s infinite',
      },
      scale: { 60: '0.6' },
      content: { nbsp: '"\u00A0"' },
    },
  },
};
