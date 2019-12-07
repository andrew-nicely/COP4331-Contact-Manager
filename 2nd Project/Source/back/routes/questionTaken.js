const questionTakenRoutes = require('express').Router();
let QuestionTaken = require('../models/questionTaken.model');

// Create
questionTakenRoutes.route('/add').post((req, res) => 
{
    const userID = req.body.userID;
    const questionID = req.body.questionID;

    const newQuestionTaken = new QuestionTaken({
        userID,
        questionID,
    });

    newQuestionTaken.save()
        .then(() => res.json('QuestionTaken added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Read
questionTakenRoutes.route('/').get((req, res) => 
{
    QuestionTaken.find()
        .then(QT => res.json(QT))
        .catch(err => res.status(400).json('Error: ' + err));
});

questionTakenRoutes.route('/:id').get((req, res) => 
{
    QuestionTaken.findById(req.params.id)
        .then(QT => res.json(QT))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Update
questionTakenRoutes.route('/update/:id').post((req, res) => {
    QuestionTaken.findById(req.params.id)
        .then(QT => {
            QT.userID = req.body.userID;
            QT.questionID = req.body.questionID;

            QT.save()
                .then(() => res.json('QuestionTaken updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
})

// Delete
questionTakenRoutes.route('/:id').delete((req, res) => 
{
    QuestionTaken.findByIdAndDelete(req.params.id)
        .then(() => res.json('QuestionTaken deleted'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = questionTakenRoutes;