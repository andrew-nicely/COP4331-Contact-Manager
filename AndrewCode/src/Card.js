import React from 'react';

const Card = ({ name, email, id}) => {
	return (
		<div className='tc bg-light-yellow dib br3 pa3 ma2 grow shadow-5'>
			<img alt='Robots' src={`https://robohash.org/${id}?size=150x150`} />
			<div>
				<h2 className='f5'>{name}</h2>
				<p className='f6'>{email}</p>
			</div>
		</div>
	);
}

export default Card;