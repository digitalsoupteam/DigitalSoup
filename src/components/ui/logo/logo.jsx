import React from 'react';
import { ReactComponent as LogoImage } from '../../../assets/logo.svg';
import { StyledLogo, StyledHeaderLogo } from './styled';

const Logo = ({ size, className }) => {
  return (
    <StyledLogo size={size} className={className}>
      <LogoImage width={'100%'} height={'100%'} />
    </StyledLogo>
  );
};

const HeaderLogo = ({ children }) => {
  return <StyledHeaderLogo>{children}</StyledHeaderLogo>;
};

export { Logo, HeaderLogo };
