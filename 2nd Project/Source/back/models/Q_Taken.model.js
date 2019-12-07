const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Q_TakenSchema = new Schema(
{
    //category: { type: String, required: true},
    //question: { type: String, required: true},
    //answer: {type: String, required: true},
}, {
    timestamps: true,
});

const Q_Taken = mongoose.model('Q_Taken', Q_TakenSchema);

module.exports = Q_Taken;