import React, { Component } from 'react'

import { Button, Input, ProgressBar, Radio, RadioGroup, Dropdown } from '../components/elements'
import { Panel, PanelHeader, PanelDivider, PanelActions } from '../components/elements/Panel'

import styled from 'styled-components'

import api from '../api'
import { formatAnswer } from '../utils'

const Wrapper = styled.div`
    width: 750px;
    margin: 20px;
`

class Question extends Component {
    constructor(props) {
        super(props)

        this.state = {
            index: '',
            value: '',
        }
    }

    handleChangeInput = event => {
        this.setState({ value: event.target.value })
    }

    handleChangeRadio = event => {
        this.setState({ value: `${event.value} - ${event.description}` })
    }

    handleChangeDropdown = event => {
        const value = event.target.value
        const description = event.target[event.target.selectedIndex].text

        this.setState({ value: `${value} - ${description}` })
    }

    handleClickNext = () => {
        this.props.updateAnswer(this.state.index, this.state.value)

        if (this.state.index === this.props.questionsLength - 1) {
            const answer = formatAnswer(this.props.allQuestion, this.props.allAnswers)

            const newAnswer = { answer } //JSON.stringify({ answer })

            api.saveAnswer(newAnswer)
        }
    }

    componentDidMount = () => {
        this.setState({ index: this.props.index })

        if (this.props.allAnswers[this.props.index]) {
            this.setState({ value: this.props.allAnswers[this.props.index] })
        }
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
                    <RadioGroup name={question._id}>
                        {question.options.map((option, index) => (
                            <Radio key={index} value={option.value} onSelect={this.handleChangeRadio}>
                                {option.description}
                            </Radio>
                        ))}
                    </RadioGroup>
                )}
                {question.type === 'dropdown' && (
                    <Dropdown options={question.options} onChange={this.handleChangeDropdown} />
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
                        linkTo={next || '/summary'}
                        primary
                        disabled={!this.state.value}
                        onClick={this.handleClickNext}>
                        {next ? 'Next' : 'Finish'}
                    </Button>
                </PanelActions>
            </Panel>
        )
    }
}

export default Question
