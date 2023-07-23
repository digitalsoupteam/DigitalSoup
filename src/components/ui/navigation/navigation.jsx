import React from 'react';
import { StyledNav, NavList, NavItem } from './styled';
import StyledLink from '../../ui/link/link';

const Navigation = () => {
  const onAboutClick = () => {
    setTimeout(() => {
      document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const onCasesClick = () => {
    setTimeout(() => {
      document.querySelector('#cases').scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const onContactsClick = () => {
    setTimeout(() => {
      document
        .querySelector('#contacts')
        .scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <StyledNav>
      <NavList>
        <NavItem>
          <StyledLink to="about" onClick={onAboutClick}>
            About
          </StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="cases" onClick={onCasesClick}>
            Cases
          </StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="contacts" onClick={onContactsClick}>
            Contacts
          </StyledLink>
        </NavItem>
      </NavList>
    </StyledNav>
  );
};

export default Navigation;
