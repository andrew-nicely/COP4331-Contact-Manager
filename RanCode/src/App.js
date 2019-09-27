// Ran Xu
// COP 4331
// App.js
// HW: contact project

import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import ContactList from "./components/contact-list.component";
import EditContact from "./components/edit-contact.component";
import CreateContact from "./components/create-contact.component";
import CreateUser from "./components/create-user.component";
import Login from "./components/login.component";
import EditPass from "./components/edit-password.component";

function App()
{
  return(
    <Router>
      <div>
        <style>{'body{background-color:#FFC904;}'}</style>
        <Route path="/" exact component={Login} />
        <Route path="/home" exact component={ContactList} />
        <Route path="/home/edit/:id" component={EditContact} />
        <Route path="/home/create" exact component={CreateContact} />
        <Route path="/user" exact component={CreateUser} />
        <Route path="/home/editpassword" component={EditPass} />
      </div>
    </Router>
  );
}
export default App;
