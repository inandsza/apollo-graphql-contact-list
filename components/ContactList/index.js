import React, { Fragment } from 'react';
import { func, bool, shape, arrayOf } from 'prop-types';
import { graphql } from 'react-apollo';
import RaisedButton from 'material-ui/RaisedButton';

import { allContactsQuery } from './query';

import { contactType } from '../../propTypes/Contact';
import Contact from '../Contact';

import { styles } from './styles.css';

const ContactList = ({
  loadMoreContacts,
  data: {
    allContacts,
    loading,
  },
}) => (
  <Fragment>
    <div style={styles.loadWrapper}>
      <RaisedButton
        onClick={() => loadMoreContacts()}
        primary
      >
        load more
      </RaisedButton>
    </div>
    <div style={styles.contactWrapper}>
      {
        !loading && allContacts.map(contact => (
          <Contact
            key={contact.id}
            {...contact}
          />
        ))
      }
    </div>
  </Fragment>
);

ContactList.propTypes = {
  data: shape({
    allContacts: arrayOf(shape(contactType)),
    loading: bool,
  }).isRequired,
  loadMoreContacts: func.isRequired,
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
        return {
          ...previousResult,
          allContacts: [
            ...previousResult.allContacts,
            ...fetchMoreResult.allContacts,
          ],
        };
      },
    }),
  }),
})(ContactList);

