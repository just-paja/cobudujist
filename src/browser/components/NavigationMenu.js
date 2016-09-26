import React from 'react';

import { defineMessages, FormattedMessage } from 'react-intl';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, NavItem } from 'react-bootstrap';

export const messages = defineMessages({
  home: {
    id: 'app.menu.home',
    defaultMessage: 'Domů',
  },
  about: {
    id: 'app.menu.about',
    defaultMessage: 'O projektu',
  },
  contact: {
    id: 'app.menu.contact',
    defaultMessage: 'Kontakt',
  },
});

const NavigationMenu = props => (
  <Nav {...props}>
    <LinkContainer onlyActiveOnIndex to="/" >
      <NavItem>
        <FormattedMessage {...messages.home} />
      </NavItem>
    </LinkContainer>
    <LinkContainer to="/o-projektu">
      <NavItem>
        <FormattedMessage {...messages.about} />
      </NavItem>
    </LinkContainer>
    <LinkContainer to="/kontakt">
      <NavItem>
        <FormattedMessage {...messages.contact} />
      </NavItem>
    </LinkContainer>
  </Nav>
);

export default NavigationMenu;
