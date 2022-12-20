import { createGlobalStyle } from 'styled-components';

import { background, font } from './styled';

export const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
  }

  #root {
    height: 100%;
    display: flex;
  }

  body {
    ${background}
    ${font}

    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;
