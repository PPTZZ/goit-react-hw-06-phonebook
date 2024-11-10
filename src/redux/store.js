import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './slices/contactsSlice';
import { searchContactReducer } from './slices/searchSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedContacts = persistReducer(persistConfig, contactsReducer);
const persistedContactSearch = persistReducer(
  persistConfig,
  searchContactReducer
);

const store = configureStore({
  reducer: {
    contacts: persistedContacts,
    search: persistedContactSearch,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);

export { store, persistor };
