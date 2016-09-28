import Helmet from 'react-helmet';
import React from 'react';

import { FormattedMessage } from 'react-intl';
import { Well } from 'react-bootstrap';

import messages from './messages';

const AboutPage = () => (
  <div>
    <FormattedMessage {...messages.title}>
      {message => <Helmet title={message} />}
    </FormattedMessage>
    <h1>
      <FormattedMessage {...messages.title} />
    </h1>
    <p><FormattedMessage {...messages.intro} /></p>

    <Well>
      <h2><FormattedMessage {...messages.targetHeading} /></h2>
      <p><FormattedMessage {...messages.target} /></p>
    </Well>
    <Well>
      <h2><FormattedMessage {...messages.additionsHeading} /></h2>
      <p><FormattedMessage {...messages.additions} /></p>
    </Well>
  </div>
);

export default AboutPage;
