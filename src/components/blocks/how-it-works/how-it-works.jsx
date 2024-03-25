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
          <IntroText>One of our super abilities</IntroText>
          <IntroTitle size={TitleSize.BIG} as={'h2'}>
            We can make & manage
            <br /> your personal team
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
              Designers
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
              Technical asignments
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
              Developers
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
            How it works?
          </Title>
          <StepsList>
            <StepsItem>
              <Count>1</Count>
              <StepsText>
                We create a<br />
                project plan
              </StepsText>
            </StepsItem>
            <StepsItem>
              <Count>2</Count>
              <StepsText>
                Compile a list of
                <br />
                the required specialists
              </StepsText>
            </StepsItem>
            <StepsItem>
              <Count>3</Count>
              <StepsText>
                Conduct an HR campaign
                <br />
                to assemble a team
              </StepsText>
            </StepsItem>
            <StepsItem>
              <Count>4</Count>
              <StepsText>
                Begin implementing
                <br />
                the project
              </StepsText>
            </StepsItem>
          </StepsList>
        </Steps>
        <Description>
          <DescriptionIntro>
            We fully manage the team that we assemble for the project,
            implementing all tasks to the fullest.
          </DescriptionIntro>
          <DescriptionText>
            <Text>
              One of our super abilities is to create teams for projects. This
              service is necessary when the customer's project is particularly
              large and requires full immersion and 24/7 dedication.
            </Text>
            <Text>
              For such tasks, we form independent teams of developers and smm
              specialists and manage them for maximum efficiency of working with
              your project.
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
