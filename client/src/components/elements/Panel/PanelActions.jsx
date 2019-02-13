import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
`

class PanelActions extends Component {
    render() {
        return <Wrapper>{this.props.children}</Wrapper>
    }
}

export default PanelActions
