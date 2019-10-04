import React from 'react';
import SignOutButton from './SignOutButton';
import AddContact from './AddContact';

const NavBar = ({loggedIn, onRouteChange}) => {
	console.log(loggedIn);
	if (loggedIn){
		return(
			<nav style={{backgroundColor: "gold"}}>
				<div className="flex justify-between">
				  <div className="outline w-20 pa3">
				    <SignOutButton onRouteChange = {onRouteChange} text = {'Sign Out'}/>
				  </div>
				  <div className="outline w-50 pa3">
				    <p>Welcome</p>
				  </div>
				  <div className="outline w-20 pa3">
				    <AddContact />
				  </div>
				</div>
			</nav>
		)
	}
	else{
		return (
			<nav style={{backgroundColor: "gold"}}>
				<div className="flex justify-center">
				  <div className="outline w-50 pa3">
				    <p>Welcome</p>
				  </div>
				</div>
			</nav>
		);
	}
}

export default NavBar;