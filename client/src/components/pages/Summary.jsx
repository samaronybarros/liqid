import React, { Component } from 'react'
import styled from 'styled-components'

import Style from '../elements/Style'

import { Panel } from '../elements/Panel'
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

const Title = styled.p`
    font-size: ${Style.titleSize};
    color: ${Style.primaryColor};
    font-weight: 900;
`

const Table = styled.table`
    margin: 0 auto;
    text-align: left;
    margin: 0 auto;
    border-collapse: collapse;
    width: 90%;
    font-size: 18px;

    table-layout: fixed;
`

const TableHead = styled.thead``
const TableBody = styled.tbody``

const LineTable = styled.tr`
    cursor: default;
    padding-left: 20px;

    &:hover {
        background-color: ${Style.hoverLineTableColor};
    }
`

const HeaderTable = styled.th`
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid ${Style.tableLineColor};
`

const DataTable = styled.td`
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid ${Style.tableLineColor};

    word-wrap: break-word;
    overflow-wrap: break-word;
`

const HeaderQuestion = styled(HeaderTable)`
    color: ${Style.primaryColor};
`

const DataQuestion = styled(DataTable)`
    color: ${Style.primaryColor};
`

const DataAnswer = styled(DataTable)`
    color: ${Style.defaultTextColor};
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
                    <Table>
                        <TableHead>
                            <LineTable>
                                <HeaderQuestion>Question</HeaderQuestion>
                                <HeaderTable>Answer</HeaderTable>
                            </LineTable>
                        </TableHead>
                        <TableBody>
                            {questions.map((question, index) => {
                                return (
                                    <LineTable key={index}>
                                        <DataQuestion>{question.description}</DataQuestion>
                                        <DataAnswer>{answers[index]}</DataAnswer>
                                    </LineTable>
                                )
                            })}
                        </TableBody>
                    </Table>
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
