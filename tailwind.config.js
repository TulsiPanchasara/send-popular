module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      josefin: ['Josefin Sans', 'sans-serif'],
      allura: ['Allura']
    },
    zIndex: {
      1: -1,
      0: 0,
      10: 10,
      20: 20,
      25: 25,
      30: 30,
      40: 40,
      50: 50,
      75: 75,
      99: 99,
      100: 100,
      999: 999,
      9999: '9999',
      auto: 'auto',
      modal: '999999',
      options: '9999999'
    },
    colors: {
      customLightBlue: {
        1: '#27DEBF'
      },
      customRed: {
        1: '#DB211D',
        2: '#e84d4a'
      },
      customPink: {
        1: '#FFE7CC',
        2: '#F8EDED'
      },
      customGray: {
        1: '#707070',
        2: '#455A64',
        3: '#151D41',
        4: '#5B5B5B',
        5: '#696969'
      },
      customWhite: {
        1: '#F5F5F5'
      }
    },
    extend: {},
  },
  plugins: [],
}
