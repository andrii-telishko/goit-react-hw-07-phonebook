import React from 'react';
import PropTypes from 'prop-types';
import '../styles/base.scss';
import { connect } from 'react-redux';
import actions from '../../redux/actions';

const Filter = ({value, onChange}) => {
    return (
        <label className='label'>
            Find contact by name
         <input
            type="text"
            value={value}
            onChange={onChange}
            className='input'/>
        </label>
    );
};

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  value: state.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(actions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);