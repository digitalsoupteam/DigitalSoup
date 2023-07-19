import React from 'react';
import { ReactComponent as LogoImage } from '../../../assets/logo.svg';
import { StyledLogo, StyledHeaderLogo, StyledHeaderLink } from './styled';

const Logo = ({ size, className }) => {
  return (
    <StyledLogo size={size} className={className}>
      <LogoImage width={'100%'} height={'100%'} />
    </StyledLogo>
  );
};

const HeaderLogo = ({ children, isHome }) => {
  return (
    <StyledHeaderLink to="/" isHome={isHome}>
      <StyledHeaderLogo>{children}</StyledHeaderLogo>
    </StyledHeaderLink>
  );
};

export { Logo, HeaderLogo };
