import React from 'react';
import Wrapper from '../../layout/wrapper/wrapper';
import { Title, TitleSize } from '../../ui/title/title';
import Text from '../../ui/text/text';
import Circle from '../../ui/circle/circle';
import Button from '../../ui/button/button';
import BackgroundCircle from '../../../elements/background';
import {
  StyledHowItWorks,
  Intro,
  IntroTitle,
  IntroText,
  Circles,
  CirclesText,
  Arc,
  Steps,
  StepsList,
  StepsItem,
  Count,
  StepsText,
  Description,
  DescriptionIntro,
  DescriptionText,
} from './styled';

const HowItWorks = () => {
  return (
    <Wrapper>
      <StyledHowItWorks>
        <Intro>
          <IntroText>Cover all needs</IntroText>
          <IntroTitle size={TitleSize.BIG} as={'h2'}>
            Full cycle of development
            <br />
            of any web3 solutions
          </IntroTitle>
          <Circles>
            <CirclesText>
              your
              <br />
              project
            </CirclesText>
            <Arc $top />
            <Arc $bottom />
            <Circle
              $rotating
              $backgroundPosition="right center"
              $after
              size={{ mobile: '115px', desktop: '170px' }}
              $top={{ mobile: '39px', desktop: '116px' }}
              $bottom={{ mobile: 'auto', desktop: 'auto' }}
              $left={{ mobile: '5px', desktop: '0' }}
              $right={{ mobile: 'auto', desktop: 'auto' }}
            >
              Smart-contracts
            </Circle>
            <Circle
              $rotating
              $backgroundPosition="top center"
              $delay={'1s'}
              $after
              size={{ mobile: '162px', desktop: '240px' }}
              $top={{ mobile: '89px', desktop: '81px' }}
              $bottom={{ mobile: 'auto', desktop: 'auto' }}
              $left={{ mobile: '88px', desktop: '159px' }}
              $right={{ mobile: 'auto', desktop: 'auto' }}
            >
              Backend
            </Circle>
            <Circle
              $rotating
              $after
              size={{ mobile: '115px', desktop: '170px' }}
              $top={{ mobile: '190px', desktop: '116px' }}
              $bottom={{ mobile: 'auto', desktop: 'auto' }}
              $left={{ mobile: 'auto', desktop: '388px' }}
              $right={{ mobile: '5px', desktop: 'auto' }}
            >
              Frontend
            </Circle>
            <BackgroundCircle
              $top={{ mobile: '39px', desktop: '78px' }}
              $bottom={{ mobile: 'auto', desktop: 'auto' }}
              $left={{ mobile: '-7px', desktop: 'auto' }}
              $right={{ mobile: 'auto', desktop: '317px' }}
              $width={{ mobile: '153px', desktop: '227px' }}
              $height={{ mobile: '153px', desktop: '227px' }}
              $bgColor={(props) => props.theme.bgPurpleColor}
              $blur="115px"
            />
            <BackgroundCircle
              $top={{ mobile: '70px', desktop: '55px' }}
              $bottom={{ mobile: 'auto', desktop: 'auto' }}
              $left={{ mobile: '76px', desktop: 'auto' }}
              $right={{ mobile: 'auto', desktop: '114px' }}
              $width={{ mobile: '214px', desktop: '316px' }}
              $height={{ mobile: '214px', desktop: '316px' }}
              $bgColor={(props) => props.theme.bgPinkColor}
              $blur="115px"
            />
            <BackgroundCircle
              $top={{ mobile: '191px', desktop: '115px' }}
              $bottom={{ mobile: 'auto', desktop: 'auto' }}
              $left={{ mobile: '212px', desktop: 'auto' }}
              $right={{ mobile: 'auto', desktop: '-20px' }}
              $width={{ mobile: '139px', desktop: '206px' }}
              $height={{ mobile: '139px', desktop: '206px' }}
              $bgColor={(props) => props.theme.bgBlueColor}
              $blur="115px"
            />
          </Circles>
        </Intro>
        <Steps>
          <Title size={TitleSize.MEDIUM} as={'h2'}>
            How do we work?
          </Title>
          <StepsList>
            <StepsItem>
              <Count>1</Count>
              <StepsText>
                Calling and <br />
                gathering information
              </StepsText>
            </StepsItem>
            <StepsItem>
              <Count>2</Count>
              <StepsText>*Draw up a technical development plan</StepsText>
            </StepsItem>
            <StepsItem>
              <Count>3</Count>
              <StepsText>
                Agree and develop <br />
                the product
              </StepsText>
            </StepsItem>
            <StepsItem>
              <Count>4</Count>
              <StepsText>
                Conduct testing <br />
                and auditing
              </StepsText>
            </StepsItem>
          </StepsList>
        </Steps>
        <Description>
          <DescriptionIntro>
            Once the audits are completed, we also create a web interface or
            application for easy interaction with your product.
          </DescriptionIntro>
          <DescriptionText>
            <Text>
              *Formation of the technical plan is the most important stage of
              development, it provides the complete structure of the future
              product, all the interactions between contracts and other parts of
              the application, and makes it possible to calculate the exact cost
              and time of development. Future scalability is also envisioned at
              the technical plan stage.
            </Text>
          </DescriptionText>
          <Button simple={true} link="https://t.me/dashewski" target="_blank">
            Contact us
          </Button>
        </Description>
      </StyledHowItWorks>
    </Wrapper>
  );
};

export default HowItWorks;
