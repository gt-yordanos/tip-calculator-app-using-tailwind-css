/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html', './build/*.js'],
  theme: {
    extend: {
      colors: {
        'strong-cyan': 'hsl(172, 67%, 45%)',
        'very-dark-cyan': 'hsl(183, 100%, 15%)',
        'dark-grayish-cyan': 'hsl(186, 14%, 43%)',
        'grayish-cyan': 'hsl(184, 14%, 56%)',
        'light-grayish-cyan': 'hsl(185, 41%, 84%)',
        'very-light-grayish-cyan': 'hsl(189, 41%, 97%)',
        'white': 'hsl(0, 0%, 100%)',
        'active-bg': 'hsl(172, 67%, 45%)',
      },
      fontFamily: {
        'space-mono': ['"Space Mono"', 'monospace'],
      },
      padding: {
        '10vw': '10vw',
        '20vw': '20vw',
        '30vw': '30vw',
        '0vw': '0vw',
        '5vw': '5vw',
        '0': '0',
        '10': '10px',
        '20': '20px',
        '30': '30px',
        '10vh': '10vh',
        '20vh': '20vh',
        '30vh': '30vh',
      },
      height: {
        '120vh': '120vh',
        '125vh': '125vh',
        '110vh': '110vh',
        '90%': '90%',
        '140vh': '140vh',
        '7vh': '7vh',
        '10vh': '10vh',
      },
      screens: {
        'mobile': { 'max': '474px' }, // Adjusted to avoid conflict with sm breakpoint
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'), // Ensure this plugin is included
  ],
};
