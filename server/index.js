require('dotenv').load()

const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
const mongoose = require('mongoose')
var cors = require('cors')
const config = require('./config')

const { Questions, Answers } = require('./models')

const app = express()
const router = express.Router()

const API_PORT = config.serverPort || 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(logger('dev'))
app.use(
    cors({
        allowedHeaders: ['sessionId', 'Content-Type'],
        exposedHeaders: ['sessionId'],
        origin: '*',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        preflightContinue: false,
    })
)

mongoose.connect(config.serverDb, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

router.get('/', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.json({ message: 'API running!' })
})

router.get('/questions', async (req, res) => {
    Questions.find((err, questions) => {
        if (err) return res.json({ success: false, error: err })
        return res.json({ success: true, data: questions })
    })
})

router.get('/questions/:id', async (req, res) => {
    Questions.findOne({ _id: req.params.id }, (err, questions) => {
        if (err) return res.json({ success: false, error: err })
        return res.json({ success: true, data: questions })
    })
})

router.post('/answer', (req, res) => {
    const answers = new Answers()

    const { answer } = req.body
    if (!answer) {
        return res.json({
            success: false,
            error: 'You must provide an answer',
        })
    }
    answers.question = req.params.id
    answers.answer = answer
    answers.save(err => {
        if (err) return res.json({ success: false, error: err })
        return res.json({ success: true, id: answers._id })
    })
})

app.use('/api', router)

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`))
