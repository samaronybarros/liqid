import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    border-top: 3px solid #eeeeee;
    margin: 5px;
    padding-top: 10px;
    padding-bottom: 10;
`

class PanelDivider extends Component {
    render() {
        return <Wrapper />
    }
}

export default PanelDivider
