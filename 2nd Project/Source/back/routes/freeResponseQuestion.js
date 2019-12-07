const freeResponseQuestionRoutes = require('express').Router();
let FreeResponseQuestion = require('../models/freeResponseQuestion.model');

// Create
freeResponseQuestionRoutes.route('/add').post((req, res) => 
{
    const category = req.body.category;
    const question = req.body.question;
    const answer = req.body.answer;

    const newFreeResponseQuestion = new FreeResponseQuestion({
        category,
        question,
        answer,
    });

    newFreeResponseQuestion.save()
        .then(() => res.json('Free Response Question added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Read
freeResponseQuestionRoutes.route('/').get((req, res) => 
{
    FreeResponseQuestion.find()
        .then(FQ => res.json(FQ))
        .catch(err => res.status(400).json('Error: ' + err));
});

freeResponseQuestionRoutes.route('/:id').get((req, res) => 
{
    FreeResponseQuestion.findById(req.params.id)
        .then(FQ => res.json(FQ))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Update
freeResponseQuestionRoutes.route('/update/:id').post((req, res) => {
    FreeResponseQuestion.findById(req.params.id)
        .then(FQ => {
            FQ.category = req.body.category;
            FQ.question = req.body.question;
            FQ.answer = req.body.answer;

            FQ.save()
                .then(() => res.json('Free Response Question updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
})

// Delete
freeResponseQuestionRoutes.route('/:id').delete((req, res) => 
{
    FreeResponseQuestion.findByIdAndDelete(req.params.id)
        .then(() => res.json('Free Response Question deleted'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = freeResponseQuestionRoutes;