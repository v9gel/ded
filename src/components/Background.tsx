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
  background-image: url(${bgImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;

  position: fixed;
`;
