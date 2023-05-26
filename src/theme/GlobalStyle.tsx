import 'normalize.css';

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
      font-family: 'Roboto', sans-serif;
      
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    * {
      box-sizing: border-box;
      user-select: none;
    }

    :root {
      --cYellow: #fee772;
      --cRed: #c9462a;
      --cBlack: #242424;

      --cCardBg: #FFFAEC;
    }
`;
