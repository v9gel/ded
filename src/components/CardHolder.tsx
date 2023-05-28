import { useStore } from '@nanostores/react';
import styled from 'styled-components';

import shirt from '@/assets/shirt.svg';
import { $event, Event } from '@/stores/event';

import { Card } from './Card';

const CardHolderWrapper = styled.div`
  padding: 20px 0;

  position: relative;
`;

const Img = styled.img`
  position: absolute;
  top: 0;
  z-index: 1;
  padding: 20px 0;

  pointer-events: none;
`;

export const CardHolder = () => {
  const event = useStore($event) as Event;

  return (
    <CardHolderWrapper>
      <Card event={event}></Card>
      <Img src={shirt}></Img>
    </CardHolderWrapper>
  );
};
