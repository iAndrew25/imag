import React from 'react';
import styled from 'styled-components';
import {useRecoilValue} from 'recoil';
import { Link } from "@reach/router";

import {categoriesState} from '../../../confg/store/atoms';

function Categories() {
	const categories = useRecoilValue(categoriesState);

	return (
		<CategoriesContainer>
			<h3>Categories</h3>
			<ul>
				{categories.map(({name}) => <li><Link to={`search/category=${name}`}>{name}</Link></li>)}
			</ul>
		</CategoriesContainer>
	);
}

const CategoriesContainer = styled.section`
	& > h3 {
		margin: 16px 0;
	}

	& > ul {
		list-style: none;
		width: 200px;

		& > li {
			margin: 8px;
			cursor: pointer;
		}
	}
`;

export default Categories;