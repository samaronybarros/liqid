const formatAnswer = (question, answer) => {
    let result = []
    for (let i = 0; i < answer.length; i++) {
        result.push(JSON.stringify({ question: question[i]._id, answer: answer[i] }))
    }
    return result
}

export default formatAnswer
