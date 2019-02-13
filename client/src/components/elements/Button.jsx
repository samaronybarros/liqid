import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

const disabledStyle = css`
    opacity: 0.5;
    cursor: default;
    box-shadow: none !important;
    pointer-events: none;
`

const Wrapper = styled.button`
    background: ${props => (props.primary ? 'blue' : 'white')};
    color: ${props => (props.primary ? 'white' : 'blue')};

    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid blue;
    border-radius: 3px;
    display: block;
    cursor: pointer;

    ${props => props.disabled && disabledStyle};
`

const ButtonLink = styled(Link)`
    text-decoration: none;
    color: ${props => (props.primary ? 'white' : 'blue')};
`

class Button extends Component {
    static propTypes = {
        /**
         * Indicates the button route
         */
        linkTo: PropTypes.string,
        /**
         * Indicates the button colors
         */
        primary: PropTypes.bool,
        /**
         * Whether the button is disabled or not
         * This prevents any pointer events on the button
         */
        disabled: PropTypes.bool,
    }

    render() {
        const { linkTo, primary, disabled } = this.props
        console.log('TCL: Button -> render -> primary', primary)
        return (
            <Wrapper primary={primary} disabled={disabled}>
                <ButtonLink to={linkTo} primary={primary}>
                    {this.props.children}
                </ButtonLink>
            </Wrapper>
        )
    }
}

export default Button
