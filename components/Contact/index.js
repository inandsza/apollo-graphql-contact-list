import React from 'react';
import { Card, CardActions, CardHeader } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import Button from '../shared/Button';
import { contactType } from '../../propTypes/Contact';

import withMaterialUI from '../../lib/withMUI';
import { styles } from './styles.css';

const placeholders = [
  'https://semantic-ui.com/images/avatar2/large/elyse.png',
  'https://semantic-ui.com/images/avatar2/large/matthew.png',
  'https://semantic-ui.com/images/avatar2/large/kristy.png',
];

const Contact = ({
  firstName,
  lastName,
  phoneNumbers,
  id,
  viewPage,
  deleteContact,
}) => (
  <Card style={styles.card}>
    <CardHeader
      title={`${firstName} ${lastName}`}
      subtitle={phoneNumbers.map(p => <div>{p.number} / {p.label}</div>)}
      avatar={placeholders[Math.floor(Math.random() * placeholders.length)]} // for presentational purposes
    />
    <CardActions style={styles.actions}>
      {!viewPage && <Button
        link={`/view?id=${id}`}
        as={`/view/${id}`}
        label="View"
      />}
      <Button
        link={`/edit?id=${id}`}
        as={`/edit/${id}`}
        label="Edit"
      />
      <RaisedButton
        label="Delete"
        primary
        onClick={() => deleteContact(id)}
      />
    </CardActions>
  </Card>
);

Contact.propTypes = { ...contactType };

const deleteContact = gql`
  mutation deleteContact($id: ID!) {
    deleteContact(id: $id) {
      id
    }
  }
`;

const withQuery = graphql(deleteContact, {
  props: ({ mutate }) => ({
    deleteContact: id => mutate({
      variables: { id },
      updateQueries: {
        allContacts: (previousResult, { mutationResult }) => {
          const deletedContact = mutationResult.data.deleteContact;
          const { allContacts } = previousResult;
          const deletedIndex = previousResult.allContacts
            .findIndex(p => p.id === deletedContact.id);

          const newAllContact = [
            ...allContacts.slice(0, deletedIndex),
            ...allContacts.slice(deletedIndex + 1, allContacts.length),
          ];

          return {
            ...previousResult,
            allContacts: newAllContact,
          };
        },
      },
    }),
  }),
});

export default withQuery(withMaterialUI(Contact));
