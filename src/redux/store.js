import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './slices/contactsSlice';
import { searchReducer } from './slices/searchSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';

const persistConfigure = {
	key: 'root',
	storage,
};

const reducer = combineReducers({
	contacts: contactsReducer,
	search: searchReducer,
});

const persistedReducer = persistReducer(persistConfigure, reducer);

const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

export { store };
