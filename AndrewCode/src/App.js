import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar.js';
import SignIn from './SignIn';
import Test from './Test';
import CardList from './CardList';
import SearchBar from './SearchBar';
import { contacts } from './Contact';

class App extends Component {
	constructor() {
		super()
		this.state = {
			route: 'signin',
			contacts: contacts,
			searchField: '',
		}
	}

	onRouteChange = (route) =>
	{
		if (route === 'signin')
		{
			this.setState({route: 'testsignout'});
			console.log(contacts);
		}
		else if (route === 'testsignout')
		{
			this.setState({route: 'signin'});
		}
	}

	onSearchChange = (event) => {
		this.setState({ searchField: event.target.value });
	}

	onLogIn = (userID) => {
		axios.get('http://localhost:4000/contact/find/'+user.userID)
		.then(res => {
			const {data} = res;
			console.log(data);
		})
	}

  	render(){
  		const filteredContacts = this.state.contacts.filter(contacts => {
			return contacts.name.toLowerCase().includes(this.state.searchField.toLowerCase());
		});
	    return (
	      <div className="App">
	        <NavBar />
	        {
	        	this.state.route === 'signin' ? <SignIn onSignIn = {this.onSignIn} onRouteChange = {this.onRouteChange}/> :
	        	<div>
		        	<Test onRouteChange = {this.onRouteChange}/>
		        	<SearchBar searchChange = {this.onSearchChange}/>
		        	<CardList contacts = {filteredContacts}/>
	        	</div>
	    	}

	      </div>
	    );
  	}
}

export default App;
