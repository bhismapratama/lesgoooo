/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    {
      pattern: /_(cols|rows)-(.+)/,
      variants: ['sm', 'md', 'lg', 'xl'],
    },
    {
      pattern: /grid-(rows|cols)-(.+)/,
      variants: ['sm', 'md', 'lg', 'xl'],
    },
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['var(--font-poppins)'],
        secondary: ['klo mau nambah lagi bebas'],
      },
      colors: {
        // MAIN COLOR
        primary: {
          100: '#D4F3FF',
          200: '#AAE7FF',
          300: '#7FDBFF',
          400: '#55CFFF',
          500: '#2AC3FF',
          600: '#00B8FF',
          700: '#0099D4',
          800: '#007AAA',
          900: '#005C7F',
          1000: '#003D55',
          1100: '#001E2A',
        },
        secondary: {
          100: '#FAEFE7',
          200: '#F6DFCF',
          300: '#F2CFB8',
          400: '#EDBFA0',
          500: '#E9AF88',
          600: '#E59F71',
          700: '#BE845E',
          800: '#986A4B',
          900: '#4C3525',
          1000: '#6b5323',
          1100: '#261A12',
        },
        danger: {
          100: '#FAE3DD',
          200: '#F6C7BB',
          300: '#F2AC99',
          400: '#ED9077',
          500: '#E97455',
          600: '#E55934',
          700: '#BE4A2B',
          800: '#983B22',
          900: '#722C1A',
          1000: '#4C1D11',
          1100: '#260E08',
        },
        success: {
          100: '#EAF3E7',
          200: '#D6E8D0',
          300: '#C2DCB9',
          400: '#AED1A1',
          500: '#9AC58A',
          600: '#86BA73',
          700: '#6F9B5F',
          800: '#597C4C',
          900: '#435D39',
          1000: '#2C3E26',
          1100: '#161F13',
        },
        whites: {
          100: '#FDFDFD',
          200: '#FCFCFC',
          300: '#FBFBFB',
          400: '#FAFAFA',
          500: '#F9F9F9',
          600: '#F8F8F8',
          700: '#CECECE',
          800: '#A5A5A5',
          900: '#7C7C7C',
          1000: '#525252',
          1100: '#292929',
        },
        //
        black: {
          50: '#e6e6e6',
          100: '#b0b0b0',
          200: '#8a8a8a',
          300: '#545454',
          400: '#333333',
          500: '#000000',
          600: '#000000',
          700: '#000000',
          800: '#000000',
          900: '#000000',
        },
        typo: {
          white: '#ffffff',
          surface: '#F9FAFB',
          light: '#F0F2F5',
          outline: '#E4E7EB',
          inline: '#D1D5DC',
          icon: '#9AA2B1',
          secondary: '#687083',
          label: '#1a3650',
          primary: '#212121',
        },
      },
      boxShadow: {
        20: '0px 0.5px 2px rgba(65, 78, 98, 0.12), 0px 0px 1px rgba(65, 78, 98, 0.05)',
        40: '0px 2px 4px rgba(65, 78, 98, 0.12), 0px 0px 1px rgba(65, 78, 98, 0.05)',
        60: '0px 4px 8px rgba(65, 78, 98, 0.12), 0px 0px 1px rgba(65, 78, 98, 0.05);',
        80: '0px 8px 16px rgba(65, 78, 98, 0.12), 0px 0px 1px rgba(65, 78, 98, 0.05);',
        100: '0px 16px 24px rgba(65, 78, 98, 0.12), 0px 0px 1px rgba(65, 78, 98, 0.05);',
      },
    },
  },

  plugins: [
    require('@tailwindcss/forms'),
  ],
};