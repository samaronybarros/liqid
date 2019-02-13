import React, { Component } from 'react'
import { createGlobalStyle } from 'styled-components'

import Survey from './components/Survey'

const GlobalStyle = createGlobalStyle`
  body {
    background: #eeeeee;
    font: 'Montserrat'
  }
`

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <GlobalStyle />
                <Survey />
            </React.Fragment>
        )
    }
}

export default App
