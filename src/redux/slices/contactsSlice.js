import { createSlice } from '@reduxjs/toolkit';

export const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    contacts: [
      { id: 0, name: 'Rosie Simpson', number: '459-12-56' },
      { id: 1, name: 'Hermione Kline', number: '443-89-12' },
      { id: 2, name: 'Eden Clements', number: '645-17-79' },
      { id: 3, name: 'Annie Copeland', number: '227-91-26' },
    ],
  },
  reducers: {
    addContact: (state, action) => {
      state.contacts = [...state.contacts, action.payload];
    },
    removeContact: (state, action) => {
      state.contacts = state.contacts.filter(contact => contact.id != action.payload);
    },
  },
});

export const { addContact, removeContact } = contactSlice.actions;

export default contactSlice.reducer;
