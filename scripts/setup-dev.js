require('dotenv').load()

const mongoose = require('mongoose')
const config = require('../server/config')

const { Answers, Questions } = require('../server/models')

const main = async () => {
    mongoose.connect(config.serverDb, { useNewUrlParser: true })
    const db = mongoose.connection
    db.on('error', console.error.bind(console, 'MongoDB connection error:'))

    console.log('Deleting answers data ...')
    await Answers.deleteMany({})

    console.log('Deleting questions data ...')
    await Questions.deleteMany({})

    let questions = null
    let order = 0

    console.log('Inserting new questions')
    order++
    questions = new Questions()
    questions.description = 'What is your name?'
    questions.type = 'input'
    questions.sort = order
    await questions.save()

    order++
    questions = new Questions()
    questions.description = 'How old are you?'
    questions.type = 'input'
    questions.sort = order
    await questions.save()

    order++
    questions = new Questions()
    questions.description = 'What is your idea of everything?'
    questions.type = 'input'
    questions.sort = order
    await questions.save()

    order++
    questions = new Questions()
    questions.description = 'What is your gender?'
    questions.type = 'radio'
    questions.options = [
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
    questions.sort = order
    await questions.save()

    order++
    questions = new Questions()
    questions.description = 'What is your favorite car?'
    questions.type = 'dropdown'
    questions.options = [
        {
            value: '0',
            description: 'Select car:',
        },
        {
            value: '1',
            description: 'Audi',
        },
        {
            value: '2',
            description: 'BMW',
        },
        {
            value: '3',
            description: 'Citroen',
        },
        {
            value: '4',
            description: 'Ford',
        },
        {
            value: '5',
            description: 'Honda',
        },
        {
            value: '6',
            description: 'Jaguar',
        },
        {
            value: '7',
            description: 'Land Rover',
        },
        {
            value: '8',
            description: 'Mercedes',
        },
        {
            value: '9',
            description: 'Mini',
        },
        {
            value: '10',
            description: 'Nissan',
        },
        {
            value: '11',
            description: 'Toyota',
        },
        {
            value: '12',
            description: 'Volvo',
        },
    ]
    questions.sort = order
    await questions.save()

    order++
    questions = new Questions()
    questions.description = 'Tell me about yourself'
    questions.type = 'input'
    questions.sort = order
    await questions.save()
}

main().then(() => {
    console.log('Done')
    process.exit(0)
})
