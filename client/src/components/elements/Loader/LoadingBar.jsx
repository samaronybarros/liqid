import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import PropTypes from 'prop-types'

const Pulse = keyframes`
    0% {
        background-color: rgba(165, 165, 165, 0.1)
    }
    50% {
        background-color: rgba(165, 165, 165, 0.3)
    }
    100% {
        background-color: rgba(165, 165, 165, 0.1)
    }
`

const Bar = styled.div`
    animation: ${Pulse} 1s infinite ease-in-out;
    margin: 5px;
    width: 100%;
    height: ${props => (props.height ? `${props.height}em` : '1em')};
    border-radius: ${props => (props.roundedBorder ? '5px' : null)};
    margin-left: ${props => (props.from ? `${props.from}px` : null)};
    max-width: ${props => (props.to ? `${props.to}px` : null)};
    margin-top: ${props => (props.top ? `${props.top}px` : null)};
`

export default class LoadingBar extends Component {
    static propTypes = {
        /**
         * Bar height divided by ten
         */
        height: PropTypes.number,
        /**
         * Beginning of the bar
         */
        from: PropTypes.number,
        /**
         * Ending of the bar
         */
        to: PropTypes.number,
        /**
         * Indicates wether there is rounded border in the bar
         */
        top: PropTypes.number,
        /**
         * Indicates the top of the bar
         */
        roundedBorder: PropTypes.bool,
    }

    static defaultProps = { height: 10, from: 0, to: 0, top: 0, roundedBorder: false }

    render() {
        const { height, from, to, top, roundedBorder } = this.props

        return <Bar height={height / 10} from={from} to={to} top={top} roundedBorder={roundedBorder} />
    }
}
