import React from 'react';
import Card from './Card';

const CardList = ({ contacts , pullContacts, testClickFunction}) => {
	const cardsArray = contacts.map ((user, i) => {
		return 	<Card testClickFunction={testClickFunction} pullContacts={pullContacts} key={i} id={contacts[i]._id} name={contacts[i].firstName} email={contacts[i].emailAddress} />
	}
	)
	return (
		<div>
			{cardsArray}
		</div>
	);
}

export default CardList;