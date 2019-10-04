// Ran Xu
// COP 4331
// login.component.js
// HW: contact project

import React, {Component} from 'react';
import {Card, Button} from 'reactstrap';
import PasswordMask from 'react-password-mask';
import axios from 'axios';

const headerStyle =
{
  background:'#000',
  color:'#BA9B37',
  textAlign: 'center',
  fontFamily: 'Arial',
  padding: '15px'
}

export default class Login extends Component
{
  constructor(props)
  {
    super(props);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeUserID = this.onChangeUserID.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state =
    {
      userID: '',
      password: '',
    }
  }

  onChangeUserID(input)
  {
    this.setState(
    {
      userID: input.target.value
    });
  }

  onChangePassword(input)
  {
    this.setState(
    {
      password: input.target.value
    });
  }

  onSubmit(input)
  {
    input.preventDefault();
    const user =
    {
      password: this.state.password,
      userID: this.state.userID,
    }
    console.log(user)

    axios.post('http://localhost:5000/user/add',user)
      .then(res => console.log(res.data));

    window.location = '/home';
  }

  render()
  {
    return(
      <div>
        <header style={headerStyle}>
          <h1>Contact List</h1>
        </header>
        <div className='container'>
          <br/>
          <center>
            <Card style={{borderColor:'#333', width:"30%" }}>
              <form onSubmit={this.onSubmit}>
                <br/>
                <input type="text"
                style={{width:'80%'}}
                placeholder='User ID'
                required
                value={this.state.userID}
                onChange={this.onChangeUserID}
                />
                <Card style={{borderColor:'#FFFFFF', width:"80%"}}>
                  <div className="form-group">
                    <PasswordMask
                    placeholder="Password"
                    required
                    value={this.state.password}
                    onChange={this.onChangePassword}/>
                  </div>
                </Card>
                <div className="form-group">
                  <Button color='secondary'>
                    Login
                  </Button>
                  {
                    ' '
                  }
                  <Button color='secondary'
                  onClick={()=>window.location = '/user'}>
                    New User
                  </Button>
                </div>
              </form>
            </Card>
          </center>
        </div>
      </div>
    )
  }
}
