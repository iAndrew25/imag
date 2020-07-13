import React from 'react';
import styled from 'styled-components';
import {useRecoilValue, useRecoilState} from 'recoil';

import Product from '../../components/product/product';

import {featuredState, cartState} from '../../../confg/store/atoms';

function Featured() {
	const featured = useRecoilValue(featuredState);
	const [cart, addToCart] = useRecoilState(cartState);

	const handleAddToCart = product => addToCart(prevCartProducts => {
		if(prevCartProducts.some(({id}) => id === product.id)) {
			return prevCartProducts.filter(({id}) => id !== product.id);
		} else {
			return [...prevCartProducts, product];
		}
	});

	const isInCart = product => cart.some(({id}) => id === product.id);

	return (
		<FeaturedContainer>
			<h3>Featured</h3>
			<ProductContainer>
				{featured.map(product => 
					<Product 
						{...product}
						isInCart={isInCart(product)}
						handleAddToCart={() => handleAddToCart(product)}
					/>
				)}				
			</ProductContainer>
		</FeaturedContainer>
	);
}

const FeaturedContainer = styled.section`
	flex-grow: 1;

	& > h3 {
		margin: 16px 0;
	}
`;

const ProductContainer = styled.section`
	display: flex;
	flex-grow: 1;
	justify-content: space-around;
	flex-direction: row;
	flex-wrap: wrap;
`;

export default Featured;