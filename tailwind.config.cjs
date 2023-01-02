/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        purple: '#635FC7',
        purpleHover: '#A8A4FF',
        black: '#000112',
        lightGray: '#F4F7FD',
        mediumGray: '#828FA3',
        darkGray: '#2B2C37',
        veryDarkGray: '#20212C',
        linesDark: '#3E3F4E',
        linesLight: '#E4EBFA',
        red: '#EA5555',
        redHover: '#FF9898',
      },
      fontSize: {
        bodyL: [
          '0.8125rem',
          {
            lineHeight: '1.4375rem',
            fontWeight: '500',
          },
        ],
        bodyM: [
          '0.75rem',
          {
            lineHeight: '0.9375rem',
            fontWeight: '700',
          },
        ],
        headingXl: [
          '1.5rem',
          {
            lineHeight: '1.875rem',
            fontWeight: '700',
          },
        ],
        headingL: [
          '1.125rem',
          {
            lineHeight: '1.4375rem',
            fontWeight: '700',
          },
        ],
        headingM: [
          '0.9375rem',
          {
            lineHeight: '1.1875rem',
            fontWeight: '700',
          },
        ],
        headingS: [
          '0.75rem',
          {
            lineHeight: '0.9375rem',
            fontWeight: '700',
          },
        ],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
