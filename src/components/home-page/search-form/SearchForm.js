import React, { useContext, useState } from 'react';
import { SearchContext } from '../../../contexts/SearchContext';

const SearchForm = () => {
	const [ character, setCharacter ] = useState('');
	const { getSearchInput } = useContext(SearchContext);

	const handleSubmit = (e) => {
		e.preventDefault();
		getSearchInput(character);
	};
	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="characterName">
				Which awesome character are we looking for?
				<input
					placeholder="Evil Rick Sanchez"
					name="characterName"
					id="characterName"
					type="text"
					value={character}
					onChange={(e) => setCharacter(e.target.value)}
				/>
			</label>
			<input type="submit" value="Submit" />
		</form>
	);
};

export default SearchForm;
