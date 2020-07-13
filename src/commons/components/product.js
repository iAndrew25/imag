import React from 'react';
import styled from 'styled-components';

function Product({imageUrl, name, price, isInCart, handleAddToCart}) {
	return (
		<ProductContainer>
			<img alt={name} src={imageUrl} />
			<div>
				<div>{name}</div>
				<PriceContainer>{price}</PriceContainer>
				<AddToCartContainer
					isInCart={isInCart}
					onClick={handleAddToCart}
				>
					{isInCart ? 'Added' : 'Add'} to cart
				</AddToCartContainer>
			</div>
		</ProductContainer>
	);
}

Product.defaultProps = {
	name: 'Lorem ipsum',
	price: '$0.99',
	imageUrl: 'http://dzasv7x7a867v.cloudfront.net/product_photos/43745795/_E5_8E_9F_E5_AE_BF_E7_8E_AB_E7_91_B0_E5_88_BA_E7_BB_A3_E9_9F_A9_E7_89_88_E5_B0_8F_E7_99_BD_E9_9E_8B_2001_large.jpg'
}

const ProductContainer = styled.section`
	width: 160px;
	height: 210px;
	background-color: pink;
	margin: 16px;
	padding: 8px;
	display: flex;
	flex-direction: column;

	justify-content: flex-start;

	& > img {
		height: 100px;
	}

	& > div {
		display: flex;
		flex-grow: 1;
		justify-content: space-between;
		align-items: center;
		flex-direction: column;

		& > div {
			margin: 8px 0;
		}
	}
`;

const PriceContainer = styled.p`
	font-weight: bold;
	margin-bottom: 8px;
`;

const AddToCartContainer = styled.p`
	font-size: 13px;
	cursor: pointer;
	opacity ${({isInCart}) => isInCart ? 0.5 : 1};

	&:hover {
		text-decoration: underline;
	}
`;

export default Product;