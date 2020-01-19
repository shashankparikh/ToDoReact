import React from 'react'
import './App.css'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import Home from './Epics/Pages/home'
function App () {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <Home />
      </div>
    </ThemeProvider>
  )
}

export default App
