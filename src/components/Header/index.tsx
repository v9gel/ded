import { useStore } from '@nanostores/react';
import styled from 'styled-components';

import { $d_health, $d_low, $d_money, $d_society } from '@/stores/diffs';
import { $health, $low, $money, $society } from '@/stores/marks';
import { MarkEnum } from '@/types';

import { Mark } from './Mark';

export const HeaderWrapper = styled.header`
  display: flex;

  width: 100%;

  padding: 10px 20px;
  justify-content: space-between;
  max-height: 100px;
`;

export const Header = () => {
  const health = useStore($health);
  const money = useStore($money);
  const low = useStore($low);
  const society = useStore($society);

  const d_health = useStore($d_health);
  const d_money = useStore($d_money);
  const d_low = useStore($d_low);
  const d_society = useStore($d_society);

  return (
    <HeaderWrapper>
      <Mark mark={MarkEnum.Health} count={health} diff={d_health}></Mark>
      <Mark mark={MarkEnum.Low} count={low} diff={d_low}></Mark>
      <Mark mark={MarkEnum.Money} count={money} diff={d_money}></Mark>
      <Mark mark={MarkEnum.Society} count={society} diff={d_society}></Mark>
    </HeaderWrapper>
  );
};
