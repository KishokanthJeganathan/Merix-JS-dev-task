import React, { useContext } from 'react';
import ResultTable from '../src/components/result-table/result-holder/ResultTable';
import { SearchContext } from '../src/contexts/SearchContext';

const ResultsPage = () => {
	const { characters } = useContext(SearchContext);
	return (
		<main>
			<ResultTable results={characters} />
		</main>
	);
};

export default ResultsPage;
