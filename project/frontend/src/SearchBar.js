import React from 'react';

const SearchBar = ( {searchChange} ) => {
	return (
		<div>
			<input className='pa3 ba b--black bg-light-gray' type='search' placeholder='Search Contacts' onChange={searchChange} />
		</div>
	);
}

export default SearchBar;