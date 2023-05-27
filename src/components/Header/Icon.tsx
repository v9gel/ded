import { useMemo } from 'react';
import styled from 'styled-components';

import { MarkEnum } from '@/types';

import { IconHealth } from './Icons/IconHeath';
import { IconLaw } from './Icons/IconLaw';
import { IconMoney } from './Icons/IconMoney';
import { IconSociety } from './Icons/IconSociety';

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 50px;
  height: 50px;

  color: var(--cGreen);
  position: relative;
`;

interface Props {
  mark: MarkEnum;
  count: number;
}

interface PropsProgress {
  count: number;
}

export const ProgressIcon = styled.div<PropsProgress>`
  position: absolute;
  height: ${(props) => (10 - props.count) * 5}px;

  color: var(--cBlack);
  overflow: hidden;
  z-index: 2;
`;

export const Icon = ({ mark, count }: Props) => {
  const icon = useMemo(() => {
    if (mark === MarkEnum.Health) {
      return <IconHealth></IconHealth>;
    }

    if (mark === MarkEnum.Low) {
      return <IconLaw></IconLaw>;
    }

    if (mark === MarkEnum.Money) {
      return <IconMoney></IconMoney>;
    }

    return <IconSociety></IconSociety>;
  }, [mark]);
  return (
    <IconWrapper>
      {icon}
      <ProgressIcon count={Math.min(count, 10)}>{icon}</ProgressIcon>
    </IconWrapper>
  );
};
