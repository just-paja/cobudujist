import React from 'react';

import { Link } from 'react-router';
import { Navbar } from 'react-bootstrap';

import NavigationMenu from './NavigationMenu';

import styles from './Header.css';

const Header = () => (
  <Navbar fixedTop>
    <Navbar.Header className={styles.brandHeader} expanded={false}>
      <Navbar.Brand className={styles.brand}>
        <Link to="/">Co budu jíst?</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <NavigationMenu />
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
