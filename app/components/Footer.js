import React, { PropTypes } from 'react';

import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router';

const Footer = ({ about, contact, home }) => (
  <div>
    <Link to="/">
      <FormattedMessage {...home} />
    </Link>
    {' | '}
    <Link to="/o-projektu">
      <FormattedMessage {...about} />
    </Link>
    {' | '}
    <Link to="/kontakt">
      <FormattedMessage {...contact} />
    </Link>
  </div>
);

Footer.propTypes = {
  about: PropTypes.object.isRequired,
  contact: PropTypes.object.isRequired,
  home: PropTypes.object.isRequired,
};

export default Footer;
