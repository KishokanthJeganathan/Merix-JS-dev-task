import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';
import * as S from './styles';

const ResultTable = ({ results }) => {
	return (
		<S.SectionWrapper>
			<table>
				<thead>
					<tr>
						<th>Image</th>
						<th>Name</th>
						<th>Link to more info</th>
					</tr>
				</thead>
				<tbody>
					{results &&
						results.map((result) => (
							<tr key={uuidv4()}>
								<td>
									<Image src={result.image} alt="Picture of the author" width={250} height={250} />
								</td>
								<td>{result.name}</td>
								<td>
									<Link href={`characters/${result.name}`}>
										<a>Read More</a>
									</Link>
								</td>
							</tr>
						))}
				</tbody>
			</table>
		</S.SectionWrapper>
	);
};

export default ResultTable;
