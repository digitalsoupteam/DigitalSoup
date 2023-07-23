import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Wrapper from '../../layout/wrapper/wrapper';
import {
  StyledAboutUs,
  Description,
  DescriptionText,
  Bio,
  BioLogo,
  BioTitle,
  BioText,
  BioPhoto,
} from './styled';
import { Title, TitleSize } from '../../ui/title/title';
import { LogoSize } from '../../ui/logo/styled';
import Button from '../../ui/button/button';
import Photo from '../../../assets/nik-photo.png';
import BackgroundCircle from '../../../elements/background';

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [refPhoto, inView] = useInView();

  useEffect(() => {
    if (inView && !hasAnimated) {
      setIsVisible(true);
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);

  return (
    <Wrapper id="about">
      <StyledAboutUs>
        <Description>
          <Title size={TitleSize.MEDIUM} as={'h2'}>
            A few words about us
          </Title>
          <DescriptionText>
            The idea for this project emerged based on our already established
            marketing agency, founded in 2017. After working on the promotion of
            various crypto projects, we assembled a team of developers and
            decided to form a comprehensive web3 work cycle team.
          </DescriptionText>
          <DescriptionText>
            In addition to project development and promotion, we demonstrate
            exceptional proficiency in business logic.
          </DescriptionText>
        </Description>
        <Bio>
          <BioLogo size={LogoSize.SMALL} />
          <BioPhoto
            src={Photo}
            width="202"
            height="202"
            alt="CEO Nik Daszewski"
            ref={refPhoto}
            className={`animated-element ${isVisible ? 'visible' : ''}`}
          ></BioPhoto>
          <BioTitle as={'h3'}>CEO Nik Daszewski</BioTitle>
          <BioText>
            In SMM since 2015
            <br />
            In Development since 2021
          </BioText>
          <Button simple={true} link="https://t.me/dashewski" target="_blank">
            Let's talk
          </Button>
        </Bio>
        <BackgroundCircle
          $top={{ mobile: '114px', desktop: '-342px' }}
          $bottom={{ mobile: 'auto', desktop: 'auto' }}
          $left={{ mobile: 'auto', desktop: '25px' }}
          $right={{ mobile: '-8px', desktop: 'auto' }}
          $width={{ mobile: '218px', desktop: '290px' }}
          $height={{ mobile: '218px', desktop: '290px' }}
          $bgColor={(props) => props.theme.bgPinkColor}
          $blur="86px"
        />
        <BackgroundCircle
          $top={{ mobile: '244px', desktop: '-280px' }}
          $bottom={{ mobile: 'auto', desktop: 'auto' }}
          $left={{ mobile: 'auto', desktop: '198px' }}
          $right={{ mobile: '-7px', desktop: 'auto' }}
          $width={{ mobile: '162px', desktop: '216px' }}
          $height={{ mobile: '162px', desktop: '216px' }}
          $bgColor={(props) => props.theme.bgBlueColor}
          $blur="86px"
        />
      </StyledAboutUs>
    </Wrapper>
  );
};

export default AboutUs;
