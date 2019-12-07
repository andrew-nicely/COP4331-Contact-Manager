const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const multiChoiceQuestionSchema = new Schema(
{
    category: { type: String, required: true},
    question: { type: String, required: true},
    answer: {type: String, required: true},
    option1: {type: String, required: true},
    option2: {type: String, required: true},
    option3: {type: String, required: true},
    option4: {type: String, required: true},
}, {
    timestamps: false,
});

module.exports = mongoose.model('multiChoiceQuestion', multiChoiceQuestionSchema);