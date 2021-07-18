
import { createReducer, configureStore, getDefaultMiddleware, combineReducers } from '@reduxjs/toolkit';
import actions from './actions';
import {
  
  
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const {fetchContactsRequest, fetchContactsSuccess, fetchContactsError, addContactRequest, addContactSuccess, addContactError, deleteContactRequest, deleteContactSuccess, deleteContactError} = actions;


const contactsReducer = createReducer([], {
  [fetchContactsSuccess]: (_, {payload}) => payload,
  [addContactSuccess]: (state, { payload }) => {
    if (state.map(contact => contact.name).includes(payload.name)) {
     return  alert (`${payload.name} is already exist`)
    };
         return [...state, payload]
},
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filterReducer = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload
});

const loadingReducer = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false
});

// const persistConfig = {
//   key: 'contacts',
//   storage,
//   blacklist: ['filter']
// };

const reducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  loading: loadingReducer
});

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  })
];

const store = configureStore({
  reducer,
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

// const persistor = persistStore(store);

export default store;

