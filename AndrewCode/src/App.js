import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar.js';
import SignIn from './SignIn';
import Test from './Test';
import CardList from './CardList';
import SearchBar from './SearchBar';
import axios from 'axios';
import Register from './Register';

class App extends Component {
	constructor() {
		super()
		this.state = {
			route: 'landing',
			contacts: [],
			searchField: '',
			register : false,
			signedIn: false,
		}
	}

	onRouteChange = (route) =>
	{
		if (route === 'signin')
		{
			this.setState({route: 'testsignout'});
		}
		else if (route === 'testsignout')
		{
			this.setState({route: 'landing'});
			this.setState({register:false});
		}
		else if (route === 'Register')
		{
			this.setState({register:true})
		}
	}

	onSearchChange = (event) => {
		this.setState({ searchField: event.target.value });
	}

	onLogIn = (userID) => {
		console.log(userID);
		
		axios.post('http://localhost:4000/contacts/find', {userID: userID})
		.then(res => {
			const {data} = res;
			console.log(data);
			this.setState({contacts:data})
		})
		this.setState({signedIn: true});
	}

  	render(){
  		const filteredContacts = this.state.contacts.filter(contacts => {
			  console.log("Filtered", contacts);
			return contacts.firstName.toLowerCase().includes(this.state.searchField.toLowerCase());
		});
	    return (
	      <div className="App">
	        <NavBar loggedIn={this.state.signedIn} onRouteChange={this.onRouteChange}/>
	        {
	        	(this.state.route === 'landing' 
	        	? (this.state.register === false ? <SignIn onSignIn={this.onLogIn} onRouteChange={this.onRouteChange}/> : <Register onRouteChange={this.onRouteChange}/>)
	        	:
	        	(<div>
		        	<Test onRouteChange={this.onRouteChange}/>
		        	<SearchBar searchChange={this.onSearchChange}/>
		        	<CardList contacts={filteredContacts}/>
	        	</div>))
	    	}

	      </div>
	    );
  	}
}

export default App;
