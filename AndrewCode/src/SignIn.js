import React from 'react';
import axios from 'axios';

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
		const user {
			userID: this.state.signInUsername,
			userPW: this.state.signInPassword
		}
		axios.post('http://localhostt:4000/users/login/'+user.userID+'/'+user.userPW)
		.then(res => console.log(res.data));
	}

	render ()
	{
		const {onRouteChange} = this.props;
		return (
			<article className="br3 ba --black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
				<main className="pa4 black-80">
				  <div className="measure">
				    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
				      <legend className="f4 fw6 ph0 mh0">Sign In</legend>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
				        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" onChange = {this.onUserNameChange} type="email" name="email-address"  id="email-address" />
				      </div>
				      <div className="mv3">
				        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
				        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" onChange = {this.onPasswordChange} type="password" name="password"  id="password" />
				      </div>
				    </fieldset>
				    <div className="">
				      <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" onClick={() => this.onSubmitSignin()} />
				    </div>
				    <div className="lh-copy mt3">
				      <p onClick={() => this.onSubmitSignin()}className="f6 link dim black db pointer">Register</p>
				      <a href="#0" className="f6 link dim black db">Forgot your password?</a>
				    </div>
				  </div>
				</main>
			</article>
		)
	}
}

export default SignIn