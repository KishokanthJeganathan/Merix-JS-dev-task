import React, { useContext } from 'react';
import CharacterHolder from '../../src/components/character-page/character-holder/CharacterHolder';
import { SearchContext } from '../../src/contexts/SearchContext';
import { useRouter } from 'next/router';

const CharacterPage = ({ data }) => {
	const router = useRouter();
	const { character } = router.query;
	const { characters } = useContext(SearchContext);

	const correctCharacter = characters && characters.filter((result) => result.name === character);
	console.log(data.results);

	return (
		<main>
			{(correctCharacter < 0 && <CharacterHolder data={correctCharacter} />) ||
				(data.results && <CharacterHolder data={data.results} />)}
		</main>
	);
};

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
