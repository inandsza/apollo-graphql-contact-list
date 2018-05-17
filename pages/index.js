import React from 'react';
import { withRouter } from 'next/router';
import withData from '../lib/apollo';
import ContactList from '../components/ContactList';
import Layout from '../components/Layout';

export default withRouter(withData(() => (
  <Layout>
    <ContactList />
  </Layout>
)));

