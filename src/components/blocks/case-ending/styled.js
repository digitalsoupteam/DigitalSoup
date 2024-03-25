import styled from 'styled-components';

const StyledCaseEnding = styled.div`
  text-align: center;
  padding: 77px 0 65px;

  @media screen and (min-width: ${(props) => props.theme.contentWidthDesktop}) {
    padding: 207px 0 72px;
  }
`;

export { StyledCaseEnding };
