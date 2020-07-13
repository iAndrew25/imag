import {selector} from 'recoil';

import {cartState} from './atoms';

const cartCountState = selector({
	key: 'cartCountState',
	get: ({get}) => {
		const cart = get(cartState);

		return cart.length;
	}
});

export {
	cartCountState
};
