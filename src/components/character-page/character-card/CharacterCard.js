import React from 'react';
import Image from 'next/image';

const CharacterCard = ({ name, gender, image, origin, specias, status }) => {
	return (
		<article>
			<Image src={image} alt={name} width={500} height={500} />
			<h1>{name}</h1>
			<p>{specias}</p>
			<p>{gender}</p>
			<p>{origin}</p>
			<p>{status}</p>
		</article>
	);
};

export default CharacterCard;
