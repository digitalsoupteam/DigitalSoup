import React from 'react';
import Wrapper from '../wrapper/wrapper';
import { StyledHeader, HeaderCBButton } from './styled';
import Navigation from '../../ui/navigation/navigation';
import { HeaderLogo } from '../../ui/logo/logo';

const Header = () => {
  return (
    <header>
      <Wrapper>
        <StyledHeader>
          <HeaderLogo>Digital Soup</HeaderLogo>
          <Navigation />
          <HeaderCBButton link={'#contacts'}>Contact us</HeaderCBButton>
        </StyledHeader>
      </Wrapper>
    </header>
  );
};

export default Header;
