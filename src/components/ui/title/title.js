import styled, { css } from 'styled-components';

const TitleSize = {
  BIG: 'big',
  MEDIUM: 'medium',
  SMALL: 'small',
  EXTRA_SMALL: 'extra_small',
};

const TitleSizeValue = {
  [TitleSize.BIG]: {
    fontSizeDesktop: '49px',
    fontSizeMobile: '31px',
  },
  [TitleSize.MEDIUM]: {
    fontSizeDesktop: '35px',
    fontSizeMobile: '26px',
  },
  [TitleSize.SMALL]: {
    fontSizeDesktop: '28px',
    fontSizeMobile: '21px',
  },
  [TitleSize.EXTRA_SMALL]: {
    fontSizeDesktop: '12px',
    fontSizeMobile: '9px',
  },
};

const Title = styled.h1`
  margin: 0;
  padding: 0;
  font-weight: 400;
  line-height: 'normal';
  ${(props) => {
    const values = TitleSizeValue[props.size || TitleSize.MEDIUM];
    return css`
      font-size: ${values.fontSizeMobile};
    `;
  }};

  @media screen and (min-width: ${(props) => props.theme.contentWidthDesktop}) {
    ${(props) => {
      const values = TitleSizeValue[props.size || TitleSize.MEDIUM];
      return css`
        font-size: ${values.fontSizeDesktop};
      `;
    }};
  }
`;

export { Title, TitleSize };
