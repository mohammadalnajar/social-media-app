/* eslint-disable global-require */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      xs: '475px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        'dark-main': '#18191A',
        'dark-second': '#242526',
        'dark-third': '#3A3B3C',
        'dark-txt': '#B8BBBF',
        'dark-hover': '#4E4F50',
        'dark-bg-modal-open': '#263951',
        'dark-text-modal-open': '#2E89FF',
        'bg-modal-open': '#E7F3FF',
        'text-modal-open': '#1876F2',
        'btn-primary': '#2374E1',
        'btn-primary-hover': '#3982E4',
      },
      keyframes: {
        rotateUP: {
          '0%': { transform: 'rotateZ(0deg)' },
          '100%': { transform: 'rotateZ(180deg)' },
        },
        rotateDown: {
          '0%': { transform: 'rotateZ(180deg)' },
          '100%': { transform: 'rotateZ(0deg)' },
        },
        leftTrans: {
          '0%': {
            transform: 'translateX(0)',
            opacity: '1',
          },
          '100%': {
            transform: 'translateX(-50px)',
            opacity: '0',
          },
        },
        rightTrans: {
          '0%': {
            transform: 'translateX(-50px)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
      },
      animation: {
        rotateUP: 'rotateUP .3s ease-in-out forwards',
        rotateDown: 'rotateDown .3s ease-in-out forwards',
        leftTrans: 'leftTrans .6s ease-in-out forwards',
        rightTrans: 'rightTrans .3s ease-in-out forwards',
      },
    },
  },
  // eslint-disable-next-line import/no-extraneous-dependencies
  plugins: [require('daisyui'), require('tailwind-scrollbar')],
  daisyui: {
    styled: true,
    themes: false,
    rtl: false,
  },
};
