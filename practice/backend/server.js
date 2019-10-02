// server.js
// Junejae Kim
// COP 4331
// Project: Contact Manager

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const dataRoutes = express.Router();
const dataRoutesContact = express.Router();
const PORT = 4000; // Port we'll use

let User = require('./users.model');
let Contact = require('./contacts.model');

app.use(cors());
app.use(bodyParser.json());


// Set the database's location
mongoose.connect('mongodb://127.0.0.1:27017/contactManager', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
const connection = mongoose.connection;

// Connect the database
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

//////////////////////////////////////////
// CRUD Operation for Collection: users //
//////////////////////////////////////////

/* For debugging

// Read every data in the database
dataRoutes.route('/').get(function(req, res) {
    User.find(function(err, users) {
        if (err) {
            console.log(err);
        } else {
            res.json(users);
        }
    });
});

// Read certain data based on requested object id
dataRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    User.findById(id, function(err, users) {
        if (!users)
            res.status(404).send("data is not found");
        else
            res.json(users);
    });
});

// Read certain data based on requested userID
dataRoutes.route('/find/:userID').get(function(req, res) {
    let userID = req.params.userID;
    User.find({ userID: userID }, function(err, users) {
        if (!users)
            res.status(404).send("data is not found");
        else
            res.json(users);
    });
});

*/

// Update the existing data
dataRoutes.route('/update/:id').post(function(req, res) {
    User.findById(req.params.id, function(err, users) {
        if (!users)
            res.status(404).send("data is not found");
        else
            users.userID = req.body.userID;
            users.userPW = req.body.userPW;
            users.firstName = req.body.firstName;
            users.lastName = req.body.lastName;
            users.emailAddress = req.body.emailAddress;

            users.save().then(users => {
                res.json('User updated!');
            })
            .catch(err => {
                res.status(400).send("Update is not possible");
            });
    });
});

// Create a new data
dataRoutes.route('/register').post(function(req, res) {
    let users = new User(req.body);
    users.save()
        .then(users => {
            res.status(200).json({'users': 'users added successfully'});
        })
        .catch(err => {
            res.status(400).send("Adding new users failed");
        });
});

// Delete the existing data
dataRoutes.route('/delete').delete(function(req, res) {
    User.findByIdAndRemove(req.body._id, function(err, users) {
        if (!users)
            res.status(404).send("Data is not found"); 
        else
            res.status(200).send("Data is successfully deleted");
    });
});

// Search valid login account
dataRoutes.route('/login').post(function(req, res){
    
    User.find({ userID: req.body.userID, userPW: req.body.userPW }, function(err, users){
        // If there's no matching data, send fail message
        if (users.length === 0)
            res.send("fail");

        // Right data
        else
            res.send("success");
    });
});

/////////////////////////////////////////////
// CRUD Operation for Collection: contacts //
/////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
// Read every data in the database
dataRoutesContact.route('/').get(function(req, res) {
    Contact.find(function(err, contacts) {
        if (err) {
            console.log(err);
        } else {
            res.json(contacts);
        }
    });
});

// Read certain data based on requested object id
dataRoutesContact.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Contact.findById(id, function(err, contacts) {
        if (!contacts)
            res.status(404).send("data is not found");
        else
            res.json(contacts);
    });
});

// Read certain data based on requested userID - get function
dataRoutesContact.route('/find/:userID').get(function(req, res) {
    let userID = req.body.userID;
    Contact.find({ userID: userID }, function(err, contacts) {
        if (!contacts)
            res.status(404).send("data is not found");
        else
            res.json(contacts);
    });
});
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

// Read certain data based on requested userID
dataRoutesContact.route('/find').post(function(req, res) {
    let userID = req.body.userID;

    Contact.find({ userID: userID }, function(err, contacts) {
        if (!contacts)
            res.status(404).send("data is not found");
        else
            res.json(contacts);
    });
});

// Update the existing data
dataRoutesContact.route('/update/:id').post(function(req, res) {
    Contact.findById(req.params.id, function(err, contacts) {
        if (!contacts)
            res.status(404).send("data is not found");
        else
            contacts.userID = req.body.userID;
            contacts.firstName = req.body.firstName;
            contacts.lastName = req.body.lastName;
            contacts.emailAddress = req.body.emailAddress;
            contacts.phoneNum = req.body.phoneNum;

            contacts.save().then(contacts => {
                res.json('A contact is updated!');
            })
            .catch(err => {
                res.status(400).send("Update is not possible");
            });
    });
});

// Create a new data
dataRoutesContact.route('/add').post(function(req, res) {
    let contacts = new Contact(req.body);
    contacts.save()
        .then(contacts => {
            res.status(200).send('A contact is added successfully');
        })
        .catch(err => {
            res.status(400).send("Adding a new contact failed");
        });
});

// Delete the existing data
dataRoutesContact.route('/delete/:id').delete(function(req, res) {
    Contact.findByIdAndRemove(req.params.id, function(err, contacts) {
        if (!contacts)
            res.status(404).send("Data is not found"); 
        else
            res.status(200).send("Data is successfully deleted");
    });
});


app.use('/users', dataRoutes);
app.use('/contacts', dataRoutesContact);

// Run the server on selected port
app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});