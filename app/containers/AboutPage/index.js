import React from 'react';
import messages from './messages';

import { FormattedMessage } from 'react-intl';

const AboutPage = () => (
  <div>
    <h1>
      <FormattedMessage {...messages.heading} />
    </h1>
    <div>
      <h2><FormattedMessage {...messages.introHeading} /></h2>
      <p><FormattedMessage {...messages.intro} /></p>
      <h2><FormattedMessage {...messages.targetHeading} /></h2>
      <p><FormattedMessage {...messages.target} /></p>
      <h2><FormattedMessage {...messages.additionsHeading} /></h2>
      <p><FormattedMessage {...messages.additions} /></p>
    </div>
  </div>
);

export default AboutPage;
