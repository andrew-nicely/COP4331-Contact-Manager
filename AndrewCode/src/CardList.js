import React from 'react';
import Card from './Card';

const CardList = ({ contacts }, {pullContacts}) => {
	const cardsArray = contacts.map ((user, i) => {
		return 	<Card pullContacts={pullContacts} key={i} id={contacts[i].id} name={contacts[i].firstName} email={contacts[i].emailAddress} id={contacts[i]._id}/>
	}
	)
	return (
		<div>
			{cardsArray}
		</div>
	);
}

export default CardList;