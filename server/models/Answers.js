const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AnswersSchema = new Schema(
    {
        question: String,
        answer: String,
    },
    { timestamps: true }
)

module.exports = mongoose.model('Answers', AnswersSchema)
