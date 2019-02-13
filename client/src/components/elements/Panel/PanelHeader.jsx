import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    height: 70px;
    background: rgb(0, 0, 150, 0.8);
    color: #000;
    text-align: center;
`

const Label = styled.p`
    font-size: 18pt;
    color: #fff;
    position: relative;
    top: 50%;
    transform: perspective(1px) translateY(-50%);
`

class PanelHeader extends Component {
    render() {
        return (
            <Wrapper>
                <Label>{this.props.children}</Label>
            </Wrapper>
        )
    }
}

export default PanelHeader
