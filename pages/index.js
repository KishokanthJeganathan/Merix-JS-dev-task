import React from 'react';
import styled from 'styled-components';
import SearchForm from '../src/components/home-page/search-form/SearchForm';

// I usually have styles in a seperatels styles.js StyleSheet, but I didnt want to do it for the below styled component as it would be too much clutter for such a simple styling

const MainWrapper = styled.main`
	display: grid;
	justify-content: center;
	align-content: center;
	min-height: 100vh;
`;

const IndexPage = () => {
	return (
		<MainWrapper>
			<SearchForm />
		</MainWrapper>
	);
};

export default IndexPage;
