import Helmet from 'react-helmet';
import React from 'react';
import messages from './messages';

import { FormattedMessage } from 'react-intl';

const AboutPage = () => (
  <div>
    <FormattedMessage {...messages.title}>
      {message => <Helmet title={message} />}
    </FormattedMessage>
    <h1>
      <FormattedMessage {...messages.title} />
    </h1>
    <p><FormattedMessage {...messages.intro} /></p>

    <section>
      <h2><FormattedMessage {...messages.targetHeading} /></h2>
      <p><FormattedMessage {...messages.target} /></p>
    </section>
    <section>
      <h2><FormattedMessage {...messages.additionsHeading} /></h2>
      <p><FormattedMessage {...messages.additions} /></p>
    </section>
  </div>
);

export default AboutPage;
