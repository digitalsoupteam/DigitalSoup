import React from 'react';
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
  return (
    <Wrapper>
      <StyledAboutUs>
        <Description>
          <Title size={TitleSize.MEDIUM}>A few words about us</Title>
          <DescriptionText>
            Idea of this project appeared on the basis of our already existing
            marketing agency founded in 2017. After working on the promotion of
            several crypto projects, we gathered our team of developers and
            decided to make a team for a full cycle of work with web3.
          </DescriptionText>
          <DescriptionText>
            In addition to the development and promotion of the project, we are
            very good at business logic.
          </DescriptionText>
        </Description>
        <Bio>
          <BioLogo size={LogoSize.SMALL} />
          <BioPhoto src={Photo}></BioPhoto>
          <BioTitle>CEO Nik Daszewski</BioTitle>
          <BioText>
            In smm since 2015
            <br />
            In development since 2021
          </BioText>
          <Button simple>Let's talk</Button>
        </Bio>
        <BackgroundCircle
          $top={{ mobile: '114px', desktop: '-342px' }}
          // $top={{ mobile: '40px', desktop: '-342px' }}
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
          // $top={{ mobile: '170px', desktop: '-280px' }}
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
