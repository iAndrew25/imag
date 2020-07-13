import React from 'react';
import styled from 'styled-components';
import {useRecoilValue} from 'recoil';

import {cartCountState} from '../../../confg/store/selectors';

function Header() {
	const cartCount = useRecoilValue(cartCountState);

	return (
		<HeaderContainer>
			<Logo />
			<SearchContainer>
				<input type="text" placeholder="Search"  />
				<input type="submit" value="Search" />
			</SearchContainer>
			<div>
				Cart[{cartCount}]
			</div>
		</HeaderContainer>
	);
}

const HeaderContainer = styled.section`
	width: 1024px;
	height: 72px;
	margin: auto;
	padding: 16px 0;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

const Logo = styled.div`
	width: 100px;
	height: 36px;
	background-color: red;
`;

const SearchContainer = styled.div`
	display: flex;
	flex-direction: row;
	
	& > input[type=text] {
		width: 300px;
		padding: 8px;
		margin-right: 8px;
	}

	& > input[type=submit] {
		padding: 8px;
		outline: none;
	}
`;

export default Header;