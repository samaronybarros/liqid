import React, { Component } from 'react'

import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import Style from './Style'

const disabledStyle = css`
    opacity: 0.5;
    cursor: default;
    box-shadow: none !important;
    pointer-events: none;
`

const Wrapper = styled.button`
    background: ${props => (props.primary ? Style.primaryColor : Style.secondaryColor)};
    color: ${props => (props.primary ? Style.secondaryColor : Style.primaryColor)};

    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid ${Style.primaryColor};
    border-radius: 10px;
    display: block;
    cursor: pointer;

    font-size: ${props => (props.buttonsize ? `${props.buttonsize}px` : null)};

    ${props => props.disabled && disabledStyle};
`

const ButtonLink = styled(Link)`
    text-decoration: none;
    color: ${props => (props.primary ? Style.secondaryColor : Style.primaryColor)};
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
        const { linkTo, primary, disabled, buttonsize, onClick } = this.props
        return (
            <Wrapper primary={primary} disabled={disabled}>
                <ButtonLink to={linkTo} primary={primary ? 1 : 0} onClick={onClick} buttonsize={buttonsize}>
                    {this.props.children}
                </ButtonLink>
            </Wrapper>
        )
    }
}

export default Button
