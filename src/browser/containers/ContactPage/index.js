import Helmet from 'react-helmet';
import React from 'react';
import { FormattedMessage } from 'react-intl';

import messages from './messages';

const ContactPage = () => (
  <div>
    <FormattedMessage {...messages.title}>
      {message => <Helmet title={message} />}
    </FormattedMessage>
    <h1>
      <FormattedMessage {...messages.title} />
    </h1>

    <p>
      <FormattedMessage {...messages.perex} />
    </p>
  </div>
);

export default ContactPage;
