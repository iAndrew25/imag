import React from 'react';
import styled from 'styled-components';

import Categories from '../../commons/containers/categories/categories';
import Featured from '../../commons/containers/featured/featured';

function Home() {
	return (
		<HomeContainer>
			<Categories />
			<Featured />
		</HomeContainer>
	);
}

const HomeContainer = styled.section`
	display: flex;
	flex-direction: row;
`;

export default Home;