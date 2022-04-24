const { join } = require('path');

// available since Nx v 12.5
const { createGlobPatternsForDependencies } = require('@nrwl/next/tailwind');

module.exports = {
  mode: 'jit',
  content: [
    join(__dirname, './src/**/*.{js,ts,jsx,tsx}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  // darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#F00',
        secondary: '#0F0',
        accent: '#00F',
      },
    },
  },
  plugins: [],
  presets: [require('../../tailwind-workspace-preset.js')],
};
