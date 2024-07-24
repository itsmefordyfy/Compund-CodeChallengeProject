import React from 'react'
import { ReduxProvider, ThemeProvider } from '../provider'
import { AppNavigation } from './nav'

const App = () => {
  return (
    <ReduxProvider>
      <ThemeProvider>
        <AppNavigation />
      </ThemeProvider>
    </ReduxProvider>
  )
}

export default App
