import React from 'react';
import Wrapper from '../../layout/wrapper/wrapper';
import { Title, TitleSize } from '../../ui/title/title';
import { StyledCaseEnding } from './styled';

const CaseEnding = ({ text }) => {
  return (
    <Wrapper>
      <StyledCaseEnding>
        <Title size={TitleSize.MEDIUM}>{text}</Title>
      </StyledCaseEnding>
    </Wrapper>
  );
};

export default CaseEnding;
