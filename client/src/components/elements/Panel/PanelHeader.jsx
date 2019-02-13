import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    padding: 0px 8px;
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
    font-weight: 600;
`

const Bold = styled.span`
    font-weight: 900;
`

class PanelHeader extends Component {
    render() {
        return (
            <Wrapper>
                <Label>
                    <Bold>Question: </Bold>
                    {this.props.children}
                </Label>
            </Wrapper>
        )
    }
}

export default PanelHeader
