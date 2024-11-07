// import { configureStore } from '@reduxjs/toolkit';
// import { contactsSlice } from './slices/contactsSlice';

import { devToolsEnhancer } from '@redux-devtools/extension';
import { createStore } from 'redux';

// const { reducer } = contactsSlice;

// export const store = configureStore({ reducer: { contacts: reducer } });

const initialState = {
	contacts: [
		{ id: 0, name: 'Rosie Simpson', number: '459-12-56' },
		{ id: 1, name: 'Hermione Kline', number: '443-89-12' },
		{ id: 2, name: 'Eden Clements', number: '645-17-79' },
		{ id: 3, name: 'Annie Copeland', number: '227-91-26' },
	],
	filters: '',
};

const rootReducer = (state = initialState, action) => {
	return state;
};

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);
