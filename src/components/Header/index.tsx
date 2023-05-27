import { useStore } from '@nanostores/react';
import styled from 'styled-components';

import { $health, $low, $money, $society } from '@/stores/marks';
import { DiffEnum, MarkEnum } from '@/types';

import { Mark } from './Mark';

export const HeaderWrapper = styled.header`
  display: flex;

  width: 100%;

  padding: 20px;
  justify-content: space-between;
  max-height: 100px;
`;

export const Header = () => {
  const health = useStore($health);
  const money = useStore($money);
  const low = useStore($low);
  const society = useStore($society);

  return (
    <HeaderWrapper>
      <Mark mark={MarkEnum.Health} count={health} diff={DiffEnum.Medium}></Mark>
      <Mark mark={MarkEnum.Low} count={low} diff={DiffEnum.Small}></Mark>
      <Mark mark={MarkEnum.Money} count={money}></Mark>
      <Mark mark={MarkEnum.Society} count={society}></Mark>
    </HeaderWrapper>
  );
};
