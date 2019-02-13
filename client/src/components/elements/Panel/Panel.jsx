import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    background: #ffffff;
    width: 800px;
    box-shadow: 0px 0px 5px 5px #c9c9c9;
    margin: 20px;
    margin-top: 25px;
    transition: 0.3s;

    &:hover {
        box-shadow: 0px 0px 8px 8px #c9c9c9;
    }
`

class Panel extends Component {
    render() {
        return <Wrapper>{this.props.children}</Wrapper>
    }
}

export default Panel
