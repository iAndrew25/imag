import {atom} from 'recoil';

const cartState = atom({
	key: 'cartState',
	default: []
});

const categoriesState = atom({
	key: 'categoriesState',
	default: [{name: 'Category 1'}, {name: 'Category 2'}, {name: 'Category 3'}]
});

const featuredState = atom({
	key: 'featuredState',
	default: [
		{id: 1, name: 'Product 1 dsg sdg sg sdsg'},
		{id: 2, name: 'Product 2'},
		{id: 3, name: 'Product 3'},
		{id: 4, name: 'Product 4'},
		{id: 5, name: 'Product 5'},
		{id: 6, name: 'Product 6'},
		{id: 7, name: 'Product 7'},
		{id: 8, name: 'Product 8'},
		{id: 9, name: 'Product 9'}
	]
});

export {
	categoriesState,
	featuredState,
	cartState
};
