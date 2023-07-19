import React from 'react';
import Wrapper from '../../layout/wrapper/wrapper';
import { StyledSince, SinceTitle, TextContainer } from './styled';
import BackgroundCircle from '../../../elements/background';
import TextSpacing from '../../ui/text-spacing/text-spacing';

const Since = () => {
  return (
    <Wrapper>
      <StyledSince>
        <SinceTitle as={'h2'}>
          <span>Since 2017</span>
          <span>until now</span>
        </SinceTitle>
        <TextContainer>
          <TextSpacing>
            Our team consists of 8 professionals who are fanatically in love
            with the world of web3 and crypto
          </TextSpacing>
        </TextContainer>
        <BackgroundCircle
          $top={{ mobile: '85px', desktop: '55px' }}
          $bottom={{ mobile: 'auto', desktop: 'auto' }}
          $left={{ mobile: '0', desktop: '0' }}
          $right={{ mobile: '0', desktop: '0' }}
          $width={{ mobile: '182px', desktop: '247px' }}
          $height={{ mobile: '182px', desktop: '247px' }}
          $bgColor={(props) => props.theme.bgPinkColor}
          $blur="80px"
        />
      </StyledSince>
    </Wrapper>
  );
};

export default Since;
