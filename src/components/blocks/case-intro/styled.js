import styled from 'styled-components';
import Wrapper from '../../layout/wrapper/wrapper';

const StyledCaseIntro = styled.div`
  padding: 23px 0 0;

  @media screen and (min-width: ${(props) => props.theme.contentWidthDesktop}) {
    padding: 31px 0 0;
  }
`;

const StyledWrapper = styled(Wrapper)`
  margin: 0 auto;
  padding: 0;
  max-width: 100%;

  @media screen and (min-width: ${(props) => props.theme.contentWidthDesktop}) {
    height: 505px;
    max-width: ${(props) =>
      props.fullWidth ? '100%' : props.theme.contentWidthDesktop};
    padding: 0 ${(props) => props.theme.indentDesktop};
  }
`;

const IntroImage = styled.img`
  width: 100%;
  height: auto;

  @media screen and (min-width: ${(props) => props.theme.contentWidthDesktop}) {
    height: 505px;
  }
`;

const IntroBar = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
`;

const IntroInner = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 37px;
  padding: 20px 45px 20px 20px;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    bottom: -235px;
    left: -20px;
    height: 302px;
    z-index: -1;
    background: linear-gradient(
      180deg,
      rgba(0, 56, 255, 0.58) 0%,
      rgba(0, 56, 255, 0) 100%
    );
    filter: blur(115px);
  }

  @media screen and (min-width: ${(props) => props.theme.contentWidthDesktop}) {
    display: grid;
    grid-template-columns: 538px 1fr;
    gap: 50px;
    padding: 28px 156px 28px 0;

    &::after {
      width: 1150px;
      left: 0;
      bottom: -302px;
    }
  }
`;

export { StyledCaseIntro, StyledWrapper, IntroImage, IntroBar, IntroInner };
