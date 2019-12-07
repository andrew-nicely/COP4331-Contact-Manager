const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const port = 4000;

//let userSchema = require('./models/user.model');

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/test', { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});
const connection = mongoose.connection;

connection.once('open', function() {
	console.log("MongoDB database connection established successfully");
});

// API Routes
// TODO = userSchema
// todo = user
	// User
//const userRoutes = express.Router();

const userRoutes = require('./routes/user');
app.use('/users', userRoutes); //weird file name? check this

const codingQuestionRoutes = require('./routes/codingQuestion');
app.use('/codingQuestion', codingQuestionRoutes);

const freeResponseQuestionRoutes = require('./routes/freeResponseQuestion');
app.use('/freeResponseQuestion', freeResponseQuestionRoutes);

const multiChoiceQuestionRoutes = require('./routes/multiChoiceQuestion');
app.use('/multiChoiceQuestion', multiChoiceQuestionRoutes);

const practiceTestRoutes = require('./routes/practiceTest');
app.use('/practiceTest', practiceTestRoutes);

const questionTakenRoutes = require('./routes/questionTaken');
app.use('/questionTaken', questionTakenRoutes);

const testTakenRoutes = require('./routes/testTaken');
app.use('/testTaken', testTakenRoutes);


app.listen(port, function() {
	console.log("Server is running on port: " + port);
});

	
//const userRoutes = express.Router();
//app.use('/routes/user', userRoutes);
//const userRouter = require('./routes/user');