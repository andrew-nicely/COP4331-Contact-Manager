// Ran Xu
// COP 4331
// contact.model.js
// HW: contact project

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema(
{
  userID:
  {
    type: String,
    required: true,
  },

  firstName:
  {
    type: String,
    required: true,
    trim: true,
    minlength: 2
  },

  lastName:
  {
    type: String,
    required: true,
    trim: true,
    minlength: 2
  },

  email:
  {
    type: String,
    trim: true
  },

  phone:
  {
    type: String,
    trim: true,
    required: true,
    minlength: 7
  },
},
{
  timestamps: true,
});

const contact = mongoose.model('contact', contactSchema);
module.exports = contact;
