import React from 'react';
import Wrapper from '../wrapper/wrapper';
import { StyledFooter, InnerContainer, Copyright } from './styled';
import BackgroundCircle from '../../../elements/background';

const Footer = () => {
  return (
    <StyledFooter>
      <Wrapper>
        <InnerContainer>
          <Copyright>2021 - Digital Soup Agency</Copyright>
          <BackgroundCircle
            $top={{ mobile: '-69px', desktop: '-119px' }}
            $bottom={{ mobile: 'auto', desktop: '0' }}
            $left={{ mobile: '32px', desktop: '170px' }}
            $right={{ mobile: 'auto', desktop: 'auto' }}
            $width={{ mobile: '259px', desktop: '774px' }}
            $height={{ mobile: '122px', desktop: '365px' }}
            $bgColor={(props) => props.theme.bgPinkColor}
            $blur="115px"
          />
        </InnerContainer>
      </Wrapper>
    </StyledFooter>
  );
};

export default Footer;
