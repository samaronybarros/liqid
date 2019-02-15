import React, { Component } from 'react'
import styled from 'styled-components'

import LoadingBar from './LoadingBar'

const Wrapper = styled.div`
    padding: 30px;
    margin: auto;
`

const Title = styled.div`
    width: 50%;
    margin: 0 auto;
`

const Text = styled.div``

const Button = styled(Title)`
    padding-bottom: 30px;
    width: 50%;
`

export default class LoadingSurvey extends Component {
    render() {
        const bars = 10
        const contentText = Array.apply(null, Array(bars)).map((value, index) => (
            <LoadingBar key={index} from={0} to={1000} height={6} roundedBorder top={10} />
        ))

        return (
            <Wrapper>
                <Title>
                    <LoadingBar from={0} to={250} height={30} roundedBorder top={10} />
                </Title>
                <Text>
                    <LoadingBar from={0} to={1000} height={6} roundedBorder top={50} />
                    {contentText}
                </Text>

                <Button>
                    <LoadingBar from={0} to={250} height={50} roundedBorder top={40} />
                </Button>
            </Wrapper>
        )
    }
}
