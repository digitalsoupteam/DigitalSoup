import styled from 'styled-components';

const BackgroundCircle = styled.div`
  z-index: -1;
  position: absolute;
  top: ${(props) => props.$top.mobile || 0};
  bottom: ${(props) => props.$bottom.mobile || 0};
  left: ${(props) => props.$left.mobile || 0};
  right: ${(props) => props.$right.mobile || 0};
  width: ${(props) => props.$width.mobile || '150px'};
  height: ${(props) => props.$height.mobile || '150px'};
  margin: auto;
  border-radius: 50%;
  background-color: ${(props) => props.$bgColor || props.theme.bgColorBlue};
  transform: translate3d(0, 0, 0);
  filter: blur(${(props) => props.blur || '86px'});

  @media screen and (min-width: ${(props) => props.theme.contentWidthDesktop}) {
    top: ${(props) => props.$top.desktop || 0};
    bottom: ${(props) => props.$bottom.desktop || 0};
    left: ${(props) => props.$left.desktop || 0};
    right: ${(props) => props.$right.desktop || 0};
    width: ${(props) => props.$width.desktop || '150px'};
    height: ${(props) => props.$height.desktop || '150px'};
  }
`;

export default BackgroundCircle;
