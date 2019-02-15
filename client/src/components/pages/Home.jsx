import React, { Component } from 'react'
import styled from 'styled-components'

import { Button } from '../elements'
import { LoadingSurvey } from '../elements/Loader'

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
    font-size: 22pt;
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

        console.log('TCL: Home -> render -> loading', loading)

        return !loading ? (
            <Wrapper>
                <Title>Online Survey</Title>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sagittis enim ac turpis
                    facilisis, ac mollis nisl pharetra. Suspendisse ut suscipit risus. Nam sodales magna at
                    leo egestas, sit amet ullamcorper sem convallis. Pellentesque sodales diam ac est
                    ullamcorper, et auctor dolor dignissim. Donec lacinia posuere quam, id rhoncus dui
                    pharetra quis. Etiam sed efficitur eros. Quisque nec condimentum nibh, quis viverra erat.
                    Morbi scelerisque non purus sit amet porta. Curabitur pretium molestie enim, in pretium
                    nisl ultrices et.
                </Text>
                <Button
                    primary
                    size={30}
                    bold
                    linkTo={`/${questions.length > 0 ? questions[0]._id : '/'}`}
                    onClick={this.handleStart}>
                    Start Survey
                </Button>
            </Wrapper>
        ) : (
            <LoadingSurvey />
        )
    }
}

export default Home
