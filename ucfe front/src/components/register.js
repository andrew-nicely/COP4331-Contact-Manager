import React, { Component } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
import '../css/register.css';
const url = 'http://localhost:4404/';

class register extends Component {
  state = {
    registerFirstName: '',
    registerLastName: '',
    registerEmail: '',
		registerPassword: '',
		registerConfirmPassword: '',
  }
  onRegisterFirstNameChange = (event) => {
		this.setState({registerFirstName: event.target.value});
	}
	onRegisterLastNameChange = (event) => {
		this.setState({registerLastName: event.target.value});
	}
	onRegisterEmailChange = (event) => {
		this.setState({registerEmail: event.target.value});
	}
	onRegisterPasswordChange = (event) => {
		this.setState({registerPassword: event.target.value});
	}
	onRegisterConfirmPasswordChange = (event) => {
		this.setState({registerConfirmPassword: event.target.value});
	}
	onSubmitRegister = () => {
		console.log(this.state);
		const newUser = {
			userPW: this.state.registerPassword,
			firstName: this.state.registerFirstName,
			lastName: this.state.registerLastName,
			emailAddress: this.state.registerEmail
		};	
		axios.post(url + 'users/register', newUser)
		.then(res => {
      // check with database
		});
	}
  render() {
    return (
			<div className='Register'>
				<article className="br3 o-90 bg-light-gray ba --black-10 mv4 w-100 w-50-m w-33-l mw6 shadow-5 center">
					<main className="pa4 black-80">
						<div className='pb3'>
    					<p className="f6 br-pill no-underline ba b--black grow pv2 ph3 dib mr3 pointer">
      					Sign Up
    					</p>
              <Link to='/'>
    						<p className="f6 br-pill b--black no-underline ba grow pv2 ph3 dib pointer">
      						Sign In
    						</p>
              </Link>
  					</div>
				  	<div className="measure">
				    	<fieldset id="sign_up" className="ba b--transparent ph0 mh0">
				      	<legend className="f4 fw6 ph0 mh0">Register</legend>
								<div className="row">
        					<div className="input-field col s12">
          					<i className="material-icons prefix">looks_one</i>
          					<input id="icon_looks_one" type="text" className="validate" onChange={this.onRegisterFirstNameChange}/>
          					<label htmlFor="icon_looks_one">First Name</label>
        					</div>
        					<div className="input-field col s12">
          					<i className="material-icons prefix">looks_two</i>
          					<input id="icon_looks_two" type="text" className="validate" onChange={this.onRegisterLastNameChange}/>
          					<label htmlFor="icon_looks_two">Last Name</label>
        					</div>
									<div className="input-field col s12">
          					<i className="material-icons prefix">email</i>
          					<input id="icon_email" type="email" className="validate" onChange={this.onRegisterEmailChange}/>
          					<label htmlFor="icon_email">Email</label>
        					</div>
									<div className="input-field col s12">
          					<i className="material-icons prefix">lock</i>
          					<input id="icon_lock" type="password" className="validate" onChange={this.onRegisterPasswordChange}/>
          					<label htmlFor="icon_lock">Password</label>
        					</div>
									<div className="input-field col s12">
          					<i className="material-icons prefix">lock_outline</i>
          					<input id="icon_lock_outline" type="password" className="validate" onChange={this.onRegisterConfirmPasswordChange}/>
          					<label htmlFor="icon_lock">Confirm Password</label>
        					</div>
      					</div>
				    	</fieldset>
				    	<div className="">
				      	<input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" onClick={() => this.onSubmitRegister()} type="submit" value="Register" />
				    	</div>
				  	</div>
					</main>
				</article>
			</div>
    )
  }
}

export default register
