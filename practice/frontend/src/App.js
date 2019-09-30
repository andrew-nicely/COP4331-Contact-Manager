import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar.js';
import SignIn from './SignIn';
import Test from './Test';
import CardList from './CardList';
import SearchBar from './SearchBar';
import axios from 'axios';

class App extends Component {
	constructor() {
		super()
		this.state = {
			route: 'signin',
			contacts: [],
			searchField: '',
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
			this.setState({route: 'signin'});
		}
	}

	onSearchChange = (event) => {
		this.setState({ searchField: event.target.value });
	}

	onLogIn = (userID) => {
		console.log(userID);

		axios.get('http://localhost:4000/contacts/find/'+userID)
		.then(res => {
			const {data} = res;
			console.log(data);
			this.setState({contacts:data})
		})
	}

  	render(){
  		const filteredContacts = this.state.contacts.filter(contacts => {
			  console.log("Filtered", contacts);
			return contacts.firstName.toLowerCase().includes(this.state.searchField.toLowerCase());
		});
	    return (
	      <div className="App">
	        <NavBar />
	        {
	        	this.state.route === 'signin' ? <SignIn onSignIn={this.onLogIn} onRouteChange={this.onRouteChange}/> :
	        	<div>
		        	<Test onRouteChange={this.onRouteChange}/>
		        	<SearchBar searchChange={this.onSearchChange}/>
		        	<CardList contacts={filteredContacts}/>
	        	</div>
	    	}

	      </div>
	    );
  	}
}

export default App;
