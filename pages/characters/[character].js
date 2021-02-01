import React, { useContext } from 'react';
import CharacterHolder from '../../src/components/character-page/character-holder/CharacterHolder';
import { SearchContext } from '../../src/contexts/SearchContext';
import { useRouter } from 'next/router';

const CharacterPage = ({ data }) => {
	const router = useRouter();
	const { character } = router.query;
	const { characters } = useContext(SearchContext);

	const correctCharacter = characters && characters.filter((result) => result.name === character);

	return (
		<main>
			{(correctCharacter < 0 && <CharacterHolder data={correctCharacter} />) ||
				(data.results && <CharacterHolder data={data.results} />)}
		</main>
	);
};

// I am using the below getServerSideProps as a fail safe to fetch data using the context provided by next.js in case the user does a hard refresh of the page, which will clean the state in context api. So this page will first look for data from the state stored in the context api, and if it cant find data there, it will get the data from the api again

// I realise that it might be a better idea to store the data in local storage in a simple app like this so that it can be fetched from wherever and wont make reqests to the serve so often, but I wanted to show the below as its cool features like that that makes me love working with next.js :D

export async function getServerSideProps(context) {
	const res = await fetch(`https://rickandmortyapi.com/api/character/?name=${context.params.character}`);
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

export default CharacterPage;
