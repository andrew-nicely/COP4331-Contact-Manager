const practiceTestRoutes = require('express').Router();
let PracticeTest = require('../models/practiceTest.model');

// Create
practiceTestRoutes.route('/add').post((req, res) => 
{
    const question1 = req.body.question1;
    const question2 = req.body.question2;
	const question3 = req.body.question3;
	const question4 = req.body.question4;
	const question5 = req.body.question5;
	const question6 = req.body.question6;
	const question7 = req.body.question7;
	const question8 = req.body.question8;
	const question9 = req.body.question9;
	const question10 = req.body.question10;
	const question11 = req.body.question11;
	const question12 = req.body.question12;

    const newPracticeTest = new PracticeTest({
        question1,
		question2,
		question3,
		question4,
		question5,
		question6,
		question7,
		question8,
		question9,
		question10,
		question11,
		question12,
    });

    newPracticeTest.save()
        .then(() => res.json('Practice Test added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Read
practiceTestRoutes.route('/').get((req, res) => 
{
    PracticeTest.find()
        .then(PT => res.json(PT))
        .catch(err => res.status(400).json('Error: ' + err));
});

practiceTestRoutes.route('/:id').get((req, res) => 
{
    PracticeTest.findById(req.params.id)
        .then(PT => res.json(PT))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Update
practiceTestRoutes.route('/update/:id').post((req, res) => {
    PracticeTest.findById(req.params.id)
        .then(PT => {
            PT.question1 = req.body.question1;
            PT.question2 = req.body.question2;
			PT.question3 = req.body.question3;
			PT.question4 = req.body.question4;
			PT.question5 = req.body.question5;
			PT.question6 = req.body.question6;
			PT.question7 = req.body.question7;
			PT.question8 = req.body.question8;
			PT.question9 = req.body.question9;
			PT.question10 = req.body.question10;
			PT.question11 = req.body.question11;
			PT.question12 = req.body.question12;

            PT.save()
                .then(() => res.json('Practice Test updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
})

// Delete
practiceTestRoutes.route('/:id').delete((req, res) => 
{
    PracticeTest.findByIdAndDelete(req.params.id)
        .then(() => res.json('Practice Test deleted'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = practiceTestRoutes;