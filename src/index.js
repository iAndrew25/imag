import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { RecoilRoot } from 'recoil';
import { Router, Link } from "@reach/router";

import Header from './commons/containers/header/header';

import Home from './pages/home/home';
import Search from './pages/search/search';

function App() {
	return (
		<Fragment>
			<Header />
			<AppContainer>
				<Router>
					<Home path="/" />
					<Search path="/search/:queryParams" />
				</Router>
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
