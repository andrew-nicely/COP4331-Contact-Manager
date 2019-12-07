const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const T_TakenSchema = new Schema(
{
    //category: { type: String, required: true},
    //question: { type: String, required: true},
    //answer: {type: String, required: true},
}, {
    timestamps: true,
});

const T_Taken = mongoose.model('T_Taken', T_TakenSchema);

module.exports = T_Taken;