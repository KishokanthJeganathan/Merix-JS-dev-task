import React, { useContext } from 'react';
import ResultTable from '../src/components/result-page/result-table/ResultTable';
import { SearchContext } from '../src/contexts/SearchContext';

const ResultsPage = ({ data }) => {
	const { characters, searchInput } = useContext(SearchContext);
	return (
		<main>
			{characters !== 'error' ? (
				(searchInput !== '' && characters !== null && <ResultTable results={characters} />) ||
				(!data.error && <ResultTable results={data.results} />) || <h1>{data.error}</h1>
			) : (
				<h1>Nothing here</h1>
			)}
		</main>
	);
};

export async function getServerSideProps(context) {
	const res = await fetch(`https://rickandmortyapi.com/api/character/?name=${context.params.results}`);
	const data = await res.json();

	if (!data) {
		return {
			notFound: true
		};
	}

	return {
		props: { data }
	};
}
export default ResultsPage;
