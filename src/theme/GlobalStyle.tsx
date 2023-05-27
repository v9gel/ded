import 'normalize.css';

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html{
      overflow: hidden;
    }

    body {
      font-family: 'Roboto', sans-serif;
      
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    * {
      box-sizing: border-box;
      user-select: none;

      font-family: 'Nunito', sans-serif;
    }

    :root {
      --cYellow: #fee772;
      --cRed: #c9462a;
      --cBlack: #242424;
      --cGreen: #C4CB80;


      --cCardBg: #FFFAEC;

      --max-mobile-width: 420px;
    }

    // Мобильная версия
    @media screen and (max-width: 420px) {
      html {
        background-color: var(--cRed);
      }
    }
`;
