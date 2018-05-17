import React from 'react';
import { shape } from 'prop-types';

import { contactType } from '../../propTypes/Contact';

export default (Component) => {
  class AddContact extends React.Component {
    state = {
      ...this.props.realContact,
      errors: {},
    }

    onChange = contact => this.setState({
      ...this.state.contact,
      ...contact,
    })

    render() {
      return (
        <Component
          {...this.state}
          {...this.props}
          onChange={this.onChange}
        />
      );
    }
  }

  AddContact.propTypes = {
    realContact: shape(contactType).isRequired,
  };

  return AddContact;
};

