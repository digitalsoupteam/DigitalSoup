import styled, { css } from 'styled-components';
import StyledLink from '../../ui/link/link';

const LogoSize = {
  STANDARD: 'standard',
  SMALL: 'small',
};

const LogoSizeValue = {
  [LogoSize.STANDARD]: {
    mobile: '202px',
    desktop: '291px',
  },
  [LogoSize.SMALL]: {
    mobile: '75px',
    desktop: '45px',
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

const StyledHeaderLink = styled(StyledLink)`
  display: ${(props) => (props.isHome === true ? 'none' : 'block')};

  @media screen and (min-width: ${(props) => props.theme.contentWidthDesktop}) {
    display: block;
  }
`;

const StyledHeaderLogo = styled.span`
  display: block;
  text-align: center;
  font-size: 22px;
  line-height: ${(props) => props.theme.lineHieghtDefault};
  letter-spacing: 5.963px;
  font-weight: 500;
  text-transform: uppercase;

  @media screen and (min-width: ${(props) => props.theme.contentWidthDesktop}) {
    display: inline-block;
    font-size: 30px;
    letter-spacing: 7.95px;
  }
`;

export { LogoSize, StyledLogo, StyledHeaderLink, StyledHeaderLogo };
