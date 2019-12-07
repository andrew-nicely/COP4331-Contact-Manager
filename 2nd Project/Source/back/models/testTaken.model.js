const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const testTakenSchema = new Schema(
{
    userID: { type: String, required: true},
    testID: { type: String, required: true},
}, {
    timestamps: true,
});

const testTaken = mongoose.model('testTaken', testTakenSchema);

module.exports = testTaken;