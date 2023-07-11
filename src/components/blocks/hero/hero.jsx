import React from 'react';
import { StyledHero, Circles, Circle, Text } from './styled';
import { Logo } from '../../ui/logo/logo';
import { LogoSize } from '../../ui/logo/styled';

const Hero = () => {
  return (
    <StyledHero>
      <Logo size={LogoSize.STANDARD}></Logo>
      <Circles>
        <Circle
          size={'166px'}
          $left={'97px'}
          $bottom={'108px'}
          from={'TOP_RIGHT'}
        >
          Development
        </Circle>
        <Circle size={'93px'} $left={'32px'} $bottom={'92px'} from={'TOP_LEFT'}>
          Design
        </Circle>
        <Circle
          size={'118px'}
          $left={'83px'}
          $bottom={'16px'}
          from={'BOTTOM_LEFT'}
        >
          Promotion
        </Circle>
      </Circles>
      <Text>Your full cycle web3 agency</Text>
    </StyledHero>
  );
};

export default Hero;
