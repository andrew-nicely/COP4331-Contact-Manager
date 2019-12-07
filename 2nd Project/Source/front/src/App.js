import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import SignIn from './components/signin.js';
import Register from './components/register.js';
import Home from './components/home.js';
import Note from './components/note.js';
import Test from './components/test.js';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path='/' component={SignIn} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/home' component={Home} />
            <Route exact path='/note' component={Note} />
            <Route exact path='/test' component={Test} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
