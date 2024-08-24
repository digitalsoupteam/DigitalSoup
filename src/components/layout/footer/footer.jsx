import React from 'react';
import Wrapper from '../wrapper/wrapper';
import { StyledFooter, InnerContainer, Copyright } from './styled';

const Footer = () => {
  return (
    <StyledFooter>
      <Wrapper>
        <InnerContainer>
          <Copyright>2024 - Digital Soup Agency</Copyright>
        </InnerContainer>
      </Wrapper>
    </StyledFooter>
  );
};

export default Footer;
