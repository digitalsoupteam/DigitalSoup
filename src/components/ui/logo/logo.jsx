import React from 'react';
import { ReactComponent as LogoImage } from '../../../assets/logo.svg';
import { StyledLogo, StyledHeaderLogo } from './styled';

const Logo = () => {
  return (
    <StyledLogo>
      <LogoImage width={'100%'} height={'100%'} />
    </StyledLogo>
  );
};

const HeaderLogo = ({ children }) => {
  return <StyledHeaderLogo>{children}</StyledHeaderLogo>;
};

export { Logo, HeaderLogo };
