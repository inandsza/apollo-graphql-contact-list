import React from 'react';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import Layout from '../components/Layout';

import withData from '../lib/apollo';
import AddContact from '../components/AddContact';

const EditForm = ({
  contactQuery,
}) => (
  <Layout>
    {
      !contactQuery.loading && <AddContact
        realContact={contactQuery.Contact}
      />
    }
  </Layout>
);

const contactQuery = gql`
  query ContactQuery($id: ID) {
    Contact(id: $id) {
      id
      firstName
      lastName
      phoneNumbers {
        label
        number
      }
    }
  }
`;

export default withData(graphql(contactQuery, {
  name: 'contactQuery',
  options: ({ url }) => ({
    fetchPolicy: 'network-only',
    variables: {
      id: url.query.id,
    },
    refetchQueries: ['allContacts'],
  }),
})(EditForm));
