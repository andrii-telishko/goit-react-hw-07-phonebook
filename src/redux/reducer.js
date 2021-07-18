import { createReducer, combineReducers } from '@reduxjs/toolkit'
import {actions} from './';

const { fetchContactsRequest, fetchContactsSuccess, fetchContactsError, addContactRequest, addContactSuccess, addContactError, deleteContactRequest, deleteContactSuccess, deleteContactError } = actions;

const contactsReducer = createReducer([], {
  [fetchContactsSuccess]: (_, {payload}) => payload,
  [addContactSuccess]: (state, { payload }) => {
    if (state.map(({ number }) => number).includes(payload.number)) {
      
     return  alert (`${payload.number} is already exist`)
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

const reducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  loading: loadingReducer
});

export default reducer;