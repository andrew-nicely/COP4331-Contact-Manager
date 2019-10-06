import React from 'react';
import axios from 'axios';
import './SignIn.css';

class Register extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			registerFirstName: '',
			registerLastName: '',
			registerUsername: '',
			registerPassword: '',
			registerConfirmPassword: '',
		}
	}

	onRegisterFirstNameChange = (event) => {
		console.log(event.target.value);
		this.setState({registerFirstName: event.target.value});
	}

	onRegisterLastNameChange = (event) => {
		console.log(event.target.value);
		this.setState({registerLastName: event.target.value});
	}

	onRegisterUserNameChange = (event) => {
		console.log(event.target.value);
		this.setState({registerUsername: event.target.value});
	}

	onRegisterPasswordChange = (event) => {
		console.log(event.target.value);
		this.setState({registerPassword: event.target.value});
	}

		onRegisterConfirmPasswordChange = (event) => {
		console.log(event.target.value);
		this.setState({registerConfirmPassword: event.target.value});
	}

	onSubmitRegister = () => {
		console.log(this.state);
		const newUser = {
			userID: this.state.registerUsername,
			userPW: this.state.registerPassword,
			firstName: this.state.registerFirstName,
			lastName: this.state.registerLastName,
			emailAddress: this.state.registerConfirmPassword,
		}
		axios.post('http://localhost:4000/users/register', newUser)
		.then(res => {
			// 
			const {data} = res;

			if (data === "fail")
				console.log("Not signed up");
			
			else
				console.log("Signed up");
				//const {onSignIn} = this.props;
				//onSignIn(user.userID);
				const {onRouteChange} = this.props;
				onRouteChange('testsignout');
				
				
			
			});
	}

	render ()
	{
		// eslint-disable-next-line
		const {onRouteChange} = this.props;
		return (
			<div className='SignIn'>
			<article className="br3 o-90 bg-light-gray ba --black-10 mv4 w-100 w-50-m w-33-l mw6 shadow-5 center">
				<main className="pa4 black-80">
					<div className='pb3'>
    					<p class="f6 br-pill no-underline ba b--black grow pv2 ph3 dib mr3 pointer">
      					Sign Up
    					</p>
    					<p onClick={() => onRouteChange('testsignout')} class="f6 br-pill b--black no-underline ba grow pv2 ph3 dib pointer">
      					Sign In
    					</p>
  					</div>
				  <div className="measure">
				    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
				      <legend className="f4 fw6 ph0 mh0">Register</legend>
				      	<div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="email-address">First Name</label>
				        <input className="pa2 input-reset ba w-100" onChange={this.onRegisterFirstNameChange} type="email" name="email-address"  id="email-address" />
				      </div>
				      	<div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="email-address">Last Name</label>
				        <input className="pa2 input-reset ba w-100" onChange={this.onRegisterLastNameChange} type="email" name="email-address"  id="email-address" />
				      </div>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
				        <input className="pa2 input-reset ba w-100" onChange={this.onRegisterUserNameChange} type="email" name="email-address"  id="email-address" />
				      </div>
				      <div className="mv3">
				        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
				        <input className="b pa2 input-reset ba w-100" onChange={this.onRegisterPasswordChange} type="password" name="password"  id="password" />
				      </div>
				      <div className="mv3">
				        <label className="db fw6 lh-copy f6" htmlFor="password">Confirm Password</label>
				        <input className="b pa2 input-reset ba w-100" onChange={this.onRegisterPasswordChange} type="password" name="password"  id="password" />
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

export default Register