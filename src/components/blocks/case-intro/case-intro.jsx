import React from 'react';
import { Title, TitleSize } from '../../ui/title/title';
import TagList from '../../ui/tags-list/tags-list';
import {
  StyledCaseIntro,
  StyledWrapper,
  IntroImage,
  IntroBar,
  IntroInner,
} from './styled';
import BackgroundCircle from '../../../elements/background';
import Wrapper from '../../layout/wrapper/wrapper';

const CaseIntro = ({ caseInfo }) => {
  return (
    <StyledCaseIntro>
      <StyledWrapper>
        <IntroImage
          src={caseInfo.intro_image}
          width="320px"
          height="225px"
          alt={caseInfo.title}
        />
      </StyledWrapper>
      <IntroBar>
        <Wrapper>
          <IntroInner>
            <Title size={TitleSize.BIG}>{caseInfo.title}</Title>
            <TagList tags={caseInfo.tags} />
            <BackgroundCircle
              $top={{ mobile: 'auto', desktop: '-121px' }}
              $bottom={{ mobile: 'auto', desktop: 'auto' }}
              $left={{ mobile: 'auto', desktop: '-177px' }}
              $right={{ mobile: 'auto', desktop: 'auto' }}
              $width={{ mobile: '0', desktop: '325px' }}
              $height={{ mobile: '0', desktop: '325px' }}
              $bgColor={(props) => props.theme.bgPinkColor}
              $blur="80px"
            />
          </IntroInner>
        </Wrapper>
      </IntroBar>
    </StyledCaseIntro>
  );
};

export default CaseIntro;
