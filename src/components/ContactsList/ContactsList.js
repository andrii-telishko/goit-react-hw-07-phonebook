import React from 'react';
import ContactItem from '../ContactItem';
import PropTypes from 'prop-types';
import '../styles/base.scss'
import './ContactList.scss';
import { connect } from 'react-redux';
import actions from '../../redux/actions'

const ContactsList = ({contacts, onClick}) => {
    return (
        <ul className='contact-list'>
            {contacts.map(({id, name, number}) => {
                return (<li key={id} className='contact-item'><ContactItem
                    name={name}
                    number={number} />
                    <button type='button' onClick={()=>{onClick(id)}} className='button contact-item__button'>Delete</button>
                </li>)
            })}
        </ul>
    );
};

ContactsList.propTypes = {
    contacts: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired
};

const getFilteredContacts = (contacts, filter) => {
    return contacts.filter(({name}) => {
      return name.toLowerCase().includes(filter.toLowerCase())
    })
   };

const mapStateToProps = ({ contacts, filter }) => ({
  contacts: getFilteredContacts(contacts, filter),
});

const mapDispatchToProps = dispatch => ({
  onClick: id => dispatch(actions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);


