import React from 'react';
import CharacterCard from '../character-card/CharacterCard';
import { v4 as uuidv4 } from 'uuid';
import * as S from './styles';

const CharacterHolder = ({ data }) => {
	console.log(data);
	return (
		<S.SectionWrapper>
			{data.length > 1 ? (
				<h1>We seem to have more results because of the same person in different dimensions ;)</h1>
			) : (
				<h1>Here's your result</h1>
			)}

			<S.Characters>
				{data.map((character) => (
					<CharacterCard
						key={uuidv4()}
						name={character.name}
						gender={character.gender}
						image={character.image}
						origin={character.origin.name}
						species={character.species}
						status={character.status}
					/>
				))}
			</S.Characters>
		</S.SectionWrapper>
	);
};

export default CharacterHolder;
