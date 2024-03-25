import React from 'react';
import Wrapper from '../../layout/wrapper/wrapper';
import { StyledHero, Circles, Text } from './styled';
import Circle from '../../ui/circle/circle';
import { Logo } from '../../ui/logo/logo';
import { LogoSize } from '../../ui/logo/styled';
import BackgroundCircle from '../../../elements/background';

const Hero = () => {
  return (
    <Wrapper>
      <StyledHero>
        <Logo size={LogoSize.STANDARD}></Logo>
        <Circles>
          <Circle
            $scaling
            $duration={'3s'}
            size={{ mobile: '166px', desktop: '240px' }}
            $top={{ mobile: 'auto', desktop: 'auto' }}
            $bottom={{ mobile: '108px', desktop: '140px' }}
            $left={{ mobile: '97px', desktop: '116px' }}
            $right={{ mobile: 'auto', desktop: 'auto' }}
            from={'TOP_RIGHT'}
          >
            Development
          </Circle>
          <Circle
            $scaling
            $delay={'1s'}
            $duration={'2s'}
            size={{ mobile: '93px', desktop: '134px' }}
            $top={{ mobile: 'auto', desktop: 'auto' }}
            $bottom={{ mobile: '92px', desktop: '110px' }}
            $left={{ mobile: '32px', desktop: '33px' }}
            $right={{ mobile: 'auto', desktop: 'auto' }}
            from={'TOP_LEFT'}
          >
            Design
          </Circle>
          <Circle
            $scaling
            $duration={'2s'}
            size={{ mobile: '118px', desktop: '170px' }}
            $top={{ mobile: 'auto', desktop: 'auto' }}
            $bottom={{ mobile: '16px', desktop: '10px' }}
            $left={{ mobile: '83px', desktop: '105px' }}
            $right={{ mobile: 'auto', desktop: 'auto' }}
            from={'BOTTOM_LEFT'}
          >
            Auditing
          </Circle>
        </Circles>
        <Text>Your full cycle web3 agency</Text>
        <BackgroundCircle
          $top={{ mobile: '202px', desktop: '-15px' }}
          $bottom={{ mobile: 'auto', desktop: '0' }}
          $left={{ mobile: 'auto', desktop: 'auto' }}
          $right={{ mobile: '18px', desktop: '274px' }}
          $width={{ mobile: '242px', desktop: '348px' }}
          $height={{ mobile: '242px', desktop: '348px' }}
          $bgColor={(props) => props.theme.bgPinkColor}
          $blur="80px"
        />
        <BackgroundCircle
          $top={{ mobile: '286px', desktop: 'auto' }}
          $bottom={{ mobile: 'auto', desktop: '144px' }}
          $left={{ mobile: '18px', desktop: '428px' }}
          $right={{ mobile: 'auto', desktop: 'auto' }}
          $width={{ mobile: '158px', desktop: '227px' }}
          $height={{ mobile: '158px', desktop: '227px' }}
          $bgColor={(props) => props.theme.bgPurpleColor}
          $blur="80px"
        />
        <BackgroundCircle
          $top={{ mobile: 'auto', desktop: 'auto' }}
          $bottom={{ mobile: '136px', desktop: '73px' }}
          // $left={{ mobile: '21%', desktop: '0' }}
          $left={{ mobile: '83px', desktop: 'auto' }}
          $right={{ mobile: 'auto', desktop: '407px' }}
          $width={{ mobile: '158px', desktop: '227px' }}
          $height={{ mobile: '158px', desktop: '227px' }}
          $bgColor={(props) => props.theme.bgBlueColor}
          $blur="86px"
        />
      </StyledHero>
    </Wrapper>
  );
};

export default Hero;
