import React, { Component } from 'react'
import styled from 'styled-components'

import Style from '../elements/Style'

const Wrapper = styled.table`
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

class Table extends Component {
    render() {
        const { questions, answers } = this.props

        return (
            <Wrapper>
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
            </Wrapper>
        )
    }
}

export default Table
