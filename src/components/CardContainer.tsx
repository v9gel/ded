import styled from 'styled-components';

export const CardContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  justify-content: space-evenly;

  background-color: var(--cYellow);

  width: 100%;

  // Десктоп версия
  @media screen and (min-width: 420px) {
    flex-grow: 1;
  }

  @media screen and (max-width: 420px) {
    height: calc(100svh - 155px);
  }
`;
