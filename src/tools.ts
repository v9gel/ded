import { forNames, names } from './const';

export function getRandomArrayElement(array: any[]) {
  const randIndex = Math.floor(Math.random() * array.length);
  return array[randIndex];
}

export function getRandomName() {
  return getRandomArrayElement(names) + ' ' + getRandomArrayElement(forNames);
}
