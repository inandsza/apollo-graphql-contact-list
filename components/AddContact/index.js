import React from 'react';
import { func } from 'prop-types';

import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import { Card, CardActions, CardHeader } from 'material-ui/Card';

import Divider from 'material-ui/Divider';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import withState from './state.hoc';
import { styles } from './styles.css';

const placeholders = [
  'https://semantic-ui.com/images/avatar2/large/elyse.png',
  'https://semantic-ui.com/images/avatar2/large/matthew.png',
  'https://semantic-ui.com/images/avatar2/large/kristy.png',
];

const AddContact = withState(({
  onChange,
  createContact,
  updateContact,
  id,
  firstName,
  lastName,
  phoneNumbers,
  errors,
}) => (
  <form
    noValidate
    autoComplete="off"
    onSubmit={(e) => {
      e.preventDefault();
      if (id) {
        updateContact(id, firstName, lastName, [phoneNumbers]);
      } else {
        createContact(firstName, lastName, [phoneNumbers]);
      }
    }}
  >
    <Card>
      <CardHeader
        title={`${id ? 'Edit' : 'Add'} a contact`}
        subtitle={`Here you can ${id ? 'edit' : 'add'} a contact`}
        avatar={placeholders[1]}
      />
      <TextField
        hintText="First name"
        style={styles.textField}
        underlineShow={false}
        value={firstName}
        onChange={e => onChange({ firstName: e.target.value })}
        errorText={errors.firstName}
      />
      <Divider />
      <TextField
        hintText="Last name"
        style={styles.textField}
        underlineShow={false}
        value={lastName}
        onChange={e => onChange({ lastName: e.target.value })}
        errorText={errors.lastName}
      />
      <Divider />
      <TextField
        hintText="Phone Number"
        style={styles.textField}
        underlineShow={false}
        value={phoneNumbers && phoneNumbers.number}
        onChange={e => onChange({ phoneNumbers: { ...phoneNumbers, number: e.target.value } })}
        errorText={errors.phoneNumbers && errors.phoneNumbers[0].number}
      />
      <TextField
        hintText="Phone Label"
        style={styles.textField}
        underlineShow={false}
        value={phoneNumbers && phoneNumbers.label}
        onChange={e => onChange({ phoneNumbers: { ...phoneNumbers, label: e.target.value } })}
        errorText={errors.phoneNumbers && errors.phoneNumbers[0].number}
      />
      <Divider />
      <CardActions style={styles.actions}>
        <RaisedButton
          label="Submit"
          type="submit"
          primary
        />
      </CardActions>
    </Card>
  </form>
));

AddContact.propTypes = {
  onChange: func,
  onSubmit: func,
};

const createContact = gql`
  mutation createContact(
    $firstName: String!,
    $lastName: String!,
    $phoneNumbers: [PhoneNumber!]!,
  ) {
    createContact(
      firstName: $firstName
      lastName: $lastName
      phoneNumbers: $phoneNumbers
    ) {
      id
      firstName
      lastName
      phoneNumbers {
        number
        label
      }
      createdAt
    }
  }
`;

const updateContact = gql`
  mutation updateContact($id: ID!, $firstName: String!, $lastName: String!, $PhoneNumbers: [PhoneNumber]!) {
    updateContact(id: $id, firstName: $firstName, lastName: $lastName, number: $number, label: $label) {
      id
      firstName
      lastName
      phoneNumber
      updatedAt
    }
  }
`;

const withQuery = compose(
  graphql(createContact, {
    props: ({ mutate }) => ({
      createContact: (firstName, lastName, phoneNumbers) => mutate({
        variables: {
          firstName, lastName, phoneNumbers,
        },
        refetchQueries: ['allContacts'],
      }),
    }),
  }),
  graphql(updateContact, {
    props: ({ mutate }) => ({
      updateContact: (id, firstName, lastName, phoneNumber) =>
        mutate({
          variables: {
            id, firstName, lastName, phoneNumber,
          },
        }),
    }),
  }),
);

export default withQuery(AddContact);
