const codingQuestionRoutes = require('express').Router();
let codingQuestion = require('../models/codingQuestion.model');

// Create
codingQuestionRoutes.route('/add').post((req, res) => 
{
    const category = req.body.category;
    const question = req.body.question;
    const answer = req.body.answer;

    const newCodingQuestion = new codingQuestion({
        category,
        question,
        answer,
    });

    newCodingQuestion.save()
        .then(() => res.json('Coding Question added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Read
codingQuestionRoutes.route('/').get((req, res) => 
{
    codingQuestion.find()
        .then(CQ => res.json(CQ))
        .catch(err => res.status(400).json('Error: ' + err));
});

codingQuestionRoutes.route('/:id').get((req, res) => 
{
    codingQuestion.findById(req.params.id)
        .then(CQ => res.json(CQ))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Update
codingQuestionRoutes.route('/update/:id').post((req, res) => {
    codingQuestion.findById(req.params.id)
        .then(CQ => {
            CQ.username = req.body.username;
            CQ.password = req.body.password;
            CQ.email = req.body.email;

            CQ.save()
                .then(() => res.json('Coding Question updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
})

// Delete
codingQuestionRoutes.route('/:id').delete((req, res) => 
{
    codingQuestion.findByIdAndDelete(req.params.id)
        .then(() => res.json('Coding Question deleted'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = codingQuestionRoutes;