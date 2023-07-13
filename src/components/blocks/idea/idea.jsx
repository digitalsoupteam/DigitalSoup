import React from 'react';
import Wrapper from '../../layout/wrapper/wrapper';
import { StyledIdea, IdeaContainer, Text } from './styled';
import { Title, TitleSize } from '../../ui/title/title';
import Button from '../../ui/button/button';
import BackgroundCircle from '../../../elements/background';

const Idea = () => {
  return (
    <Wrapper>
      <StyledIdea>
        <Title size={TitleSize.BIG}>If you have an idea</Title>
        <IdeaContainer>
          <Text>We will be able to refine it to a profitable project</Text>
          <Button simple>contact us</Button>
        </IdeaContainer>
        <BackgroundCircle
          // $top={{ mobile: '22px', desktop: '0' }}
          $top={{ mobile: '190px', desktop: '0' }}
          $bottom={{ mobile: '0', desktop: '0' }}
          $left={{ mobile: '0', desktop: '0' }}
          $right={{ mobile: '0', desktop: '0' }}
          $width={{ mobile: '147px', desktop: '197px' }}
          $height={{ mobile: '147px', desktop: '197px' }}
          $bgColor={(props) => props.theme.bgBlueColor}
          $blur="86px"
        />
      </StyledIdea>
    </Wrapper>
  );
};

export default Idea;
