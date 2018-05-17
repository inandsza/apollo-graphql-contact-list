
import React from 'react';
import { shape, bool } from 'prop-types';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import Layout from '../components/Layout';
import Contact from '../components/Contact';

import withData from '../lib/apollo';

import { contactType } from '../propTypes/Contact';

const ContactPage = ({
  contactQuery,
}) => (
  <Layout>
    {!contactQuery.loading && <Contact
      viewPage
      {...contactQuery.Contact}
    />}
  </Layout>
);

ContactPage.propTypes = {
  contactQuery: shape({
    isLoading: bool.isRequired,
    Contact: shape(contactType),
  }).isRequired,
};

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
  }),
})(ContactPage));
