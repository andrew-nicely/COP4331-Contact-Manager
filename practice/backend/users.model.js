// users.model.js
// Junejae Kim
// COP 4331
// Project: Contact Manager

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Useless comments
let User = new Schema({
    userID: {
        type: String
    },
    userPW: {
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
    }
});

module.exports = mongoose.model('User', User);