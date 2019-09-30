// Ran Xu
// COP 4331
// user.model.js
// HW: contact project

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
{
  userID:
  {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },

  password:
  {
    type: String,
    required: true,
    minlength: 3
  },
},
{
  timestamps: true,
});

const user = mongoose.model('user', userSchema);
module.exports = user;
