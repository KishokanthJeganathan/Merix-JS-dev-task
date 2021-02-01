import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

const SearchContext = createContext();

const SearchProvider = ({ children }) => {
	const [ searchInput, setSearchInput ] = useState('');
	const [ characters, setCharacters ] = useState(null);

	const getSearchInput = (nameOfCharacter) => {
		setSearchInput(nameOfCharacter);
	};

	useEffect(
		() => {
			const source = axios.CancelToken.source();

			const getData = async () => {
				try {
					const response = await axios.get(`https://rickandmortyapi.com/api/character/?name=${searchInput}`);
					setCharacters(response.data.results);
				} catch (error) {
					console.error('error', error);
					setCharacters('error');
				}
			};

			getData();

			return () => {
				source.cancel();
			};
		},
		[ searchInput ]
	);

	return <SearchContext.Provider value={{ getSearchInput, searchInput }}>{children}</SearchContext.Provider>;
};

export { SearchContext, SearchProvider };
