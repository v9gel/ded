import styled from 'styled-components';

import { getRandomName } from '../../tools';
import { Age } from './Age';
import { Name } from './Name';

const FooterWrapper = styled.footer`
  width: 100%;

  max-height: 70px;
  padding: 30px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Footer = () => {
  return (
    <FooterWrapper>
      <Name>{getRandomName()}</Name>
      <Age>{65} лет</Age>
    </FooterWrapper>
  );
};
