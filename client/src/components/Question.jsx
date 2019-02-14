import React, { Component } from 'react'

import { Button, Input, ProgressBar, Radio, RadioGroup } from '../components/elements'
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

    handleChangeInput = event => {
        this.setState({ value: event.target.value })
    }

    handleChangeRadio = event => {
        this.setState({ value: `${event.value} - ${event.description}` })
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
                {question.type === 'input' && (
                    <Input
                        type={question.type}
                        placeholder={question.description}
                        onChange={this.handleChangeInput}
                        value={this.state.value}
                    />
                )}
                {question.type === 'radio' && (
                    <RadioGroup name={'radio'}>
                        {question.options.map((option, index) => (
                            <Radio key={index} value={option.value} onSelect={this.handleChangeRadio}>
                                {option.description}
                            </Radio>
                        ))}
                    </RadioGroup>
                )}
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
