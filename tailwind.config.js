const plugin = require('tailwindcss/plugin');
const fontSmooth = {
  '-webkit-font-smoothing': 'antialiased',
  '-moz-osx-font-smoothing': 'antialiased',
};

const config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/types/**/*.{js,ts,jsx,tsx,mdx}',
    './src/styles/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: '576px',
      sm: '768px',
      md: '992px',
      lg: '1200px',
      xl: '1408px',
    },
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      colors: {
        's-red': {
          50: 'hsl(5, 86%, 97%)',
          100: 'hsl(7, 87%, 94%)',
          200: 'hsl(6, 89%, 89%)',
          300: 'hsl(6, 87%, 82%)',
          400: 'hsl(6, 85%, 71%)',
          500: 'hsl(6, 79%, 60%)',
          600: 'hsl(6, 68%, 51%)',
          700: 'hsl(6, 69%, 42%)',
          800: 'hsl(6, 66%, 35%)',
          900: 'hsl(6, 59%, 31%)',
          950: 'hsl(7, 70%, 15%)',
        },
        's-orange': {
          50: 'hsl(45, 100%, 96%)',
          100: 'hsl(44, 100%, 89%)',
          200: 'hsl(44, 100%, 77%)',
          300: 'hsl(42, 100%, 65%)',
          400: 'hsl(39, 100%, 55%)',
          500: 'hsl(34, 95%, 50%)',
          600: 'hsl(28, 98%, 44%)',
          700: 'hsl(22, 94%, 37%)',
          800: 'hsl(19, 85%, 31%)',
          900: 'hsl(18, 81%, 26%)',
          950: 'hsl(17, 94%, 14%)',
        },
        's-blue': {
          50: 'hsl(217, 100%, 97%)',
          100: 'hsl(219, 95%, 93%)',
          200: 'hsl(218, 94%, 87%)',
          300: 'hsl(217, 95%, 78%)',
          400: 'hsl(218, 93%, 68%)',
          500: 'hsl(222, 90%, 62%)',
          600: 'hsl(226, 82%, 53%)',
          700: 'hsl(229, 75%, 48%)',
          800: 'hsl(231, 70%, 40%)',
          900: 'hsl(230, 63%, 33%)',
          950: 'hsl(231, 57%, 21%)',
        },
        's-gray': {
          50: 'hsl(200, 18%, 97%)',
          100: 'hsl(216, 16%, 94%)',
          200: 'hsl(223, 12%, 89%)',
          300: 'hsl(218, 12%, 82%)',
          400: 'hsl(224, 11%, 74%)',
          500: 'hsl(227, 11%, 67%)',
          600: 'hsl(231, 10%, 60%)',
          700: 'hsl(234, 8%, 51%)',
          800: 'hsl(232, 7%, 41%)',
          900: 'hsl(229, 6%, 34%)',
          950: 'hsl(230, 6%, 20%)',
        },
      },
      boxShadow: {
        upper: '0px -1px 10px -2px #44444490',
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: fontSmooth,
        h2: fontSmooth,
        h3: fontSmooth,
        h4: fontSmooth,
        h5: fontSmooth,
        h6: fontSmooth,
        p: fontSmooth,
        a: fontSmooth,
        span: fontSmooth,
        input: fontSmooth,
        label: fontSmooth,
        button: fontSmooth,
      });
    }),
  ],
  corePlugins: {
    // preflight: false,
  },
};
export default config;
