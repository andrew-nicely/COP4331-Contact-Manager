import React from 'react';
import Card from './Card';

const CardList = ({ contacts , pullContacts, testClickFunction, currentUser}) => {
	const cardsArray = contacts.map ((user, i) => {
		return 	<Card testClickFunction={testClickFunction} pullContacts={pullContacts} key={i} id={contacts[i]._id} firstName={contacts[i].firstName} email={contacts[i].emailAddress} 
		phoneNumber={contacts[i].phoneNum} lastName={contacts[i].lastName} currentUser={currentUser}/>
	}
	)
	return (
		<div>
			{cardsArray}
		</div>
	);
}

export default CardList;