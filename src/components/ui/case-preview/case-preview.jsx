import React from 'react';
import Button from '../../ui/button/button';
import TagList from '../tags-list/tags-list';
import {
  StyledCasePreview,
  StyledImage,
  TextContainer,
  CaseTitle,
  CaseText,
} from './styled';

const CasePreview = ({ caseItem }) => {
  return (
    <StyledCasePreview>
      <TextContainer>
        <StyledImage src={caseItem.prview_image} alt={caseItem.title} />
        <CaseTitle as="h3">{caseItem.title}</CaseTitle>
        <TagList tags={caseItem.tags} />
        <CaseText>{caseItem.short}</CaseText>
        <Button to={`/cases/${caseItem.id}`}>View case</Button>
      </TextContainer>
    </StyledCasePreview>
  );
};

export default CasePreview;
