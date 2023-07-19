import React, { useState, useEffect } from 'react';
import Wrapper from '../../layout/wrapper/wrapper';
import CasePreview from '../../ui/case-preview/case-preview';
import { Title, TitleSize } from '../../ui/title/title';
import { StyledCases, CasesList, CasesItem } from './styled';
import BackgroundCircle from '../../../elements/background';
import Pagination from '../../ui/pagination/pagination';

const CASES_SETTINGS = {
  DESKTOP_COUNT: 4,
  OTHER_COUNT: 1,
};

const Cases = ({ cases }) => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1200);

  useEffect(() => {
    const handleResize = () => {
      const newIsDesktop = window.innerWidth >= 1200;

      if (newIsDesktop !== isDesktop) {
        setIsDesktop(newIsDesktop);
      }
      setIsDesktop(window.innerWidth >= 1200);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isDesktop]);

  const casesStep = isDesktop
    ? CASES_SETTINGS.DESKTOP_COUNT
    : CASES_SETTINGS.OTHER_COUNT;

  const [currentLength, setCurrentLength] = useState(casesStep);

  return (
    <Wrapper>
      <StyledCases>
        <Title size={TitleSize.BIG}>
          Something we have
          <br />
          already done
        </Title>
        <CasesList>
          {cases &&
            cases
              .slice(currentLength - casesStep, currentLength)
              .map((caseItem) => (
                <CasesItem key={caseItem.id}>
                  <CasePreview caseItem={caseItem} />
                </CasesItem>
              ))}
        </CasesList>
        <Pagination
          min={1}
          max={cases.length}
          currentCount={currentLength}
          onNextClick={() =>
            setCurrentLength(Math.min(currentLength + casesStep, cases.length))
          }
          onPrevClick={() =>
            setCurrentLength(Math.max(currentLength - casesStep, casesStep))
          }
        />
        <BackgroundCircle
          $top={{ mobile: '355px', desktop: '520px' }}
          $bottom={{ mobile: 'auto', desktop: 'auto' }}
          $left={{ mobile: '-153px', desktop: '-223px' }}
          $right={{ mobile: 'auto', desktop: 'auto' }}
          $width={{ mobile: '284px', desktop: '454px' }}
          $height={{ mobile: '284px', desktop: '454px' }}
          $bgColor={(props) => props.theme.bgPinkColor}
          $blur="115px"
        />
        <BackgroundCircle
          $top={{ mobile: 'auto', desktop: '820px' }}
          $bottom={{ mobile: '40px', desktop: 'auto' }}
          $left={{ mobile: 'auto', desktop: '10px' }}
          $right={{ mobile: '-15px', desktop: 'auto' }}
          $width={{ mobile: '184px', desktop: '294px' }}
          $height={{ mobile: '184px', desktop: '294px' }}
          $bgColor={(props) => props.theme.bgBlueColor}
          $blur="115px"
        />
        <BackgroundCircle
          $top={{ mobile: '202px', desktop: '681px' }}
          $bottom={{ mobile: 'auto', desktop: 'auto' }}
          $left={{ mobile: 'auto', desktop: 'auto' }}
          $right={{ mobile: '18px', desktop: '-195px' }}
          $width={{ mobile: '0', desktop: '454px' }}
          $height={{ mobile: '0', desktop: '454px' }}
          $bgColor={(props) => props.theme.bgPinkColor}
          $blur="115px"
        />
        <BackgroundCircle
          $top={{ mobile: '202px', desktop: '1072px' }}
          $bottom={{ mobile: 'auto', desktop: 'auto' }}
          $left={{ mobile: 'auto', desktop: 'auto' }}
          $right={{ mobile: '18px', desktop: '-136px' }}
          $width={{ mobile: '0', desktop: '294px' }}
          $height={{ mobile: '0', desktop: '294px' }}
          $bgColor={(props) => props.theme.bgBlueColor}
          $blur="115px"
        />
      </StyledCases>
    </Wrapper>
  );
};

export default Cases;
