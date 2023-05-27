import styled from 'styled-components';

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
  return (
    <HeaderWrapper>
      <Mark mark={MarkEnum.Health} diff={DiffEnum.Medium}></Mark>
      <Mark mark={MarkEnum.Low} diff={DiffEnum.Small}></Mark>
      <Mark mark={MarkEnum.Money}></Mark>
      <Mark mark={MarkEnum.Society}></Mark>
    </HeaderWrapper>
  );
};
