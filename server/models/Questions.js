const mongoose = require('mongoose')
const Schema = mongoose.Schema

const QuestionsSchema = new Schema(
    {
        question: String,
        type: String,
        sort: Number,
    },
    { timestamps: true }
)

module.exports = mongoose.model('Questions', QuestionsSchema)
