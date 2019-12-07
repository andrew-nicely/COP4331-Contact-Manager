const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionTakenSchema = new Schema(
{
    userID: { type: String, required: true},
    questionID: { type: String, required: true},
}, {
    timestamps: true,
});

module.exports = mongoose.model('questionTaken', questionTakenSchema);