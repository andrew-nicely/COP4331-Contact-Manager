import React from 'react';
import SignOut from './SignOut';
import NewContact from './NewContact';

const NavBar = () => {
	return (
		<nav>
			<p className='navBar f2 b black pa3 ba'>
				<SignOut/>
				Welcome!
				<NewContact/>
			</p>
		</nav>
	);
}

export default NavBar;