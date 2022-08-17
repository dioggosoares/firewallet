import { ThemeProvider } from 'styled-components'
import { ChakraProvider } from '@chakra-ui/react'

import { TransactionsProvider } from './contexts/TransactionsContext'
import { Transactions } from './pages/Transactions'
import { GlobalStyle } from './styles/global'

import { defaultTheme } from './styles/themes/default'
import { chakraTheme } from './styles/themes/chakraTheme'

export function App() {
  return (
    <ChakraProvider theme={chakraTheme}>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <TransactionsProvider>
          <Transactions />
        </TransactionsProvider>
      </ThemeProvider>
    </ChakraProvider>
  )
}
