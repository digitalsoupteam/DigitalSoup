import React from 'react';
import { StyledNav, NavList, NavItem, Link } from './styled';

const Navigation = () => {
  return (
    <StyledNav>
      <NavList>
        <NavItem>
          <Link href={'#about'}>About</Link>
        </NavItem>
        <NavItem>
          <Link href={'#cases'}>Cases</Link>
        </NavItem>
        <NavItem>
          <Link href={'#contacts'}>Contacts</Link>
        </NavItem>
      </NavList>
    </StyledNav>
  );
};

export default Navigation;
