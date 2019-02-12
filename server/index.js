require('dotenv').load()

// first we import our dependencies…
const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
const mongoose = require('mongoose')

const config = require('./config')

const Questions = require('./models/Questions')

// and create our instances
const app = express()
const router = express.Router()

// set our port to either a predetermined port number if you have set it up, or 3001
const API_PORT = config.serverPort || 3001
// now we should configure the API to use bodyParser and look for JSON data in the request body
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(logger('dev'))

// now we can set the route path & initialize the API
router.get('*', (req, res) => {
    res.json({ message: 'Hello, World!' })
})

router.get('/questions', (req, res) => {
    Questions.find((err, questions) => {
        if (err) return res.json({ success: false, error: err })
        return res.json({ success: true, data: questions })
    })
})

// Use our router configuration when we call /api
app.use('/api', router)

/*
router.post('/comments', (req, res) => {
    const questions = new Questions();
    // body parser lets us use the req.body
    const { author, text } = req.body;
    if (!author || !text) {
        // we should throw an error. we can do this check on the front end
        return res.json({
            success: false,
            error: 'You must provide an author and comment'
        });
    }
    comment.author = author;
    comment.text = text;
    comment.save(err => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true });
    });
});
*/

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`))
