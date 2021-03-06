import axios from 'axios';
import {actions} from './'

const { fetchContactsRequest, fetchContactsSuccess, fetchContactsError, addContactRequest, addContactSuccess, addContactError, deleteContactRequest, deleteContactSuccess, deleteContactError } = actions;

axios.defaults.baseURL = 'http://localhost:4040';

const fetchContacts = () => dispatch => {
    dispatch(fetchContactsRequest());

    axios.get('/contacts').then(({ data }) => dispatch(fetchContactsSuccess(data)))
        .catch(error => dispatch(addContactError(error)));
};

const addContact = (name, number) => dispatch => {
    const contact = { name, number };
  
    dispatch(addContactRequest());

    axios.post('/contacts', contact).then(({ data }) =>
        dispatch(addContactSuccess(data)))
        .catch(error => dispatch(addContactError(error)));
};

const deleteContact = contactId => dispatch => {
    dispatch(deleteContactRequest());

    axios.delete(`/contacts/${contactId}`)
        .then(() => dispatch(deleteContactSuccess(contactId)))
        .catch(error => dispatch(deleteContactError(error)));
};

export default {fetchContacts, addContact, deleteContact}