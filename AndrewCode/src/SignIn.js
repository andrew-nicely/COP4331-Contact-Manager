import React from 'react';
import axios from 'axios';
import './SignIn.css';

class SignIn extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			signInUsername: '',
			signInPassword: '',
		}
	}

	onUserNameChange = (event) => {
		this.setState({signInUsername: event.target.value});
	}

	onPasswordChange = (event) => {
		this.setState({signInPassword: event.target.value});
	}

	onSubmitSignin = () => {
		console.log(this.state);
		const user = {
			userID: this.state.signInUsername,
			userPW: this.state.signInPassword
		}
		axios.post('http://localhost:4000/users/login/', user)
		.then(res => {
			// 
			const {data} = res;

			if (data === "fail")
				console.log("Error");
			
			else
			{
				console.log("Login");
				const {onSignIn} = this.props;
				onSignIn(user.userID);
				const {onRouteChange} = this.props;
				onRouteChange('signin');
			}
		});
	}

	render ()
	{
		// eslint-disable-next-line
		const {onRouteChange} = this.props;
		//const test = true;
		return (
			<div className='SignIn'>
			<article className="br3 o-90 bg-light-gray ba --black-10 mv4 w-100 w-50-m w-33-l mw6 shadow-5 center">
				<main className="pa4 black-80">
					<div className='pb3'>
    					<p onClick={() => onRouteChange('Register')} className="f6 br-pill no-underline ba b--black grow pv2 ph3 dib mr3 pointer">
      					Sign Up
    					</p>
    					<p onClick={() => onRouteChange('testsignout')} className="f6 br-pill b--black no-underline ba grow pv2 ph3 dib pointer">
      					Sign In
    					</p>
  					</div>
				  <div className="measure">
				    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
				      <legend className="f4 fw6 ph0 mh0">Sign In</legend>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
				        <input className="pa2 input-reset ba w-100" onChange={this.onUserNameChange} type="email" name="email-address"  id="email-address" />
				      </div>
				      <div className="mv3">
				        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
				        <input className="b pa2 input-reset ba w-100" onChange={this.onPasswordChange} type="password" name="password"  id="password" />
				      </div>
				    </fieldset>
				    <div className="">
				      <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" onClick={() => this.onSubmitSignin()} />
				    </div>
				    <div className="lh-copy mt3">
				    </div>
				  </div>
				</main>
			</article>
			</div>
		)
	}
}

export default SignIn