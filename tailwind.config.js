module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      paper: {
        default: '#fbfbf8',
        littleGreen: '#f2eecb',
        behrPure: '#f8f7ed',
        delicateSeashell: '#ffefdd',
        craftCrnDia: '#a7834b',
        sketchCrnDia: '#d0ccc3',
        parchmentDnEd: '#fff7df',
        },
      white: {
        default: '#efefef',
        },
      gray: {
        default: '#374151',
        },
      primary: {
        lighter: '#ef5196',
        light: '#ef3888',
        default: '#E81974',
        dark: '#944065',
        darker: '#730334'
        },
      secondaryA: {
        lighter: '#e3b1f3',
        light: '#d371f3',
        DEFAULT: '#a21dcc',
        dark: '#5c3a66',
        darker: '#2e003d'
        },
      secondaryB: {
        lighter: '#A7F3CA',
        light: '#69F3A9',
        DEFAULT: '#17D36E',
        dark: '#078642',
        },
      complementary: {
        lighter: '#DBFCAD',
        light: '#BFFC6C',
        DEFAULT: '#97F21A',
        dark: '#5C9A08',
        },
      },
    width: {
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '48px',
      bookW: '574.48px',
      half: '50%',
      small: '40%',
      full: '100vw',
      },
    height: {
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '48px',
      bookH: '865.51px',
      fullheight: '100%',
      full: '100vh',
      mobile: '1020px',
      },
    fontFamily: {
      'castoro': ['castoro', 'serif'],
      },
    screens: {
      'mobile': '360px',
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
      },
      extend: {
        gridTemplateRows: {
         '3': 'repeat(3, minmax(0, auto))',
        }
      }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
