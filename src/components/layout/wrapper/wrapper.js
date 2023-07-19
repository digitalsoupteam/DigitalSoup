import styled from 'styled-components';

const Wrapper = styled.div`
  width: auto;
  box-sizing: border-box;
  max-width: ${(props) => (props.fullWidth ? '100%' : '700px')};
  margin: 0 auto;
  padding: 0 ${(props) => props.theme.indentMobile};

  @media screen and (min-width: ${(props) => props.theme.contentWidthDesktop}) {
    min-width: ${(props) =>
      props.fullWidth ? '100%' : props.theme.contentWidthDesktop};
    padding: 0 ${(props) => props.theme.indentDesktop};
  }
`;

export default Wrapper;
