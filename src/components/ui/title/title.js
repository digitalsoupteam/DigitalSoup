import styled, { css } from 'styled-components';

const TitleSize = {
  BIG: 'big',
  MEDIUM: 'medium',
  SMALL: 'small',
};

const TitleSizeValue = {
  [TitleSize.BIG]: {
    fontSizeDesktop: '50px',
    fontSizeMobile: '31px',
  },
  [TitleSize.MEDIUM]: {
    fontSizeDesktop: '35px',
    fontSizeMobile: '26px',
  },
  [TitleSize.SMALL]: {
    fontSizeDesktop: '28px',
    fontSizeMobile: '28px',
  },
};

const StyledTitle = styled.h1`
  margin: 0;
  padding: 0;
  font-weight: 400;
  line-height: 'normal';
  ${(props) => {
    const values = TitleSizeValue[props.size || TitleSize.MEDIUM];
    return css`
      font-size: ${values.fontSize};
    `;
  }};
`;

export { StyledTitle, TitleSize };
