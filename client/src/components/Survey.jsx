import React, { Component } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import { Home, Summary } from '../components/pages'

import api from '../api'
import Question from './Question'

//******************** GOOD TO HAVE ************************************
//TODO: Make it responsive
//TODO: Make input works with type: email, phone number, textarea and password
//TODO: Verify the scrolling
//TODO: Create cards for each type of question
//TODO: Create user for answer

const PanelWrapper = styled.div`
    .fade-enter {
        opacity: 0.01;
        transform: translate(-100%, 0);
    }

    .fade-enter.fade-enter-active {
        opacity: 1;
        transition: opacity 300ms ease-in;
    }

    .fade-exit {
        opacity: 1;
    }

    .fade-exit.fade-exit-active {
        opacity: 0.01;
        transition: opacity 300ms ease-in;
    }

    div.transition-group {
        position: relative;
    }

    section.route-section {
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
    }
`

class Survey extends Component {
    constructor(props) {
        super(props)

        this.state = {
            questions: [],
            answers: [],
            isLoading: false,
        }
    }

    updateAnswer = (index, answer) => {
        const answers = this.state.answers

        answers[index] = answer

        this.setState({ answers })
    }

    resetAnswers = () => {
        this.setState({
            answers: [],
        })
    }

    handleStartSurvey = () => {
        this.resetAnswers()
    }

    componentDidMount() {
        this.setState({ isLoading: true })

        api.loadQuestions().then((req, res) => {
            this.setState({
                isLoadin: false,
                questions: req.data.data,
            })
        })

        /**As loading is fast, this timeout
         * is only illustrative */
        this.setState({ isLoading: true })
        setTimeout(() => {
            this.setState({
                isLoading: false,
            })
        }, 1000)
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
            ) : null
        }

        const QuestionRoutes = () => {
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
                <PanelWrapper>
                    <Route
                        render={({ location }) => {
                            return (
                                <TransitionGroup className="transition-group">
                                    <CSSTransition
                                        key={location.key}
                                        timeout={{ enter: 300, exit: 300 }}
                                        classNames="fade">
                                        <section className="route-section">
                                            <Switch>
                                                <Route
                                                    exact
                                                    key="summary"
                                                    path="/summary"
                                                    component={() => (
                                                        <Summary
                                                            questions={this.state.questions}
                                                            answers={this.state.answers}
                                                        />
                                                    )}
                                                />
                                                <Route
                                                    exact
                                                    key="home"
                                                    path="/"
                                                    component={() => (
                                                        <Home
                                                            questions={this.state.questions}
                                                            onStartSurvey={this.handleStartSurvey}
                                                            loading={this.state.isLoading}
                                                        />
                                                    )}
                                                />
                                                <QuestionRoutes />
                                            </Switch>
                                        </section>
                                    </CSSTransition>
                                </TransitionGroup>
                            )
                        }}
                    />
                </PanelWrapper>
            </Router>
        )
    }
}

export default Survey
