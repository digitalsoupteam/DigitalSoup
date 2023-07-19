import styled from 'styled-components';

const StyledCaseEnding = styled.div`
  text-align: center;
  padding: 80px 20px 40px;

  @media screen and (min-width: ${(props) => props.theme.contentWidthDesktop}) {
    padding: 105px 210px 130px;
  }
`;

export { StyledCaseEnding };
