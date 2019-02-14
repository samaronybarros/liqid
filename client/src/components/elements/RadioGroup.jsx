import React, { Component } from 'react'

import styled from 'styled-components'
import PropTypes from 'prop-types'

const RadioGroupWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 5px;
`

class RadioGroup extends Component {
    constructor(props) {
        super(props)
        this.options = []

        this.state = { selected: null }
    }

    getChildContext() {
        const { name } = this.props
        return {
            radioGroup: {
                name,
                onChange: this.onChange.bind(this),
            },
        }
    }

    onChange(selected, child) {
        this.options.forEach(option => {
            if (option !== child) {
                option.setSelected(!selected)
            }
        })
    }

    handleChange = () => {
        for (let i = 0; i < this.options.length; i++) {
            if (this.options[i].state.selected) {
                return this.options[i]
            }
        }
        return null
    }

    handleSelected = selected => {
        this.setState({ selected })
    }

    render() {
        console.log(this.props)
        let children = React.Children.map(this.props.children, child => {
            return React.cloneElement(child, {
                ref: component => {
                    this.options.push(component)
                },
            })
        })
        return (
            <RadioGroupWrapper className="radio-group" onChange={this.handleChange}>
                {children}
            </RadioGroupWrapper>
        )
    }
}

RadioGroup.childContextTypes = {
    radioGroup: PropTypes.object,
}

export default RadioGroup
