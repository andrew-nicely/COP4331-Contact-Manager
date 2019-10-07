// server.js
// Junejae Kim
// COP 4331
// Project: Contact Manager


const mongoose = require('mongoose');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const dataRoutes = express.Router();
const dataRoutesContact = express.Router();
const PORT = 4000; // Port we'll use

//const url = 'http://localhost:4000';

const bcrypt = require('bcrypt');
const saltRounds = 10;

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

// Delete every data with matching id
dataRoutes.route("/exterminatus").delete(function(req, res) {

    User.deleteMany({ userID: req.body.userID }, function(err, trash){
        if (!err)
            res.send("end of the world");
    })
})




*/
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

// Update the existing data
dataRoutes.route('/update').post(function(req, res) {
    User.findById(req.body._id, function(err, users) {
        if (!users)
            res.status(404).send("data is not found");
        else
            users.userID = req.body.userID;
            users.userPW = req.body.userPW;
            users.firstName = req.body.firstName;
            users.lastName = req.body.lastName;
            users.emailAddress = req.body.emailAddress;

            users.save().then(users => {
                res.status(200).send('User updated!');
            })
            .catch(err => {
                res.status(404).send("Update is not possible");
            });
    });
});

// Create a new data
dataRoutes.route('/register').post(function(req, res) {
    
    bcrypt.hash(req.body.userPW, saltRounds, function(err, hash) {

        if (err) throw err;

        req.body.userPW = hash;

        const users = new User(req.body);

        users.save()
            .then(users => {
                res.status(200).json(users);//{'users': 'users added successfully'});
            })
            .catch(err => {
                res.status(404).send("Adding new users failed");
            });
    });
});

// Search valid login account
dataRoutes.route('/login').post(function(req, res){

    User.findOne({ userID: req.body.userID }, function(err, users){

        if (users !== null)

            bcrypt.compare(req.body.userPW, users.userPW, function(err, isMatching) {

                if (isMatching) res.send("success");
            
                else res.send("fail");

            });

        // If there's no matching data, send fail message
        else
            res.send("fail");
            
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


/////////////////////////////////////////////
// CRUD Operation for Collection: contacts //
/////////////////////////////////////////////


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
dataRoutesContact.route('/update').post(function(req, res) {
    Contact.findById(req.body._id, function(err, contacts) {
        
        if (!contacts)
            res.status(404).send("data is not found");

        else
        {
            contacts.userID = req.body.userID;
            contacts.firstName = req.body.firstName;
            contacts.lastName = req.body.lastName;
            contacts.emailAddress = req.body.emailAddress;
            contacts.phoneNum = req.body.phoneNum;

            contacts.save().then(contacts => {
                res.json(contacts);
            })
            .catch(err => {
                res.status(400).send("Update is not possible");
            });
        }
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
dataRoutesContact.route('/delete').post(function(req, res) {

    console.log(req.body);


    Contact.findByIdAndRemove(req.body._id, function(err, contacts) {
        
        console.log(contacts);
        
        if (!contacts)
            res.status(200).send("fail"); 
        else
            res.status(200).send("Data is successfully deleted");
    });
});


dataRoutesContact.route('/').get(function(req, res) {
    Contact.find(function(err, contacts) {
        if (err) {
            console.log(err);
        } else {
            res.json(contacts);
        }
    });
});

//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

/*


// Read every data in the database


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

*/

//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////


app.use('/users', dataRoutes);
app.use('/contacts', dataRoutesContact);

// Run the server on selected port
app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});