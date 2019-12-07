const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const codingQuestionSchema = new Schema(
{
    category: { type: String, required: true},
    question: { type: String, required: true},
    answer: {type: String, required: true},
}, {
    timestamps: false,
});

module.exports = mongoose.model('codingQuestion', codingQuestionSchema);