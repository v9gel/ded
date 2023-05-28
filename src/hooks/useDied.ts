import { useStore } from '@nanostores/react';

import { setEvent } from '@/stores/event';
import { $health, $low, $money, $society } from '@/stores/marks';

export function useDied() {
  const health = useStore($health);
  const money = useStore($money);
  const low = useStore($low);
  const society = useStore($society);

  if (health <= 0) {
    setEvent(82);
  }
  if (health >= 10) {
    setEvent(81);
  }
  if (low <= 0) {
    setEvent(84);
  }
  if (low >= 10) {
    setEvent(83);
  }
  if (money <= 0) {
    setEvent(84);
  }
  if (money >= 10) {
    setEvent(85);
  }
  if (society <= 0) {
    setEvent(88);
  }
  if (society >= 10) {
    setEvent(87);
  }

  if (
    health <= 0 ||
    health >= 10 ||
    low <= 0 ||
    low >= 10 ||
    money <= 0 ||
    money >= 10 ||
    society <= 0 ||
    society >= 10
  ) {
    return true;
  }

  return false;
}
