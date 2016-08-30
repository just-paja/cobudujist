import Helmet from 'react-helmet';
import React from 'react';
import messages from './messages';

import { FormattedMessage } from 'react-intl';

const ContactPage = () => (
  <div>
    <FormattedMessage {...messages.title}>
      {message => <Helmet title={message} />}
    </FormattedMessage>
  </div>
);

export default ContactPage;
