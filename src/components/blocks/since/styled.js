import styled from 'styled-components';
import arrowOne from '../../../assets/arrow--one.svg';
import P from '../../../elements/p';

const StyledSince = styled.div`
  position: relative;
  padding: 62px 28px 40px;

  @media screen and (min-width: ${(props) => props.theme.contentWidthDesktop}) {
    padding: 55px 180px 117px;
  }
`;

const SinceTitle = styled(P)`
  display: flex;
  flex-direction: column;
  gap: 66px;
  justify-content: center;
  align-items: center;
  font-size: 37px;
  line-height: ${(props) => props.theme.lineHeightDefault};
  background-image: url(${arrowOne});
  background-repeat: no-repeat;
  background-position: center;
  margin-bottom: 48px;

  @media screen and (min-width: ${(props) => props.theme.contentWidthDesktop}) {
    font-size: 50px;
    padding-top: 30px;
    flex-direction: row;
    justify-content: space-between;
    background-position: left 266px bottom 12px;
    background-size: 288px;
    margin-bottom: 38px;
  }
`;

const TextContainer = styled.div`
  text-align: center;
  @media screen and (min-width: ${(props) => props.theme.contentWidthDesktop}) {
    max-width: 370px;
    margin: 0 auto;
  }
`;

export { StyledSince, SinceTitle, TextContainer };
