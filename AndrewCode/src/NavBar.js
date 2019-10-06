import React from 'react';
import SignOutButton from './SignOutButton';
import AddContact from './AddContact';

const NavBar = ({loggedIn, onRouteChange}) => {
	console.log(loggedIn);
	if (loggedIn){
		return(
			<nav className='bg-light-gray'>
				<div className="flex justify-between">
				  <div className="w-20 pa2">
				    <SignOutButton onRouteChange={onRouteChange} text={'Sign Out'}/>
				  </div>
				  <div className="w-50 pa3 db">
				    <p className='center v-mid courier'>Contact Manager</p>
				  </div>
				  <div className="w-20 pa2">
				    <AddContact />
				  </div>
				</div>
			</nav>
		)
	}
	else{
		return (
			<nav className='bg-light-gray'>
				<div className="flex justify-center">
				  <div className="w-50 pa3">
				    <p>Contact Manager</p>
				  </div>
				</div>
			</nav>
		);
	}
}

export default NavBar;