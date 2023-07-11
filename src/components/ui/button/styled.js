import styled from 'styled-components';

const StyledButton = styled.a`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  padding: 8px 14px;
  color: ${(props) => props.theme.basicWhite};
  font-size: 16px;
  letter-spacing: 3.2px;
  line-height: ${(props) => props.theme.lineHieghtDefault};
  background-color: transparent;
  border: none;

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

  &:hover,
  &:focus {
  }

  &:active {
  }
`;

export default StyledButton;
