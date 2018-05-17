import gql from 'graphql-tag';

export const allContactsQuery = gql`
  query allContacts($first: Int!, $skip: Int!) {
    allContacts(orderBy: createdAt_DESC, first: $first, skip: $skip) {
      id
      createdAt
      firstName
      lastName
      phoneNumbers {
        label
        number
      }
    }
    _allContactsMeta {
      count
    }
  }
`;

export default allContactsQuery;
