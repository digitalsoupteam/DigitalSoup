import styled from 'styled-components';
import P from '../../../elements/p';

const StyledHero = styled.div`
  position: relative;
  padding: 38px 17px 43px;
  display: flex;
  flex-direction: column;
  gap: 53px;
  align-items: center;

  @media screen and (min-width: ${(props) => props.theme.contentWidthDesktop}) {
    padding: 168px 54px 65px;
    justify-content: space-between;
    flex-direction: row;
  }
`;

const Circles = styled.div`
  position: relative;
  width: 300px;
  height: 301px;

  @media screen and (min-width: ${(props) => props.theme.contentWidthDesktop}) {
    width: 432px;
    height: 434px;
  }
`;

const Text = styled(P)`
  font-size: 16px;
  width: 115px;

  @media screen and (min-width: ${(props) => props.theme.contentWidthDesktop}) {
    font-size: 24px;
    width: 180px;
  }
`;

export { StyledHero, Circles, Text };
