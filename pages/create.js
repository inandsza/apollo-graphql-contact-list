import React from 'react';
import Layout from '../components/Layout';

import withData from '../lib/apollo';
import AddContact from '../components/AddContact';

const CreateForm = props => (
  <Layout>
    <AddContact />
  </Layout>
);

export default withData(CreateForm);
