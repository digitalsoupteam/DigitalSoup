import styled, { css, keyframes } from 'styled-components';

const centeringFrom = {
  TOP_RIGHT: keyframes`
  0% {
    transform: translateY(0) translateX(0);
  }
  100% {
    transform: translateY(-10%) translateX(12%);
  }
`,
  TOP_LEFT: keyframes`
  0% {
    transform: translateY(0) translateX(0);
  }
  100% {
    /* transform: translateY(-10%) translateX(-10%); */
    transform: translateY(-10%) translateX(-15%);
  }
`,
  BOTTOM_LEFT: keyframes`
  0% {
    transform: translateY(0) translateX(0);
  }
  100% {
    /* transform: translateY(10%) translateX(0); */
    transform: translateY(8%) translateX(5%);
  }
`,
};

const rotating = keyframes`
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
`;

const centreingCss = css`
  animation-name: ${(props) => (props.from ? centeringFrom[props.from] : null)};
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-duration: ${(props) => (props.$duration ? props.$duration : '2s')};
  animation-timing-function: ease-in-out;
`;

const rotatingCss = css`
  animation-name: ${rotating};
  animation-iteration-count: infinite;
  animation-duration: 2s;
  animation-timing-function: ease-in-out;
`;

const rect = css`
  &::after {
    ${(props) => (props.$rotating ? rotatingCss : null)}
    ${(props) =>
      props.$delay
        ? css`
            animation-delay: ${props.$delay};
          `
        : null}
    content: '';
    position: absolute;
    top: -8px;
    left: -8px;
    width: calc(100% + 16px);
    height: calc(100% + 16px);
    background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none"%3E%3Crect x="0.5" width="16" height="16" fill="white" /%3E%3C/svg%3E');
    background-size: 15px;
    background-repeat: no-repeat;
    background-position: ${(props) =>
      props.$backgroundPosition ? props.$backgroundPosition : 'left center'};
    overflow: visible;
  }
`;

const StyledCircle = styled.div`
  position: absolute;
  top: ${(props) => props.$top.mobile || 0};
  bottom: ${(props) => props.$bottom.mobile || 0};
  left: ${(props) => props.$left.mobile || 0};
  right: ${(props) => props.$right.mobile || 0};
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.size.mobile};
  height: ${(props) => props.size.mobile};
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  text-align: center;

  ${(props) =>
    props.$delay
      ? css`
          animation-delay: ${props.$delay};
        `
      : null}

  ${(props) => (props.$scaling ? centreingCss : null)}

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 1px solid ${(props) => props.theme.basicWhite};
  }

  ${(props) => (props.$after ? rect : null)}

  @media screen and (min-width: ${(props) => props.theme.contentWidthDesktop}) {
    top: ${(props) => props.$top.desktop || 0};
    bottom: ${(props) => props.$bottom.desktop || 0};
    left: ${(props) => props.$left.desktop || 0};
    right: ${(props) => props.$right.desktop || 0};
    width: ${(props) => props.size.desktop};
    height: ${(props) => props.size.desktop};
    font-size: 15px;
    letter-spacing: 3.6px;
  }
`;

export { StyledCircle };
