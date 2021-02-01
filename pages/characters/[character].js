import React from 'react';
import CharacterHolder from '../../src/components/character-page/character-holder/CharacterHolder';

const CharacterPage = ({ data }) => {
	return (
		<main>
			<CharacterHolder data={data} />
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
		props: { data } // will be passed to the page component as props
	};
}

export default CharacterPage;
