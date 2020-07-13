import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { RecoilRoot } from 'recoil';

import Header from './commons/containers/header/header';
import Categories from './commons/containers/categories/categories';
import Featured from './commons/containers/featured/featured';

function App() {
	return (
		<Fragment>
			<Header />
			<AppContainer>
				<Categories />
				<Featured />
			</AppContainer>
		</Fragment>
	);
}

const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		font-family: "Lucida Console", Monaco, monospace;
		box-sizing: border-box;
	}
`;

const AppContainer = styled.section`
	display: flex;
	flex-direction: row;
	width: 1024px;
	margin: auto;
`;

ReactDOM.render(
	<React.StrictMode>
		<RecoilRoot>
			<GlobalStyle />
			<App />
		</RecoilRoot>
	</React.StrictMode>,
	document.getElementById('root')
);
