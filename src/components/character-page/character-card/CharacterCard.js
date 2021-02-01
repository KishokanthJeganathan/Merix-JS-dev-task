import React from 'react';
import Image from 'next/image';
import * as S from './styles.js';

const CharacterCard = ({ name, gender, image, origin, specias, status }) => {
	return (
		<S.ArticleWrapper>
			<Image src={image} alt={name} width={500} height={500} />
			<div>
				<h1>Name: {name}</h1>
				<p>Species: {specias}</p>
				<p>Gender: {gender}</p>
				<p>Originally from: {origin}</p>
				<p>Current Status: {status}</p>
			</div>
		</S.ArticleWrapper>
	);
};

export default CharacterCard;
