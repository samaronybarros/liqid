import React, { Component } from 'react'
import styled from 'styled-components'

import Style from '../Style'

const Wrapper = styled.div`
    padding: 0px 8px;
    height: 70px;
    background: ${Style.primaryColor};
    text-align: center;
`

const Label = styled.p`
    font-size: ${Style.questionSize};
    color: ${Style.textHeaderColor};
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
