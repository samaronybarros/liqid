import React, { Component } from 'react'

import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

import Style from './Style'

const selectedradio = css`
    background-color: ${Style.primaryColor};
    color: ${Style.secondaryColor};
`

const RadioButton = styled.button`
    background-color: ${Style.secondaryColor};
    margin: 5px;
    border: 1px solid ${Style.primaryColor};
    outline: none;
    font-size: ${Style.defaultTextSize};
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    padding: 5%;

    ${props => props.selected && selectedradio};
`

class Radio extends Component {
    constructor(props) {
        super(props)
        this.state = { selected: false, value: null, description: null }
    }

    toggle = () => {
        if (!this.state.selected) {
            const { onChange } = this.context.radioGroup

            const selected = !this.state.selected
            const value = this.props.value
            const description = this.props.children

            this.setState({ selected, value, description })

            this.props.onSelect({ value, description })
            onChange(selected, this)
        }
    }

    setSelected(selected) {
        this.setState({ selected })
    }

    render() {
        let selected = this.state.selected ? 'active' : ''

        return (
            <RadioButton selected={selected} onClick={this.toggle} onSelect={this.props.onSelect}>
                {this.props.children}
            </RadioButton>
        )
    }
}

Radio.contextTypes = {
    radioGroup: PropTypes.object,
}

export default Radio
