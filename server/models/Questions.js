const mongoose = require('mongoose')
const Schema = mongoose.Schema

const QuestionsSchema = new Schema(
    {
        description: String,
        type: String,
        options: Array,
        sort: Number,
    },
    { timestamps: true }
)

module.exports = mongoose.model('Questions', QuestionsSchema)
