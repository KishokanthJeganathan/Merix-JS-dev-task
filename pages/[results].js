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

// I am using the below getServerSideProps as a fail safe to fetch data using the context provided by next.js in case the user does a hard refresh of the page, which will clean the state in context api. So this page will first look for data from the state stored in the context api, and if it cant find data there, it will get the data from the api again

// I realise that it might be a better idea to store the data in local storage in a simple app like this so that it can be fetched from wherever and wont make reqests to the serve so often, but I wanted to show the below as its cool features like that that makes me love working with next.js :D

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
