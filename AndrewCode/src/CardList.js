import React from 'react';
import Card from './Card';

const CardList = ({ contacts }) => {
	const cardsArray = contacts.map ((user, i) => {
		return 	<Card key = {i} id ={contacts[i].id} name = {contacts[i].name} email = {contacts[i].email}/>
	}
	)
	return (
		<div>
			{cardsArray}
		</div>
	);
}

export default CardList;