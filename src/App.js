import './App.css';
import React from 'react';
import ContactsList from "./components/ContactsList";
import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter"

const App = () => (
  <>
    <h1>Phonebook</h1>
    <ContactForm />
    <h2>Contacts</h2>
    <Filter />
    <ContactsList />
  </>);

export default App;
