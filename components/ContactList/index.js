import React from 'react';
import { bool, shape, arrayOf } from 'prop-types';
import { graphql } from 'react-apollo';
import { allContactsQuery } from './query';

import { contactType } from '../../propTypes/Contact';
import Contact from '../Contact';

import { styles } from './styles.css';

const ContactList = ({
  data: {
    allContacts,
    loading,
  },
}) => (
  <div style={styles}>
    {
      !loading && allContacts.map(contact => (
        <Contact
          key={contact.id}
          {...contact}
        />
      ))
    }
  </div>
);

ContactList.propTypes = {
  data: shape({
    allContacts: arrayOf(shape(contactType)),
    loading: bool,
  }).isRequired,
};

export default graphql(allContactsQuery, {
  options: {
    variables: {
      skip: 0,
      first: 10,
    },
  },
  props: ({ data }) => ({
    data,
    loadMoreContacts: () => data.fetchMore({
      variables: {
        skip: data.allContacts.length,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        if (!fetchMoreResult) {
          return previousResult;
        }
        return Object.assign({}, previousResult, {
          // Append the new Contacts results to the old one
          allContacts: [
            ...previousResult.allPosts,
            ...fetchMoreResult.allPosts,
          ],
        });
      },
    }),
  }),
})(ContactList);

