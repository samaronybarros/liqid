import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Panel } from '../components/elements/Panel'

import api from '../api'
import Question from './Question'

import { Home, Summary } from '../components/pages'

//******************** HAVE TO HAVE ************************************
//TODO: [BackEnd] Create endpoint to save answers
//TODO: Make the buttons work
//TODO: Make input works with type: email, phone number, textarea and password

//******************** GOOD TO HAVE ************************************
//TODO: Create Loader on start
//TODO: Create user for answer
//TODO: Order question by sort field
//TODO: Transition animated
//TODO: Beautify Summary

class Survey extends Component {
    constructor(props) {
        super(props)

        this.state = {
            questions: [],
            answers: [1, 2, 3, 4, 5, 6, 7],
            isLoading: false,
        }
    }

    handleQuestion = question => {
        return <Question question={question} onChange={this.handleChange} />
    }

    updateAnswer = (index, answer) => {
        const answers = this.state.answers

        answers[index] = answer

        this.setState({ answers })
    }

    componentDidMount() {
        this.setState({ isLoading: true })

        api.loadQuestions().then((req, res) => {
            this.setState({
                isLoading: false,
                questions: req.data.data,
            })
        })
    }

    render() {
        const RouteQuestion = index => {
            const previous = index > 0 ? this.state.questions[index - 1]._id : null
            const next = index < this.state.questions.length - 1 ? this.state.questions[index + 1]._id : null

            return !(this.state.isLoading || this.state.questions.length === 0) ? (
                <Question
                    question={this.state.questions[index]}
                    index={index}
                    previous={previous}
                    next={next}
                    questionsLength={this.state.questions.length}
                    updateAnswer={this.updateAnswer}
                    allQuestion={this.state.questions}
                    allAnswers={this.state.answers}
                />
            ) : (
                <p>Loading...</p>
            )
        }

        const CreateRoutes = () => {
            return this.state.questions.map((question, index) => {
                return (
                    <Route
                        key={question._id}
                        path={`/${question._id}`}
                        component={() => RouteQuestion(index)}
                    />
                )
            })
        }

        return (
            <Router>
                <Panel>
                    <Route exact path="/" component={() => Home(this.state)} />
                    <CreateRoutes />
                    <Route path="/summary" component={() => Summary(this.state)} />
                </Panel>
            </Router>
        )
    }
}

export default Survey
