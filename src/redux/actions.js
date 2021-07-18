import { createAction } from '@reduxjs/toolkit';

const fetchContactsRequest = createAction('phonebook/fetchContactsRequest');
const fetchContactsSuccess = createAction('phonebook/fetchContactsSuccess');
const fetchContactsError = createAction('phonebook/fetchContactsError');

const addContactRequest = createAction('phonebook/addContactRequest');
const addContactSuccess = createAction('phonebook/addContactSuccess');
const addContactError = createAction('phonebook/addContactError');

const deleteContactRequest = createAction('phonebook/deleteContactRequest');
const deleteContactSuccess = createAction('phonebook/deleteContactSuccess');
const deleteContactError = createAction('phonebook/deleteContactError');


// const addContact = createAction('phonebook/add', (name, number) => ({
//   payload: {
//     id: uuidv4(),
//     name,
//     number
//   }
// }));

// const deleteContact = createAction('phonebook/delete');

const changeFilter = createAction('phonebook/changeFilter');

export default { fetchContactsRequest, fetchContactsSuccess, fetchContactsError, addContactRequest, addContactSuccess, addContactError, deleteContactRequest, deleteContactSuccess, deleteContactError, changeFilter };

