import React from 'react';
import CaseGalleryItem from '../../ui/case-gallery-item/case-gallery-item';
import Wrapper from '../../layout/wrapper/wrapper';
import { StyledGallery } from './styled';
import BackgroundCircle from '../../../elements/background';

const CaseGallery = ({ content, showBackground, isException }) => {
  return (
    <Wrapper>
      <StyledGallery isException={isException}>
        {content &&
          content.length &&
          content.map((item, index) => (
            <CaseGalleryItem
              key={index}
              src={item.src}
              title={item.title}
              description={item.description}
            />
          ))}
        {showBackground ? (
          <>
            <BackgroundCircle
              $top={{ mobile: 'auto', desktop: '180px' }}
              $bottom={{ mobile: 'auto', desktop: 'auto' }}
              $left={{ mobile: 'auto', desktop: 'auto' }}
              $right={{ mobile: 'auto', desktop: '-171px' }}
              $width={{ mobile: '0', desktop: '284px' }}
              $height={{ mobile: '0', desktop: '284px' }}
              $bgColor={(props) => props.theme.bgPinkColor}
              $blur="80px"
            />
            <BackgroundCircle
              $top={{ mobile: 'auto', desktop: '347px' }}
              $bottom={{ mobile: 'auto', desktop: 'auto' }}
              $left={{ mobile: 'auto', desktop: 'auto' }}
              $right={{ mobile: 'auto', desktop: '-3px' }}
              $width={{ mobile: '0', desktop: '274px' }}
              $height={{ mobile: '0', desktop: '274px' }}
              $bgColor={(props) => props.theme.bgBlueColor}
              $blur="80px"
            />
          </>
        ) : null}
      </StyledGallery>
    </Wrapper>
  );
};

export default CaseGallery;
