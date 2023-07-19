import React from 'react';
import { StyledNav, NavList, NavItem } from './styled';
import StyledLink from '../../ui/link/link';

const Navigation = () => {
  return (
    <StyledNav>
      <NavList>
        <NavItem>
          <StyledLink to="about">About</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="cases">Cases</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="contacts">Contacts</StyledLink>
        </NavItem>
      </NavList>
    </StyledNav>
  );
};

export default Navigation;
