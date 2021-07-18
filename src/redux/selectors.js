import { createSelector } from '@reduxjs/toolkit';

const getAllContacts = state => state.contacts;
export const getFilter = state => state.filter;
export const getLoader = state => state.loading;

export const getFilteredContacts = createSelector([getAllContacts, getFilter],
    (contacts, filter) => {
        return contacts.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()));
    });

//     const getFilteredContacts = (contacts, filter) => {
//     return contacts.filter(({name}) => {
//       return name.toLowerCase().includes(filter.toLowerCase())
//     })
//    };
// export default {getFilteredContacts, getLoader }
