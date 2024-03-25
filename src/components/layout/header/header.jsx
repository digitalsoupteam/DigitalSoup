import React from 'react';
import Wrapper from '../wrapper/wrapper';
import { StyledHeader, HeaderCBButton } from './styled';
import Navigation from '../../ui/navigation/navigation';
import { HeaderLogo } from '../../ui/logo/logo';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <header>
      <Wrapper>
        <StyledHeader isHome={isHome}>
          <HeaderLogo isHome={isHome}>Digital Soup</HeaderLogo>
          <Navigation />
          <HeaderCBButton link={'https://t.me/dashewski'} target="_blank">
            Contact us
          </HeaderCBButton>
        </StyledHeader>
      </Wrapper>
    </header>
  );
};

export default Header;
