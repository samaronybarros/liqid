import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.div`
    height: 10px;
    background: linear-gradient(90deg, rgb(0, 0, 150, 0.8) 0%, rgb(0, 0, 150, 0.8) 100%);
    background-repeat: no-repeat;
    background-size: ${props => props.percent}%;
    transition: all 0.2s ease;
    border: 1px solid rgb(0, 0, 150, 0.8);
    border-radius: 10px;
`

export default class ProgressBar extends Component {
    static propTypes = {
        /**
         * The current state of the progress bar.
         */
        current: PropTypes.number.isRequired,
        /**
         * The max state the progress bar can have.
         */
        max: PropTypes.number.isRequired,
    }

    render() {
        const { current, max } = this.props
        const percent = (current * 100) / max
        return <Wrapper percent={percent} />
    }
}
