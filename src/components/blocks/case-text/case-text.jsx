import React from 'react';
import {
  StyledCaseText,
  StyledTitle,
  TextContainer,
  Paragraph,
  Image,
} from './styled';
import { TitleSize } from '../../ui/title/title';
import Wrapper from '../../layout/wrapper/wrapper';

const CaseText = ({ content }) => {
  return (
    <Wrapper>
      <StyledCaseText>
        <StyledTitle size={TitleSize.MEDIUM} as={'h2'}>
          {content.title}
        </StyledTitle>
        <TextContainer>
          {content.text &&
            content.text.length &&
            content.text.map((paragraph, index) => (
              <Paragraph key={index}>{paragraph}</Paragraph>
            ))}
        </TextContainer>
        {content.img ? (
          <Image src={content.img} width="300px" height="190px" alt="" />
        ) : null}
      </StyledCaseText>
    </Wrapper>
  );
};

export default CaseText;
