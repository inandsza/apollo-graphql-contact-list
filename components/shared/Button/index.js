import React from 'react';
import { string } from 'prop-types';
import Link from 'next/link';

import RaisedButton from 'material-ui/RaisedButton';
import withMaterialUI from '../../../lib/withMUI';

const style = {
  marginRight: 16,
};

const Button = ({
  link,
  label,
  as,
}) => (
  <Link
    href={link}
    as={as || link}
  >
    <RaisedButton
      style={style}
      label={label}
      primary
    />
  </Link>
);

Button.defaultProps = {
  as: null,
};

Button.propTypes = {
  link: string.isRequired,
  label: string.isRequired,
  as: string,
};

export default withMaterialUI(Button);
