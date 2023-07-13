import styled, { css } from 'styled-components';

const simpleStyle = css`
  background-color: ${(props) => props.theme.basicWhite};
  border: 3px solid transparent;
  color: ${(props) => props.theme.simpleButtonColor};
  padding: 6px 40px;

  @media screen and (min-width: ${(props) => props.theme.contentWidthDesktop}) {
    padding: 8px 12px;
    border: 4px solid transparent;
  }
`;

const complexStyle = css`
  position: relative;
  background-color: transparent;
  border: none;
  color: ${(props) => props.theme.basicWhite};
  padding: 8px 14px;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 2px;
    height: 27px;
    border-bottom: 1.5px solid ${(props) => props.theme.basicWhite};
    border-top: 1.5px solid ${(props) => props.theme.basicWhite};
  }

  &::before {
    border-left: 1.5px solid ${(props) => props.theme.basicWhite};
    left: 0;
  }

  &::after {
    border-right: 1.5px solid ${(props) => props.theme.basicWhite};
    right: 0;
  }
`;

const StyledButton = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 3.2px;
  line-height: ${(props) => props.theme.lineHieghtDefault};
  max-width: fit-content;

  ${(props) => (props.simple ? simpleStyle : complexStyle)};

  &:hover,
  &:focus {
  }

  &:active {
  }

  @media screen and (min-width: ${(props) => props.theme.contentWidthDesktop}) {
    font-size: 16px;
  }
`;

export default StyledButton;
