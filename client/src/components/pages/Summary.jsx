import React, { Component } from 'react'
import styled from 'styled-components'

import Style from '../elements/Style'

import { Panel } from '../elements/Panel'
import { Button, Table } from '../elements'

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

const Title = styled.p`
    font-size: ${Style.titleSize};
    color: ${Style.primaryColor};
    font-weight: 900;
`
class Summary extends Component {
    render() {
        const { questions, answers } = this.props

        return (
            <Panel>
                <Wrapper>
                    <FlexWrapper>
                        <Title>Summary</Title>
                    </FlexWrapper>
                    <Table questions={questions} answers={answers} />
                    <FlexWrapper>
                        <Button primary size={30} bold linkTo={`/`}>
                            Home
                        </Button>
                    </FlexWrapper>
                </Wrapper>
            </Panel>
        )
    }
}

export default Summary
