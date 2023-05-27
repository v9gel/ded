import { useStore } from '@nanostores/react';
import { useState } from 'react';
import styled from 'styled-components';

import { $time } from '@/stores/marks';

import { getRandomName } from '../../tools';
import { Age } from './Age';
import { Name } from './Name';

const FooterWrapper = styled.footer`
  width: 100%;

  max-height: 70px;
  padding: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Footer = () => {
  const time = useStore($time);

  const [name] = useState(getRandomName());

  return (
    <FooterWrapper>
      <Name>{name}</Name>
      <Age>{Math.floor(time / 5)} лет</Age>
    </FooterWrapper>
  );
};
