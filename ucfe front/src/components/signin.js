import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import '../css/signin.css';
import axios from 'axios';
const url = 'http://localhost:4404/';

class signin extends Component {
  state = {
    email: '',
    password: '',
  }
  onEmailChange = (event) => {
    this.setState({email:event.target.value});
  }
  onPasswordChange = (event) => {
    this.setState({password:event.target.value});
  }
  onSubmitSignin = () => {
		console.log(this.state);
    const user = {
      userID:this.state.email,
      userPW:this.state.password
    };
    axios.post(url + 'users/login/', user)
    .then(res => {
			// check with database
    });
  }
  render() {
    return (
			<div className='SignIn'>
				<article className="br3 o-90 bg-light-gray ba --black-10 mv4 w-100 w-50-m w-33-l mw6 shadow-5 center">
					<main className="pa4 black-80">
						<div className='pb3'>
							<Link to='/register'>
								<p className="f6 br-pill no-underline ba b--black grow pv2 ph3 dib mr3 pointer">
      						Sign Up
    						</p>
							</Link>
							<p className="f6 br-pill b--black no-underline ba grow pv2 ph3 dib pointer">
      					Sign In
    					</p>
  					</div>
				  	<div className="measure">
				    	<fieldset id="sign_in" className="ba b--transparent ph0 mh0">
				      	<legend className="f4 fw6 ph0 mh0">Sign In</legend>
								<div className="row">
        					<div className="input-field col s12">
          					<i className="material-icons prefix">email</i>
          					<input id="icon_person" type="email" className="validate" onChange={this.onEmailChange}/>
          					<label htmlFor="icon_person">Email</label>
        					</div>
        					<div className="input-field col s12">
          					<i className="material-icons prefix">lock</i>
          					<input id="icon_lock" type="password" className="validate" onChange={this.onPasswordChange}/>
          					<label htmlFor="icon_lock">Password</label>
        					</div>
      					</div>
				    	</fieldset>
				    	<div className="">
				      	<input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign In" onClick={() => this.onSubmitSignin()}/>
				    	</div>
				  		<div className="lh-copy mt3"/>
				  	</div>
					</main>
				</article>
			</div>
    )
  }
}

export default signin