import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 0, name: 'Rosie Simpson', number: '459-12-56' },
  { id: 1, name: 'Hermione Kline', number: '443-89-12' },
  { id: 2, name: 'Eden Clements', number: '645-17-79' },
  { id: 3, name: 'Annie Copeland', number: '227-91-26' },
];

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
    updateContact: (state, action) => {
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload.id
      );
      if (index !== -1) {
        state.contacts[index] = action.payload;
      }
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload.id
      );
    },
  },
});
