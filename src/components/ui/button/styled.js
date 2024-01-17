import styled, { css } from 'styled-components';

const simpleStyle = css`
  background-color: ${(props) => props.theme.basicWhite};
  color: ${(props) => props.theme.simpleButtonColor};
  padding: 6px 40px;

  &:hover,
  &:focus {
    background-color: transparent;
    color: ${(props) => props.theme.basicWhite};
  }

  &:active {
    opacity: 0.8;
  }

  @media screen and (min-width: ${(props) => props.theme.contentWidthDesktop}) {
    padding: 8px 12px;
  }
`;

const complexStyle = css`
  background-color: transparent;
  border: none;
  color: ${(props) => props.theme.basicWhite};
  padding: 8px 14px;

  &:hover,
  &:focus {
    background-color: ${(props) => props.theme.basicWhite};
    color: ${(props) => props.theme.simpleButtonColor};
  }

  &:active {
    opacity: 0.8;
  }
`;

const StyledButton = styled.a`
  position: relative;
  display: inline-flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 3.2px;
  line-height: ${(props) => props.theme.lineHieghtDefault};
  max-width: fit-content;
  text-decoration: none;
  border: 3px solid transparent;
  transition: all 200ms;

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

  ${(props) => (props.simple ? simpleStyle : complexStyle)};

  @media screen and (min-width: ${(props) => props.theme.contentWidthDesktop}) {
    font-size: 16px;
    border: 4px solid transparent;
  }
`;

export default StyledButton;
