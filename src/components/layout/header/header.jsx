import React from 'react';
import { StyledHeader, HeaderCBButton } from './styled';
import Navigation from '../../ui/navigation/navigation';
import { HeaderLogo } from '../../ui/logo/logo';

const Header = () => {
  return (
    <StyledHeader>
      <HeaderLogo>Digital Soup</HeaderLogo>
      <Navigation />
      <HeaderCBButton link={'#contacts'}>Contact us</HeaderCBButton>
    </StyledHeader>
  );
};

export default Header;
