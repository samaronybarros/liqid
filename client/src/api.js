import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api/',
})

export const loadQuestions = () => api.get('questions')
export const saveAnswer = newAnswer => api.post('answer', newAnswer)

const apis = {
    loadQuestions,
    saveAnswer,
}

export default apis
