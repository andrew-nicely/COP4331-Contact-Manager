const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const practiceTestSchema = new Schema(
{
    question1: { type: String, required: true},
    question2: { type: String, required: true},
    question3: { type: String, required: true},
    question4: { type: String, required: true},
    question5: { type: String, required: true},
    question6: { type: String, required: true},
    question7: { type: String, required: true},
    question8: { type: String, required: true},
	question9: { type: String, required: true},
    question10: { type: String, required: true},
    question11: { type: String, required: true},
    question12: { type: String, required: true},
	
}, {
    timestamps: false,
});

module.exports = mongoose.model('practiceTest', practiceTestSchema);