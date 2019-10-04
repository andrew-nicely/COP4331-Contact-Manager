import React from 'react';
//import axios from 'axios';

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

		onSubmitSignin = () => {
		console.log(this.state);
		const newUser = {
			userID: this.state.registerUsername,
			userPW: this.state.registerPassword,
			firstName: this.state.registerFirstName,
			lastName: this.state.registerLastName,
			emailAddress: this.state.registerConfirmPassword,
		}
		axios.post('http://localhost:4000/register', newUser)
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
				onRouteChange('signin');
				
				
			
			});
	}

	render ()
	{
		// eslint-disable-next-line
		const {onRouteChange} = this.props;
		return (
			<article className="br3 ba --black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
				<main className="pa4 black-80">
					<div className='pb3'>
    					<p class="f6 br-pill bg-dark-green no-underline washed-green ba b--dark-green grow pv2 ph3 dib mr3 pointer">
      					Sign Up
    					</p>
    					<p onClick={() => onRouteChange('testsignout')} class="f6 br-pill dark-green no-underline ba grow pv2 ph3 dib pointer">
      					Learn More
    					</p>
  					</div>
				  <div className="measure">
				    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
				      <legend className="f4 fw6 ph0 mh0">Register</legend>
				      	<div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="email-address">First Name</label>
				        <input className="pa2 input-reset ba bg-transparent w-100" onChange={this.onRegisterFirstNameChange} type="email" name="email-address"  id="email-address" />
				      </div>
				      	<div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
				        <input className="pa2 input-reset ba bg-transparent w-100" onChange={this.onRegisterLastNameChange} type="email" name="email-address"  id="email-address" />
				      </div>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
				        <input className="pa2 input-reset ba bg-transparent w-100" onChange={this.onRegisterUserNameChange} type="email" name="email-address"  id="email-address" />
				      </div>
				      <div className="mv3">
				        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
				        <input className="b pa2 input-reset ba bg-transparent w-100" onChange={this.onRegisterPasswordChange} type="password" name="password"  id="password" />
				      </div>
				      <div className="mv3">
				        <label className="db fw6 lh-copy f6" htmlFor="password">Confirm Password</label>
				        <input className="b pa2 input-reset ba bg-transparent w-100" onChange={this.onRegisterPasswordChange} type="password" name="password"  id="password" />
				      </div>
				    </fieldset>
				    <div className="">
				      <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register" />
				      <p onClick={() => onRouteChange('testsignout')} className="f6 link pa2 dim black db pointer">Return</p>
				    </div>
				  </div>
				</main>
			</article>
		)
	}
}

export default Register