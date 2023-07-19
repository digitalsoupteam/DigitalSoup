import styled from 'styled-components';
import Ul from '../../../elements/ul';

const StyledCases = styled.div`
  position: relative;
  padding: 60px 0 56px;
  display: flex;
  flex-direction: column;
  gap: 59px;
  @media screen and (min-width: ${(props) => props.theme.contentWidthDesktop}) {
    padding: 132px 0 139px;
    gap: 93px;
  }
`;

const CasesList = styled(Ul)`
  @media screen and (min-width: ${(props) => props.theme.contentWidthDesktop}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 100px 86px;
  }
`;

const CasesItem = styled.li`
  &:nth-child(2n - 1) {
    position: relative;
    top: 50px;
  }
`;

export { StyledCases, CasesList, CasesItem };
