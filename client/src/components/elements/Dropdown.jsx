import React, { Component } from 'react'
import styled from 'styled-components'

import Style from './Style'

const Wrapper = styled.div`
    padding: 15px;
    width: 50%;
    margin: 0 auto;
`

const Select = styled.select`
    font-size: 18px;

    background: no-repeat 96% 0;
    height: 29px;
    overflow: hidden;
    width: ${Style.childPercent};

    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: ${Style.defaultBorderRadius};

    background-color: ${Style.primaryColor};
    color: ${Style.secondaryColor};

    font-size: ${Style.defaultTextSize};
`

const Option = styled.option``

class Dropdown extends Component {
    render() {
        const { options, onChange } = this.props

        return (
            <Wrapper>
                <Select onChange={onChange}>
                    {options.map((option, index) => (
                        <Option key={index} value={option.value} name={'oi'}>
                            {option.description}
                        </Option>
                    ))}
                </Select>
            </Wrapper>
        )
    }
}

export default Dropdown
