import contacts from '../contacts';
import { createReducer, configureStore, getDefaultMiddleware, combineReducers } from '@reduxjs/toolkit';
import actions from './actions';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsReducer = createReducer(contacts, {
  [actions.addContact]: (state, { payload }) => {
    if (state.map(contact => contact.name).includes(payload.name)) {
     return  alert (`${payload.name} is already exist`)
    };
         return [...state, payload]
},
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filterReducer = createReducer('', {
  [actions.changeFilter]: (_, {payload}) => payload
})

const persistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter']
};

const persistedReducer = persistReducer(persistConfig, combineReducers({
  contacts: contactsReducer,
  filter: filterReducer
}));

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  })
];

const store = configureStore({
  reducer: persistedReducer,
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

export default { store, persistor};

