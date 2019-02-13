import React, { Component } from 'react'

import { BrowserRouter as Router } from 'react-router-dom'

import { Button, Input } from './elements'
import { Panel, PanelHeader, PanelDivider, PanelActions } from './elements/Panel'

class Survey extends Component {
    state = {
        value: '',
    }

    handleChange = event => {
        this.setState({ value: event.target.value })
    }

    render() {
        return (
            <Router>
                <Panel>
                    <PanelHeader>How old are you?</PanelHeader>
                    <Input type={'text'} placeholder={'How old are you?'} onChange={this.handleChange} />
                    <PanelDivider />
                    <PanelActions>
                        <Button linkTo={'/back'}>Back</Button>
                        <Button linkTo={'/next'} primary disabled={!this.state.value}>
                            Next
                        </Button>
                    </PanelActions>
                </Panel>
            </Router>
        )
    }
}

export default Survey
