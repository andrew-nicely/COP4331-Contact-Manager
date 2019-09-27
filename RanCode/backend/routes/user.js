// Ran Xu
// COP 4331
// user.js
// HW: contact project

const router = require('express').Router();
let user = require('../models/user.model');

router.route('/').get((req, res) =>
{
  user.find()
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) =>
{
  const userID = req.body.userID;
  const password = req.body.password;

  const newUser = new user(
  {
    userID,
    password
  });

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) =>
{
  user.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) =>
{
  user.findByIdAndDelete(req.params.id)
    .then(user => res.json('User deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) =>
{
  user.findById(req.params.id)
    .then(user =>
    {
      user.password = req.body.password;

      user.save()
        .then(() => res.json('Password updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
