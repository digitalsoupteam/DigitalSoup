import styled from 'styled-components';
import P from '../../../elements/p';
import { Title } from '../../ui/title/title';

const StyledCaseText = styled.div`
  padding: 82px 0;

  @media screen and (min-width: ${(props) => props.theme.contentWidthDesktop}) {
    padding: 105px 150px;
  }
`;

const StyledTitle = styled(Title)`
  font-weight: 400;
  margin-bottom: 18px;

  @media screen and (min-width: ${(props) => props.theme.contentWidthDesktop}) {
    margin-bottom: 47px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: ${(props) => props.theme.contentWidthDesktop}) {
    gap: 21px;
  }
`;

const Paragraph = styled(P)`
  color: ${(props) => props.theme.basicWhite};
  font-size: 13px;
  font-weight: 500;

  @media screen and (min-width: ${(props) => props.theme.contentWidthDesktop}) {
    font-size: 18px;
  }
`;

const Image = styled.img`
  width: calc(100% - 15px);
  height: auto;
  margin-top: 70px;

  @media screen and (min-width: ${(props) => props.theme.contentWidthDesktop}) {
    margin-top: 95px;
  }
`;

export { StyledCaseText, StyledTitle, TextContainer, Paragraph, Image };
