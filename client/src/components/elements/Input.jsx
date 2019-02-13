import React, { Component } from 'react'
import styled from 'styled-components'

const Form = styled.form`
    margin: 5px;
`

const Wrapper = styled.input`
    padding: 10px;
    margin: 10px;
    font-size: 10pt;
    border-radius: 10px;
    width: 750px;
    align-self: center;
    outline: none;
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
