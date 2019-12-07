const multiChoiceQuestionRoutes = require('express').Router();
let MultiChoiceQuestion = require('../models/multiChoiceQuestion.model');

// Create
multiChoiceQuestionRoutes.route('/add').post((req, res) => 
{
    const category = req.body.category;
    const question = req.body.question;
    const answer = req.body.answer;
	const option1 = req.body.option1;
	const option2 = req.body.option2;
	const option3 = req.body.option3;
	const option4 = req.body.option4;

    const newMultiChoiceQuestion = new MultiChoiceQuestion({
        category,
        question,
        answer,
		option1,
		option2,
		option3,
		option4,
    });

    newMultiChoiceQuestion.save()
        .then(() => res.json('Multi-Choice Question added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Read
multiChoiceQuestionRoutes.route('/').get((req, res) => 
{
    MultiChoiceQuestion.find()
        .then(MQ => res.json(MQ))
        .catch(err => res.status(400).json('Error: ' + err));
});

multiChoiceQuestionRoutes.route('/:id').get((req, res) => 
{
    MultiChoiceQuestion.findById(req.params.id)
        .then(MQ => res.json(MQ))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Update
multiChoiceQuestionRoutes.route('/update/:id').post((req, res) => {
    MultiChoiceQuestion.findById(req.params.id)
        .then(MQ => {
            MQ.category = req.body.category;
            MQ.question = req.body.question;
            MQ.answer = req.body.answer;
			MQ.option1 = req.body.option1;
			MQ.option2 = req.body.option2;
			MQ.option3 = req.body.option3;
			MQ.option4 = req.body.option4;

            MQ.save()
                .then(() => res.json('Multi-Choice Question updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
})

// Delete
multiChoiceQuestionRoutes.route('/:id').delete((req, res) => 
{
    MultiChoiceQuestion.findByIdAndDelete(req.params.id)
        .then(() => res.json('Multi-Choice Question deleted'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = multiChoiceQuestionRoutes;