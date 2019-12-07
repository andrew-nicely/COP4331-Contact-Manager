const userRoutes = require('express').Router();
let User = require('../models/user.model');

// Create
userRoutes.route('/add').post((req, res) => 
{
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;

    const newUser = new User({
        username,
        password,
        email,
    });

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Read
userRoutes.route('/').get((req, res) => 
{
    User.find()
        .then(US => res.json(US))
        .catch(err => res.status(400).json('Error: ' + err));
});

userRoutes.route('/:id').get((req, res) => 
{
    User.findById(req.params.id)
        .then(US => res.json(US))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Update
userRoutes.route('/update/:id').post((req, res) => {
    User.findById(req.params.id)
        .then(US => {
            US.username = req.body.username;
            US.password = req.body.password;
            US.email = req.body.email;

            US.save()
                .then(() => res.json('User updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
})

// Delete
userRoutes.route('/:id').delete((req, res) => 
{
    User.findByIdAndDelete(req.params.id)
        .then(() => res.json('User deleted'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = userRoutes;