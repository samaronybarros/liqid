import React, { Component } from 'react'
import styled from 'styled-components'

import { Button } from '../elements'
import { LoadingSurvey } from '../elements/Loader'
import { Panel } from '../elements/Panel'

import Style from '../elements/Style'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    margin-bottom: 50px;
    align-items: center;
    justify-content: center;
`

const Title = styled.p`
    font-size: ${Style.titleSize};
    color: ${Style.primaryColor};
    font-weight: 900;
    padding: 10px;
`

const Text = styled.p`
    font-size: 14pt;
    color: ${Style.primaryColor};
    margin-left: 30px;
    margin-right: 30px;
    text-align: center;
`

class Home extends Component {
    handleStart = () => {
        this.props.onStartSurvey(true)
    }

    render() {
        const { questions, loading } = this.props

        return !loading ? (
            <Panel>
                <Wrapper>
                    <Title>Online Survey</Title>
                    <Text>
                        A survey is not just an online tool that helps you jot down a list of questions, it's
                        much more than that. It’s an amazing way to gain insights into what your audience
                        thinks, feels, and most importantly—what it wants. You know that you should know about
                        your clients to do the best for them. Next, we’ll go through some example questions an
                        obtaining the summary of them in this software.
                    </Text>
                    <Button
                        primary
                        size={30}
                        bold
                        linkTo={`/${questions.length > 0 ? questions[0]._id : '/'}`}
                        //linkTo={'/summary'}
                        onClick={this.handleStart}>
                        Start Survey
                    </Button>
                </Wrapper>
            </Panel>
        ) : (
            <Panel>
                <LoadingSurvey />
            </Panel>
        )
    }
}

export default Home
