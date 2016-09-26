import Helmet from 'react-helmet';
import React from 'react';
import messages from './messages';

import { FormattedMessage } from 'react-intl';

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
