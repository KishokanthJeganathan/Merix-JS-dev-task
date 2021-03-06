import React, { useContext, useState } from 'react';
import { SearchContext } from '../../../contexts/SearchContext';
import { useRouter } from 'next/router';
import * as S from './styles';

const SearchForm = () => {
	const router = useRouter();
	const [ character, setCharacter ] = useState('');
	const { getSearchInput } = useContext(SearchContext);

	const handleSubmit = (e) => {
		e.preventDefault();
		getSearchInput(character);
		router.push(character);
	};
	return (
		<S.FormWrapper onSubmit={handleSubmit}>
			<label htmlFor="characterName">
				Which awesome character are we looking for?
				<input
					placeholder="Evil Rick Sanchez perhaps?"
					name="characterName"
					id="characterName"
					type="text"
					value={character}
					onChange={(e) => setCharacter(e.target.value)}
				/>
			</label>
			<input type="submit" value="Submit" />
		</S.FormWrapper>
	);
};

export default SearchForm;
