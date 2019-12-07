const testTakenRoutes = require('express').Router();
let TestTaken = require('../models/testTaken.model');

// Create
testTakenRoutes.route('/add').post((req, res) => 
{
    const userID = req.body.userID;
    const testID = req.body.testID;

    const newTestTaken = new TestTaken({
        userID,
        testID,
    });

    newTestTaken.save()
        .then(() => res.json('TestTaken added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Read
testTakenRoutes.route('/').get((req, res) => 
{
    TestTaken.find()
        .then(TT => res.json(TT))
        .catch(err => res.status(400).json('Error: ' + err));
});

testTakenRoutes.route('/:id').get((req, res) => 
{
    TestTaken.findById(req.params.id)
        .then(TT => res.json(TT))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Update
testTakenRoutes.route('/update/:id').post((req, res) => {
    TestTaken.findById(req.params.id)
        .then(TT => {
            TT.userID = req.body.userID;
            TT.testID = req.body.testID;

            TT.save()
                .then(() => res.json('TestTaken updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
})

// Delete
testTakenRoutes.route('/:id').delete((req, res) => 
{
    TestTaken.findByIdAndDelete(req.params.id)
        .then(() => res.json('TestTaken deleted'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = testTakenRoutes;