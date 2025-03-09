import React from 'react';
import {GalleryItem, StyledImage, ItemTitle, ItemText} from './styled';

const CaseGalleryItem = ({src, title, description}) => {
  return (
    <GalleryItem>
      <a href={src} target={'_blank'} rel={'noreferrer'}>
        <StyledImage src={src} width="283px" heihgt="247px" alt={title}/>
      </a>
      <ItemTitle as={'h3'}>{title}</ItemTitle>
      <ItemText>{description}</ItemText>
    </GalleryItem>
  );
};

export default CaseGalleryItem;
