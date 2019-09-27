// Ran Xu
// COP 4331
// contact.js
// HW: contact project

const router = require('express').Router();
let contact = require('../models/contact.model');

router.route('/').get((req, res) =>
{
  contact.find()
    .then(contact => res.json(contact))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) =>
{
  const userID = req.body.userID;
  const phone = req.body.phone;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;

  const newContact = new contact(
  {
    userID,
    firstName,
    lastName,
    email,
    phone
  });

  newContact.save()
    .then(() => res.json('Contact added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) =>
{
  contact.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) =>
{
  contact.findByIdAndDelete(req.params.id)
    .then(user => res.json('Contact deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) =>
{
  contact.findById(req.params.id)
    .then(contact =>
    {
      contact.phone = req.body.phone;
      contact.firstName = req.body.firstName;
      contact.lastName = req.body.lastName;
      contact.email = req.body.email;
      contact.save()
        .then(() => res.json('Contact updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
      })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
