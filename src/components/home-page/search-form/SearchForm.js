import React, { useState } from 'react';

const SearchForm = () => {
	const [ character, setCharacter ] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		alert(character);
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
