import React from 'react'
import styled from 'styled-components'

import Style from '../elements/Style'

import { Button } from '../elements'

const Wrapper = styled.div``

const FlexWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: auto;
`

const QAWrapper = styled.div`
    display: flex;
    flex-direction: row;
`

const Title = styled.p`
    font-size: 22pt;
    color: ${Style.primaryColor};
    font-weight: 900;
`

const Question = styled.p`
    font-size: 12pt;
    color: ${Style.questionColor};
    margin-left: 15px;
    margin-right: 15px;
    text-align: left;
    font-weight: 900;
`

const Answer = styled.p`
    font-size: 12pt;
    color: ${Style.answerColor};
    margin-left: 15px;
    margin-right: 15px;
    text-align: left;
`

const Summary = props => (
    <Wrapper>
        <FlexWrapper>
            <Title>Summary</Title>
        </FlexWrapper>
        <Wrapper>
            {props.questions.map((question, index) => {
                return (
                    <QAWrapper key={index}>
                        <Question>{question.description}</Question>
                        <Answer>{props.answers[index]}</Answer>
                    </QAWrapper>
                )
            })}
        </Wrapper>
        <FlexWrapper>
            <Button primary size={30} bold linkTo={`/`}>
                Home
            </Button>
        </FlexWrapper>
    </Wrapper>
)

export default Summary
