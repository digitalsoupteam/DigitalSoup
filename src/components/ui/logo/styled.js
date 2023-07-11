import styled, { css } from 'styled-components';

const LogoSize = {
  STANDARD: 'medium',
  SMALL: 'small',
};

const LogoSizeValue = {
  [LogoSize.STANDARD]: {
    mobile: '202px',
    desktop: '291px',
  },
  [LogoSize.SMALL]: {
    mobile: '28px',
    desktop: '28px',
  },
};

const StyledLogo = styled.div`
  height: auto;
  ${(props) => {
    const values = LogoSizeValue[props.size || LogoSize.STANDARD];
    return css`
      width: ${values.mobile};

      @media screen and (min-width: ${(props) =>
          props.theme.contentWidthDesktop}) {
        width: ${values.desktop};
      }
    `;
  }};
`;

const StyledHeaderLogo = styled.span`
  display: none;
  min-width: fit-content;
  font-size: 30px;
  line-height: ${(props) => props.theme.lineHieghtDefault};
  font-weight: 500;
  letter-spacing: 7.95px;
  text-transform: uppercase;

  @media screen and (min-width: ${(props) => props.theme.contentWidthDesktop}) {
    display: inline-block;
  }
`;

export { LogoSize, StyledLogo, StyledHeaderLogo };
