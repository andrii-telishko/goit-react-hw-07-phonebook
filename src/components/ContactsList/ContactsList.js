import React, {Component} from 'react';
import ContactItem from '../ContactItem';
import PropTypes from 'prop-types';
import '../styles/base.scss'
import './ContactList.scss';
import { connect } from 'react-redux';
import operations from '../../redux/operations'

class ContactsList extends Component {
    static propTypes = {
    contacts: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.fetchContacts();
    };
    
    render() {
        return (
            <>
                {this.props.isLoadingContacts && <h1>Loading...</h1>}
                <ul className='contact-list'>
            {this.props.contacts.map(({id, name, number}) => {
                return (<li key={id} className='contact-item'><ContactItem
                    name={name}
                    number={number} />
                    <button type='button' onClick={()=>{this.props.onClick(id)}} className='button contact-item__button'>Delete</button>
                </li>)
            })}
        </ul>
            </>
        );
    
    };
        
}

const getFilteredContacts = (contacts, filter) => {
    return contacts.filter(({name}) => {
      return name.toLowerCase().includes(filter.toLowerCase())
    })
   };

const mapStateToProps = ({ contacts, filter, loading }) => ({
    contacts: getFilteredContacts(contacts, filter),
    isLoadingContacts: loading
});

const mapDispatchToProps = dispatch => ({
    onClick: id => dispatch(operations.deleteContact(id)),
    fetchContacts: () => dispatch(operations.fetchContacts())
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);

// const ContactsList = ({contacts, onClick}) => {
//     return (
//         <ul className='contact-list'>
//             {contacts.map(({id, name, number}) => {
//                 return (<li key={id} className='contact-item'><ContactItem
//                     name={name}
//                     number={number} />
//                     <button type='button' onClick={()=>{onClick(id)}} className='button contact-item__button'>Delete</button>
//                 </li>)
//             })}
//         </ul>
//     );
// };

// ContactsList.propTypes = {
//     contacts: PropTypes.array.isRequired,
//     onClick: PropTypes.func.isRequired
// };


