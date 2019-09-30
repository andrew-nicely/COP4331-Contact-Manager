// contacts.model.js
// Junejae Kim
// COP 4331
// Project: Contact Manager

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Contact = new Schema({
    userID: {
        type: String
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    emailAddress: {
        type: String
    },
    phoneNum: {
        type: String
    }
});

module.exports = mongoose.model('Contact', Contact);