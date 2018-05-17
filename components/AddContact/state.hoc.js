import React from 'react';
import { shape } from 'prop-types';

import { contactType } from '../../propTypes/Contact';

const emptyPhoneNumber = {
  label: '',
  number: '',
};

export default (Component) => {
  class AddContact extends React.Component {
    state = {
      phoneNumbers: [],
      firstName: '',
      lastName: '',
      errors: {},
      ...this.props.realContact,
    }

    onChange = contact => this.setState({
      ...this.state,
      ...contact,
    })

    onChangePhoneNumber = (newPhone, index) => {
      const phoneNumbers = [
        ...this.state.phoneNumbers.slice(0, index),
        newPhone,
        ...this.state.phoneNumbers.slice(index + 1, this.state.phoneNumbers.length),
      ];

      this.onChange({ phoneNumbers });
    }

    addNewPhoneNumber = () => {
      this.setState({
        ...this.state,
        phoneNumbers: [
          ...this.state.phoneNumbers,
          emptyPhoneNumber,
        ],
      });
    }

    render() {
      return (
        <Component
          {...this.state}
          {...this.props}
          onChange={this.onChange}
          addNewPhoneNumber={this.addNewPhoneNumber}
          onChangePhoneNumber={this.onChangePhoneNumber}
        />
      );
    }
  }

  AddContact.propTypes = {
    realContact: shape(contactType).isRequired,
  };

  return AddContact;
};

