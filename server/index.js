require('dotenv').load()

const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
const mongoose = require('mongoose')

const config = require('./config')

const Questions = require('./models/Questions')

const app = express()
const router = express.Router()

const API_PORT = config.serverPort || 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(logger('dev'))

mongoose.connect(config.serverDb, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

router.get('/', (req, res) => {
    res.json({ message: 'API running!' })
})

router.get('/questions', async (req, res) => {
    Questions.find((err, questions) => {
        if (err) return res.json({ success: false, error: err })
        return res.json({ success: true, data: questions })
    })
})

app.use('/api', router)

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`))
