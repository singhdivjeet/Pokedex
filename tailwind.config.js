module.exports = {
  purge: {
    content: [
      './src/**/*.{js,jsx,ts,tsx}',
      './public/index.html'
    ],
    options: {
      safelist: [
        'bg-normal',
        'bg-fighting',
        'bg-flying',
        'bg-poison',
        'bg-ground',
        'bg-rock',
        'bg-bug',
        'bg-ghost',
        'bg-steel',
        'bg-fire',
        'bg-water',
        'bg-grass',
        'bg-electric',
        'bg-psychic',
        'bg-ice',
        'bg-dragon',
        'bg-dark',
        'bg-fairy'
      ],
    },
  },
  darkMode: false,
  theme: {
    container: {
      screens: {
         md: '1140px',
      }
    },
    extend: {
      colors: {
        'normal': '#A8A878',
        'fighting': '#C03028',
        'flying': '#A890F0',
        'poison': '#A040A0',
        'ground': '#E0C068',
        'rock': '#B8A038',
        'bug': '#A8B820',
        'ghost': '#705898',
        'steel': '#b8b8d0',
        'fire': '#f08030',
        'water': '#6890f0',
        'grass': '#78c850',
        'electric': '#f8d030',
        'psychic': '#f85888',
        'ice': '#98d8d8',
        'dragon': '#7038f8',
        'dark': '#705848',
        'fairy': '#ee99ac',
      },
      animation: {
        'smoke-l': 'smokeLeft 20s ease-in-out infinite',
        'smoke-r': 'smokeRight 18s ease-in-out infinite',
      },
      keyframes: {
        smokeLeft: {
          '0%': { left: '-220px' },
          '50%': { left: '-300px' },
          '100%': { left: '-220px' },
        },
        smokeRight: {
          '0%': { right: '-165px' },
          '50%': { right: '-240px' },
          '100%': { right: '-165px' },
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
