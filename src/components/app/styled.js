import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    margin: 0;
  }

  body {
    overflow-x: hidden;
    background-color: ${(props) => props.theme.backgroundColor};
    font-family: ${(props) => props.theme.fontFamily};
    font-size: ${(props) => props.theme.defaultFontSizeMobile};
    line-height: ${(props) => props.theme.lineHieghtDefault};
    font-weight: 400;
    color: ${(props) => props.theme.basicWhite};
  }

  body div#root {
    display: grid;
    min-height: 100vh;
    grid-template-rows: min-content 1fr min-content;
  }

  @media (min-width: ${(props) => props.theme.contentWidthDesktop}) {
    body {
      font-size: ${(props) => props.theme.fontSizeDesktop};
    }
  }
`;
