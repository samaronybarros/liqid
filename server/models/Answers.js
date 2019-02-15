const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AnswersSchema = new Schema(
    {
        question: String,
        answer: Array,
    },
    { timestamps: true }
)

module.exports = mongoose.model('Answers', AnswersSchema)
