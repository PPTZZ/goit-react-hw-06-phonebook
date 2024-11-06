import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice } from './slices/contactsSlice';
import { persistReducer, persistStore } from 'redux-persist';
import localStorage from 'redux-persist/es/storage';


const { reducer } = contactsSlice;

export const store = configureStore({ reducer: { contacts: reducer } });
