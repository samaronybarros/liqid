import React, { Component } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Panel } from '../components/elements/Panel'
import { Button, Dropdown } from '../components/elements'

import api from '../api'
import Style from './elements/Style'
import Question from './Question'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    margin-bottom: 50px;
    display: flex;
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
//******************** HAVE TO HAVE ************************************
//TODO: Create DropDown (several options, one selectable)
//TODO: Create Last Page with the summary of the answers (puts state on Survey)
//TODO: [BackEnd] Create endpoint to save answers
//TODO: Make the buttons work
//TODO: Make input works with type: email, phone number, textarea and password

//******************** GOOD TO HAVE ************************************
//TODO: Create Loader on start
//TODO: Create user for answer
//TODO: Order question by sort field
//TODO: Transition animated

class Survey extends Component {
    constructor(props) {
        super(props)

        this.state = {
            questions: [],
            isLoading: false,
        }
    }

    handleQuestion = question => {
        return <Question question={question} onChange={this.handleChange} />
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
        const tmp = [
            {
                value: 'M',
                description: 'Male',
            },
            {
                value: 'F',
                description: 'Female',
            },
            {
                value: 'O',
                description: 'Other',
            },
        ]
        const Home = () => (
            <Wrapper>
                <Dropdown options={tmp} />

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
                    linkTo={`/${this.state.questions.length > 0 ? this.state.questions[0]._id : '/'}`}>
                    Start Survey
                </Button>
            </Wrapper>
        )

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
                    <Route exact path="/" component={Home} />

                    <CreateRoutes />
                </Panel>
            </Router>
        )
    }
}

export default Survey
