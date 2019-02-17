import React, { Component } from 'react'
import styled from 'styled-components'

import Style from './Style'

const Form = styled.form`
    margin: 5px;
`

const Wrapper = styled.input`
    padding: 10px;
    font-size: ${Style.defaultTextSize};
    border-radius: ${Style.defaultBorderRadius};

    display: block;
    margin: 0 auto;
    width: ${Style.childPercent};

    align-self: center;
    outline: none;
    text-align: center;
`

class Input extends Component {
    handleSubmit = event => {
        event.preventDefault()
    }

    render() {
        const { type, value, placeholder, onChange } = this.props

        return (
            <Form onSubmit={this.handleSubmit}>
                <Wrapper type={type} value={value} onChange={onChange} placeholder={placeholder} />
            </Form>
        )
    }
}

export default Input
