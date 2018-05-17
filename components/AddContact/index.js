import React from 'react';
import { func } from 'prop-types';

import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import { CardTitle, Card, CardActions, CardHeader } from 'material-ui/Card';

import Divider from 'material-ui/Divider';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import withState from './state.hoc';
import { styles } from './styles.css';

import { contactType } from '../../propTypes/Contact';

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
  addNewPhoneNumber,
  onChangePhoneNumber,
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
      <CardTitle title="Numbers:" />
      {
        phoneNumbers && phoneNumbers.map((phone, index) => (
          <div>
            <TextField
              hintText="Phone Number"
              style={styles.textField}
              underlineShow={false}
              value={phone.number}
              onChange={e => onChangePhoneNumber({ ...phone, number: e.target.value }, index)}
              errorText={errors.phoneNumbers && errors.phoneNumbers[0].number}
            />
            <TextField
              hintText="Phone Label"
              style={styles.textField}
              underlineShow={false}
              value={phone.label}
              onChange={e => onChangePhoneNumber({ ...phone, label: e.target.value }, index)}
              errorText={errors.phoneNumbers && errors.phoneNumbers[0].number}
            />
            <Divider />
          </div>
        ))
      }
      <Divider />
      <RaisedButton
        label="Add New Number"
        onClick={addNewPhoneNumber}
        primary
      />
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
  onChange: func.isRequired,
  addNewPhoneNumber: func.isRequired,
  ...contactType,
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
