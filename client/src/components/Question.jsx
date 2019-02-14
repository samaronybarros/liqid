import React, { Component } from 'react'

import { Button, Input, ProgressBar } from '../components/elements'
import { Panel, PanelHeader, PanelDivider, PanelActions } from '../components/elements/Panel'

import styled from 'styled-components'

const Wrapper = styled.div`
    width: 750px;
    margin: 20px;
`

class Question extends Component {
    constructor(props) {
        super(props)

        this.state = {
            value: '',
        }
    }

    handleChange = event => {
        this.setState({ value: event.target.value })
    }

    handleClickBack = () => {
        console.log('Back')
    }

    handleClickNext = () => {
        console.log('Next')
    }

    render() {
        const { question, previous, next, index, questionsLength } = this.props

        return (
            <Panel>
                <Wrapper>
                    <ProgressBar current={index} max={questionsLength} />
                </Wrapper>
                <PanelHeader>{question.description}</PanelHeader>
                <Input
                    type={question.type}
                    placeholder={question.description}
                    onChange={this.handleChange}
                    value={this.state.value}
                />
                <PanelDivider />
                <PanelActions>
                    <Button
                        linkTo={previous || question._id}
                        disabled={!previous}
                        onClick={this.handleClickBack}>
                        Back
                    </Button>
                    <Button
                        linkTo={next || question._id}
                        primary
                        disabled={!this.state.value || !next}
                        onClick={this.handleClickNext}>
                        {next ? 'Next' : 'Finish'}
                    </Button>
                </PanelActions>
            </Panel>
        )
    }
}

export default Question
