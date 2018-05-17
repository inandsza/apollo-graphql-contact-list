import React, { Fragment } from 'react';
import { node, string } from 'prop-types';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import Link from 'next/link';

import withMaterialUI from '../../lib/withMUI';

import styles from './styles.css';

const Title = () => (
  <Link href="/">
    <span style={styles.title}>
      Contact List
    </span>
  </Link>
);

const ElementRightButton = ({
  href,
  label,
}) => (
  <Link href={href}>
    <RaisedButton
      style={styles.create}
      overlayStyle={{ padding: '0 16px' }}
      secondary
    >
      {label}
    </RaisedButton>
  </Link>
);

const IconElementRight = () => (
  <div>
    <ElementRightButton
      href="/create"
      label="Create a contact"
    />
    <ElementRightButton
      href="/"
      label="Home"
    />
  </div>
);

const Layout = ({ children }) => (
  <Fragment>
    <AppBar
      title={<Title />}
      iconElementRight={<IconElementRight />}
    />
    {children}
  </Fragment>
);

Layout.propTypes = {
  children: node.isRequired,
};

ElementRightButton.propTypes = {
  href: string.isRequired,
  label: string.isRequired,
};

export default withMaterialUI(Layout);
