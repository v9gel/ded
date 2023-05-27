import styled from 'styled-components';

import bgImage from '../assets/background.svg';

export const Background = styled.div`
  width: 100vw;
  height: 100vh;

  min-height: 500px;
  min-width: 300px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--cCardBg);

  position: fixed;
  transition: all 0.5 ease;

  @media screen and (min-width: 960px) {
    background-image: url(${bgImage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;
