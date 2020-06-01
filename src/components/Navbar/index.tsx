import React from 'react';
import {
  Navbar as BootstrapNavbar,
  Nav,
  NavItem,
  Container
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

interface INavItem {
  label: string;
  link: string;
}

interface INavbar {
  navItems: INavItem[]
}

export const Navbar = ({navItems}: INavbar) => (
  <BootstrapNavbar color="dark" dark expand="sm">
    <Container>
      <Nav className="mr-auto" navbar>
        {navItems.map(({label, link}: INavItem) => (
          <NavItem key={link}>
            <NavLink className="nav-link" to={link}>{label}</NavLink>
          </NavItem>
        ))}
      </Nav>
    </Container>
  </BootstrapNavbar>
);