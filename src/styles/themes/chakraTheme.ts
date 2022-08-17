import { extendTheme } from '@chakra-ui/react'

export const chakraTheme = extendTheme({
  colors: {
    gray: {
      '900': '#181b23',
      '800': '#1f2029',
      '700': '#353646',
      '600': '#4b4d63',
      '500': '#616480',
      '400': '#797d9a',
      '300': '#9699b0',
      '200': '#b3b5c6',
      '100': '#d1d2dc',
      '50': '#eeeef2',
    },
    primary: {
      100: '#434251',
      300: '#494459',
      500: '#1F1D2C',
    },
    blue: {
      '300': '#49D0FF',
      '500': '#0EC0FF',
      '700': '#0784B1',
    },
    green: {
      '500': '#21B17F',
    },
    orange: {
      '500': '#FE7551',
    },
    pink: {
      '300': '#FF608D',
      '500': '#D53F8C',
      '700': '#B83280',
      '900': '#F32C64',
    },
  },
  fonts: {
    heading: `'Roboto', 'Ubuntu'`,
    body: `'Roboto', 'Ubuntu'`,
  },
  styles: {
    global: {
      body: {
        bg: 'gray.800',
        color: 'gray.50',
      },
    },
  },
})
