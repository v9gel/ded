import styled from 'styled-components';

import { DiffEnum } from '@/types';

const DiffWrapper = styled.div`
  height: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function diffToPx(diff: DiffEnum) {
  if (diff === DiffEnum.Small) {
    return '7px';
  }

  if (diff === DiffEnum.Medium) {
    return '13px';
  }

  return '0px';
}

const Circle = styled.div<Props>`
  height: ${(props) => diffToPx(props.diff)};
  width: ${(props) => diffToPx(props.diff)};

  border-radius: 50%;
  background-color: var(--cGreen);
`;

interface Props {
  diff: DiffEnum;
}

export const Diff = ({ diff }: Props) => {
  return (
    <DiffWrapper>
      <Circle diff={diff}></Circle>
    </DiffWrapper>
  );
};
