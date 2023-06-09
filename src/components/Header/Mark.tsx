import styled from 'styled-components';

import { DiffEnum, MarkEnum } from '@/types';

import { Diff } from './Diff';
import { Icon } from './Icon';

const MarkWrapper = styled.div`
  height: 70px;
  width: 50px;

  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

interface Props {
  mark: MarkEnum;
  diff: DiffEnum;
  count: number;
}

export const Mark = ({ mark, diff, count }: Props) => {
  return (
    <MarkWrapper>
      <Icon mark={mark} count={count}></Icon>
      <Diff diff={diff}></Diff>
    </MarkWrapper>
  );
};
