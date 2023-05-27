import { useStore } from '@nanostores/react';
import styled from 'styled-components';

import { $event, Event } from '@/stores/event';

import { Card } from './Card';

const CardHolderWrapper = styled.div`
  padding: 20px 0;
`;

export const CardHolder = () => {
  const event = useStore($event) as Event;

  return (
    <CardHolderWrapper>
      <Card event={event}></Card>
    </CardHolderWrapper>
  );
};
