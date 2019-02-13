import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api/',
})

export const loadQuestions = () => api.get('questions')

const apis = {
    loadQuestions: loadQuestions,
}

export default apis
