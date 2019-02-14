import React, { Component } from 'react'
import styled from 'styled-components'

import Style from '../Style'

const Wrapper = styled.div`
    background: ${Style.panelBackgroundColor};
    width: 800px;
    box-shadow: 0px 0px 5px 5px ${Style.shadow};
    transition: 0.3s;

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: auto;
    margin: auto;
    margin-top: 10px;

    border-radius: 10px;

    &:hover {
        box-shadow: 0px 0px 8px 8px ${Style.shadow};
    }
`

class Panel extends Component {
    render() {
        return <Wrapper>{this.props.children}</Wrapper>
    }
}

export default Panel
