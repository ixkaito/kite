/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    fontSize: {
      base: ['0.875rem', '1rem'],
    },
    extend: {
      fontFamily: {
        inter: "'Inter', sans-serif",
      },
      keyframes: {
        'stretch-animation': {
          from: {
            transform: 'translateY(0)',
          },
          to: {
            transform: 'translateY(calc(-100% + 1px))',
          },
        },
        'loading-1': {
          from: {
            transform: 'scaleX(0)',
          },
          to: {
            transform: 'scaleX(1)',
          },
        },
        'loading-2': {
          from: {
            transform: 'scaleY(1)',
          },
          to: {
            transform: 'scaleY(409.6)',
          },
        },
        'slide-up': {
          from: {
            transform: 'translateY(100%)',
          },
          to: {
            transform: 'translateY(0)',
          },
        },
      },
      zIndex: {
        header: 100,
        footer: 100,
        menu: 99,
        bg: -10,
        'bg-active': -9,
      },
    },
  },
  plugins: [
    require('tailwindcss-easing'),
    plugin(({ addUtilities }) => {
      addUtilities({
        '.scrollbar-none': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      });
    }),
  ],
};
