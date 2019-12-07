import React, {Component} from 'react'
import Logo from '../Logo.png';
import {Link} from 'react-router-dom';
import '../css/navbar.css';

class navbar extends Component{
  state = {
    registerFirstName: 'First',
    registerLastName: 'Last',
  }
  render(){
    return (
      <nav className="navbar nav-wrapper grey darken-4">
        <div className="container">
          <li className="brand-logo center">
            <img src={Logo} className="App-logo" alt="logo"></img>
          </li>
          <ul className="linkleft left">
            <li>
              <Link to="/home">
                <span className="home amber-text">Home</span>
              </Link>
            </li>
            <li>
              <Link to="/note">
                <span className="notes amber-text">Notes</span>
              </Link>
            </li>
            <li>
              <Link to="/test">
                <span className="test amber-text red-text">Test</span>
              </Link>
            </li>
          </ul>
          <ul className="linkright right">
            {/*<span className="user amber-text">
              {this.state.registerFirstName}
              {this.state.registerLastName}
            </span>*/}
            <li>
              <Link to="/">
                <span className="log amber-text">Log Out</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }  
}
export default navbar;