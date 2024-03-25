import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: ${(props) => props.theme.backgroundColor};
`;

const InnerContainer = styled.div`
  position: relative;
  padding: 20px 0 53px;
  display: flex;
  justify-content: center;

  @media screen and (min-width: ${(props) => props.theme.contentWidthDesktop}) {
    padding: 30px 0 100px;
  }
`;

const Copyright = styled.span`
  font-size: 13px;
  font-weight: 500;
  line-height: ${(props) => props.theme.lineHeightDefault};
  color: ${(props) => props.theme.altColor};

  @media screen and (min-width: ${(props) => props.theme.contentWidthDesktop}) {
    font-size: 18px;
  }
`;

export { StyledFooter, InnerContainer, Copyright };
