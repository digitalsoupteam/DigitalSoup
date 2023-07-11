import styled, { keyframes } from 'styled-components';
import P from '../../../elements/p';
import heroBg from '../../../assets/hero-bg.svg';

const StyledHero = styled.div`
  padding: 38px 17px 43px;
  display: flex;
  flex-direction: column;
  gap: 53px;
  align-items: center;
  background-image: url(${heroBg});
  background-size: 200% 301px;
  overflow: visible;
  background-repeat: no-repeat;
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
`;

const centeringFrom = {
  TOP_RIGHT: keyframes`
  0% {
    transform: translateY(-30%) translateX(30%);
    opacity: 0;
  }
  100% {
    transform: translateY(0) translateX(0);
    opacity: 100;
  }
`,
  TOP_LEFT: keyframes`
  0% {
    transform: translateY(-30%) translateX(-30%);
    opacity: 0;
  }
  100% {
    transform: translateY(0) translateX(0);
    opacity: 100;
  }
`,
  BOTTOM_LEFT: keyframes`
  0% {
    transform: translateY(30%) translateX(0);
    opacity: 0;
  }
  100% {
    transform: translateY(0) translateX(0);
    opacity: 100;
  }
`,
};

const Circle = styled.div`
  position: absolute;
  left: ${(props) => props.$left || 0};
  bottom: ${(props) => props.$bottom || 0};
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  border-radius: 50%;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  border: 0.5px solid ${(props) => props.theme.basicWhite};
  animation-name: ${(props) => (props.from ? centeringFrom[props.from] : null)};
  animation-duration: 1.5s;
  animation-timing-function: ease-in-out;
`;

const Text = styled(P)`
  font-size: 16px;
  width: 115px;
`;

export { StyledHero, Circles, Circle, Text };
