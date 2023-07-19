import React from 'react';
import Wrapper from '../../layout/wrapper/wrapper';
import TextSpacing from '../../ui/text-spacing/text-spacing';
import { StyledCaseEnding } from './styled';

const CaseEnding = ({ text }) => {
  return (
    <Wrapper>
      <StyledCaseEnding>
        <TextSpacing>{text}</TextSpacing>
      </StyledCaseEnding>
    </Wrapper>
  );
};

export default CaseEnding;
