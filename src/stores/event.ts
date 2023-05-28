import { atom } from 'nanostores';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import _rawEvents from '@/assets/events1.csv';
import { getRandomArrayElement } from '@/tools';

import { resetMarks } from './marks';

interface RawEvent {
  id: string;
  text: string;
  fromRandom: string;
  img: string;
  preText: string;
  leftText: string;
  leftLink: string;
  leftMoney: string;
  leftHealth: string;
  leftSociety: string;
  leftLaw: string;
  leftTime: string;
  rightText: string;
  rightLink: string;
  rightMoney: string;
  rightHealth: string;
  rightSociety: string;
  rightLaw: string;
  rightTime: string;
}

export interface Event {
  id: number;
  text: string;
  fromRandom: boolean;
  img: string;
  preText: string | undefined;
  leftText: string;
  leftLink: number;
  leftMoney: number;
  leftHealth: number;
  leftSociety: number;
  leftLaw: number;
  leftTime: number;
  rightText: string;
  rightLink: number;
  rightMoney: number;
  rightHealth: number;
  rightSociety: number;
  rightLaw: number;
  rightTime: number;
}

const rawEvents = _rawEvents as RawEvent[];

function eventParser({
  id,
  text,
  fromRandom,
  img,
  preText,
  leftText,
  leftLink,
  leftMoney,
  leftHealth,
  leftSociety,
  leftLaw,
  leftTime,
  rightText,
  rightLink,
  rightMoney,
  rightHealth,
  rightSociety,
  rightLaw,
  rightTime
}: RawEvent): Event {
  return {
    id: parseInt(id),
    text,
    fromRandom: parseInt(fromRandom) === 1,
    img,
    preText: preText.length > 0 ? preText : undefined,
    leftText: leftText || 'Нет',
    leftLink: parseInt(leftLink) || 0,
    leftMoney: parseInt(leftMoney) || 0,
    leftHealth: parseInt(leftHealth) || 0,
    leftSociety: parseInt(leftSociety) || 0,
    leftLaw: parseInt(leftLaw) || 0,
    leftTime: parseInt(leftTime) || 1,
    rightText: rightText || 'Да',
    rightLink: parseInt(rightLink) || 0,
    rightMoney: parseInt(rightMoney) || 0,
    rightHealth: parseInt(rightHealth) || 0,
    rightSociety: parseInt(rightSociety) || 0,
    rightLaw: parseInt(rightLaw) || 0,
    rightTime: parseInt(rightTime) || 1
  };
}

export const events = rawEvents.map((rawEvent) => eventParser(rawEvent));

const randomEvents = events.filter((event) => event.fromRandom);

export function getEvent(id?: number) {
  if (id) {
    return events.find((event) => event.id === id) as Event;
  }

  return getRandomArrayElement(randomEvents) as Event;
}

// Хранилище

export const $event = atom<Event>(getEvent(1));

export function setEvent(id: number | undefined) {
  if (id === 1) {
    resetMarks();
  }
  $event.set(getEvent(id));
}
