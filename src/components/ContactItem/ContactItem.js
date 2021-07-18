import React from 'react';
import PropTypes from 'prop-types';
import './ContactItem.scss'

const ContactItem = ({name,number}) => {
    return (<>
        <span className='contact-name'>{name}: </span>
        <span className='contact-number'>{number}</span>
    </>);
};

ContactItem.propTypes = {
    name: PropTypes.string,
    number: PropTypes.string
}

ContactItem.defaultProps = {
    name: "Mickey Mouse",
    number: 123456789
};

export default ContactItem