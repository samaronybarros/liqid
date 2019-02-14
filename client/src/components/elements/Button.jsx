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
    font-size: ${props => (props.size ? `${props.size}px` : '1em')};
    font-weight: ${props => (props.bold ? `700` : null)};

    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid ${Style.primaryColor};
    border-radius: 10px;
    display: block;
    cursor: pointer;

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
         * Indicates if the button text is bold
         */
        bold: PropTypes.bool,
        /**
         * Whether the button is disabled or not
         * This prevents any pointer events on the button
         */
        disabled: PropTypes.bool,
    }

    render() {
        const { linkTo, primary, disabled, size, bold, onClick } = this.props
        return (
            <Wrapper primary={primary} disabled={disabled} size={size} bold={bold}>
                <ButtonLink to={linkTo} primary={primary ? 1 : 0} onClick={onClick}>
                    {this.props.children}
                </ButtonLink>
            </Wrapper>
        )
    }
}

export default Button
