import React from 'react';
import CharacterCard from '../character-card/CharacterCard';
import { v4 as uuidv4 } from 'uuid';
import * as S from './styles';

const CharacterHolder = ({ data }) => {
	return (
		<S.SectionWrapper>
			{data.map((character) => (
				<CharacterCard
					key={uuidv4()}
					name={character.name}
					gender={character.gender}
					image={character.image}
					origin={character.origin.name}
					specias={character.specias}
					status={character.status}
				/>
			))}
		</S.SectionWrapper>
	);
};

export default CharacterHolder;
