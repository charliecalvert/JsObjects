import React from 'react';
import Layout from './Layout';

export default ({ children = '-- Not implemented --' }) => (
  <Layout>
    <h2>{children}</h2>
  </Layout>
);
