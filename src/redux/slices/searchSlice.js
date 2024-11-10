import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

const searchContactSlice = createSlice({
  name: 'search',
  initialState: initialState,
  reducers: {
    searchContact(state, action) {
      return action.payload;
    },
  },
});

export const { searchContact } = searchContactSlice.actions;
export const searchContactReducer = searchContactSlice.reducer;
