/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      brand: {
        yellowLight: '#FFECA9',
        blue: '#3C59F0',
      },
      neutral: {
        transparent: 'transparent',
        current: 'currentColor',
        black: '#000',
        white: '#fff',
        neutralLighter: '#F6F6F6',
        neutralLight: '#EEEEEE',
        neutral: '#4A4A4A',
        neutralDark: '#212121',
        neutralDarker: '#1A1A1A',
        neutralDarkest: '#111111',
      },
      system: {
        successGreen: '#cef5ca',
        successGreenDark: '#114e0b',
        warningYellow: '#fcf8d8',
        warningYellowDark: '#5e5515',
        errorRed: '#f8e4e4',
        errorRedDark: '#3b0b0b',
        focusState: '#2d62ff',
      },
    },
    spacing: {
      0: '0',
      '5xs': '0.1rem',
      '4xs': '0.25rem',
      '3xs': '0.5rem',
      '2xs': '0.6rem',
      xs: '0.75rem',
      sm: '0.9rem',
      md: '1rem',
      lg: '1.1rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.6rem',
      '4xl': '1.85rem',
      '5xl': '2rem',
      '6xl': '2.5rem',
      '7xl': '2.75rem',
      '8xl': '3.5rem',
      '9xl': '4.5rem',
      '10xl': '5.125rem',
      '11xl': '6.25rem',
      '12xl': '7.5rem',
      '13xl': '9rem',
      '14xl': '24rem',
      '15xl': '31.375rem',
      '16xl': '35rem',
      '17xl': '47.5rem',
      '18xl': '67.25rem',
    },
    fontSize: {
      '2xs': '0.875rem',
      xs: '1rem',
      sm: ['1.125rem', '1.4rem'],
      md: ['1.25rem', '1.625rem'],
      lg: ['1.5rem', '2.25rem'],
      xl: ['1.75rem', '2.3rem'],
      '2xl': '2.5rem',
      h1: ['3.375rem', '4.25rem'],
      h2: ['2.75rem', '3.43rem'],
      h3: ['1.75rem', '2.3rem'],
      h4: ['2.25rem', '2.8125rem'],
      h5: ['1.75rem', '2.1875rem'],
      h6: ['1.375rem', '1.75rem'],
      mobileH1: ['2.25rem', '2.75rem'],
      mobileH2: ['2.25rem', '2.75rem'],
    },
    fontFamily: {
      ceraPro: ['var(--font-cerapro)'],
    },
    fontWeight: {
      regular: '400',
      medium: '600',
      bold: '700',
    },
    extend: {
      aspectRatio: {
        '3/2': '3 / 2',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default tailwindConfig;
