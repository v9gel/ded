import styled from 'styled-components';

export const Screen = styled.div`
  display: flex;
  background-color: var(--cRed);
  flex-direction: column;

  width: 350px;
  height: 100%;

  // Десктоп версия
  @media screen and (min-width: 420px) {
    border-radius: 60px;
    border: 4px solid var(--cBlack);

    height: 700px;
  }

  @media screen and (max-width: 420px) {
    width: 420px;
  }
`;
