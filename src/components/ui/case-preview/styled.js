import styled, { keyframes } from 'styled-components';
import { Title } from '../../ui/title/title';
import Text from '../../ui/text/text';

const caseCardAnimation = keyframes`
  from {
    transform: translateY(-10%);
    opacity: 0;
  } to {
    transform: translateY(0);
    opacity: 100;
  }
`;

const caseImageAnimation = keyframes`
from {
  opacity: 0;
  transform: translateY(10%);
} to {
  opacity: 100%;
  transform: translateY(0);
}
`;

const StyledCasePreview = styled.div`
  position: relative;
  box-sizing: border-box;
  padding: 155px 33px 69px;
  height: 405px;
  border: 1px solid ${(props) => props.theme.altColor};
  background: linear-gradient(
    173deg,
    #191717 0%,
    rgba(25, 23, 23, 0.35) 93.23%
  );
  animation-name: ${caseCardAnimation};
  animation-duration: 800ms;
  animation-timing-function: ease-in-out;

  @media screen and (min-width: ${(props) => props.theme.contentWidthDesktop}) {
    padding: 247px 53px 115px;
    height: 647px;
  }
`;

const StyledImage = styled.img`
  position: absolute;
  top: -31px;
  left: 0;
  right: 0;
  width: 263px;
  height: 160px;
  margin: 0 auto;
  opacity: 0;
  animation-name: ${caseImageAnimation};
  animation-delay: 800ms;
  animation-fill-mode: forwards;
  animation-duration: 800ms;
  animation-timing-function: ease-in-out;

  @media screen and (min-width: ${(props) => props.theme.contentWidthDesktop}) {
    top: -50px;
    width: 421px;
    height: 256px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 17px;
  padding-right: 10px;

  @media screen and (min-width: ${(props) => props.theme.contentWidthDesktop}) {
    padding-right: 17px;
  }
`;

const CaseTitle = styled(Title)`
  font-size: 16px;
  @media screen and (min-width: ${(props) => props.theme.contentWidthDesktop}) {
    font-size: 24px;
  }
`;

const CaseText = styled(Text)`
  font-size: 9px;
  @media screen and (min-width: ${(props) => props.theme.contentWidthDesktop}) {
    font-size: 15px;
  }
`;

export { StyledCasePreview, TextContainer, CaseTitle, CaseText, StyledImage };
