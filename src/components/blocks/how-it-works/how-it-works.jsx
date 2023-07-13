import React from 'react';
import Wrapper from '../../layout/wrapper/wrapper';
import { Title, TitleSize } from '../../ui/title/title';
import Text from '../../ui/text/text';
import { Circle } from '../../ui/circle/circle';
import {
  StyledHowItWorks,
  Intro,
  IntroTitle,
  IntroText,
  Circles,
  Steps,
  StepsList,
  StepsItem,
  Count,
  StepsText,
  Description,
  DescriptionText,
} from './styled';
import Button from '../../ui/button/button';
import BackgroundCircle from '../../../elements/background';

const HowItWorks = () => {
  return (
    <Wrapper>
      <StyledHowItWorks>
        <Intro>
          <IntroText>One of our super abilities</IntroText>
          <IntroTitle size={TitleSize.BIG}>
            Personal team for your project
          </IntroTitle>
          <Circles>
            <Circle
              $rotating
              $after
              size={{ mobile: '115px', desktop: '170px' }}
              $top={{ mobile: '39px', desktop: 'auto' }}
              $bottom={{ mobile: 'auto', desktop: '133px' }}
              $left={{ mobile: '5px', desktop: '33px' }}
              $right={{ mobile: 'auto', desktop: 'auto' }}
            >
              SMM
            </Circle>
            <Circle
              $rotating
              $after
              size={{ mobile: '162px', desktop: '240px' }}
              $top={{ mobile: '89px', desktop: 'auto' }}
              $bottom={{ mobile: 'auto', desktop: '133px' }}
              $left={{ mobile: '88px', desktop: '0' }}
              $right={{ mobile: 'auto', desktop: 'auto' }}
            >
              Our strategy
              <br />
              amd managment
            </Circle>
            <Circle
              $rotating
              $after
              size={{ mobile: '115px', desktop: '170px' }}
              $top={{ mobile: 'auto', desktop: 'auto' }}
              $bottom={{ mobile: '39px', desktop: '133px' }}
              $left={{ mobile: 'auto', desktop: '33px' }}
              $right={{ mobile: '5px', desktop: 'auto' }}
            >
              Developers
            </Circle>
            <BackgroundCircle
              $top={{ mobile: '39px', desktop: 'auto' }}
              // $top={{ mobile: '200px', desktop: 'auto' }}
              $bottom={{ mobile: 'auto', desktop: '73px' }}
              $left={{ mobile: '-7px', desktop: 'auto' }}
              $right={{ mobile: 'auto', desktop: '407px' }}
              $width={{ mobile: '153px', desktop: '227px' }}
              $height={{ mobile: '153px', desktop: '227px' }}
              $bgColor={(props) => props.theme.bgPurpleColor}
              $blur="77px"
            />
            <BackgroundCircle
              $top={{ mobile: '70px', desktop: 'auto' }}
              // $top={{ mobile: '120px', desktop: 'auto' }}
              $bottom={{ mobile: 'auto', desktop: '73px' }}
              $left={{ mobile: '76px', desktop: 'auto' }}
              $right={{ mobile: 'auto', desktop: '407px' }}
              $width={{ mobile: '214px', desktop: '227px' }}
              $height={{ mobile: '214px', desktop: '227px' }}
              $bgColor={(props) => props.theme.bgPinkColor}
              $blur="77px"
            />
            <BackgroundCircle
              $top={{ mobile: '191px', desktop: 'auto' }}
              // $top={{ mobile: '195px', desktop: 'auto' }}
              $bottom={{ mobile: 'auto', desktop: '73px' }}
              $left={{ mobile: '212px', desktop: 'auto' }}
              $right={{ mobile: 'auto', desktop: '407px' }}
              $width={{ mobile: '139px', desktop: '227px' }}
              $height={{ mobile: '139px', desktop: '227px' }}
              $bgColor={(props) => props.theme.bgBlueColor}
              $blur="77px"
            />
          </Circles>
        </Intro>
        <Steps>
          <Title size={TitleSize.MEDIUM}>How it works?</Title>
          <StepsList>
            <StepsItem>
              <Count>1</Count>
              <StepsText>
                Draw up
                <br />a project plan
              </StepsText>
            </StepsItem>
            <StepsItem>
              <Count>2</Count>
              <StepsText>
                Compiling a list
                <br /> of required specialists
              </StepsText>
            </StepsItem>
            <StepsItem>
              <Count>3</Count>
              <StepsText>
                Conduct an HR campaign,
                <br /> assemble a team
              </StepsText>
            </StepsItem>
            <StepsItem>
              <Count>4</Count>
              <StepsText>
                Start implementing
                <br />
                the project
              </StepsText>
            </StepsItem>
          </StepsList>
        </Steps>
        <Description>
          <IntroText>
            We fully manage the team that we assemble for the project,
            implementing all tasks to the fullest.
          </IntroText>
          <DescriptionText>
            <Text>
              One of our super abilities is to create teams for the project.
              This service is needed when the customer's project is particularly
              large and requires full immersion and work on the project 24/7.
            </Text>
            <Text>
              For such tasks, we form independent teams of developers and smm
              specialists and manage them for maximum efficiency of working with
              your project.
            </Text>
          </DescriptionText>
          <Button simple>Contact us</Button>
        </Description>
      </StyledHowItWorks>
    </Wrapper>
  );
};

export default HowItWorks;
