import React from 'react';
import SignOutButton from './SignOutButton';
import AddContact from './AddContact';

const NavBar = ({loggedIn, onRouteChange, pullContacts, currentUser}) => {
	console.log(loggedIn);
	if (loggedIn){
		return(
			<nav className='bg-dark-gray'>
				<div className="flex justify-between">
				  <div className="w-20 pa2">
				    <SignOutButton onRouteChange={onRouteChange} text={'Sign Out'}/>
				  </div>
				  <div className="w-50 pa3 db">
				    <p className='center f3 v-mid courier light-gray'>Manager of Contact</p>
				  </div>
				  <div className="w-20 pa2">
				    <AddContact currentUser={currentUser} pullContacts={pullContacts}/>
				  </div>
				</div>
			</nav>
		)
	}
	else{
		return (
			<nav className='bg-dark-gray'>
				<div className="flex justify-center">
				  <div className="w-50 pa3">
				    <p className="f3 courier light-gray">Manager of Contact</p>
				  </div>
				</div>
			</nav>
		);
	}
}

export default NavBar;