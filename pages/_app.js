import { createGlobalStyle } from 'styled-components';
import { SearchProvider } from '../src/contexts/SearchContext';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export default function App({ Component, pageProps }) {
	return (
		<React.Fragment>
			<GlobalStyle />
			<SearchProvider>
				{' '}
				<Component {...pageProps} />
			</SearchProvider>
		</React.Fragment>
	);
}
