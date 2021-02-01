import { createContext, useState } from 'react';

const SearchContext = createContext();

const SearchProvider = ({ children }) => {
	const [ searchInput, setSearchInput ] = useState('');

	const getSearchInput = (nameOfCharacter) => {
		setSearchInput(nameOfCharacter);
	};

	return <SearchContext.Provider value={{ getSearchInput, searchInput }}>{children}</SearchContext.Provider>;
};

export { SearchContext, SearchProvider };
