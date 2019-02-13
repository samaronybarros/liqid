import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    margin-left: 5px;
    height: 50px;
    background: rgb(0, 0, 150, 0.8);
    color: #000;
    text-align: center;
`

class PanelHeader extends Component {
    render() {
        return <Wrapper>{this.props.children}</Wrapper>
    }
}

export default PanelHeader
