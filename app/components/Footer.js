import React, { PropTypes } from 'react';

import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router';

const Footer = ({ home, about }) => (
  <div>
    <Link to="/">
      <FormattedMessage {...home} />
    </Link>
    {' | '}
    <Link to="/o-projektu">
      <FormattedMessage {...about} />
    </Link>
  </div>
);

Footer.propTypes = {
  about: PropTypes.object.isRequired,
  home: PropTypes.object.isRequired,
};

export default Footer;
