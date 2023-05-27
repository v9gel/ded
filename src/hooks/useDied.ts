import { useStore } from '@nanostores/react';

import { $health, $low, $money, $society } from '@/stores/marks';

export function useDied() {
  const health = useStore($health);
  const money = useStore($money);
  const low = useStore($low);
  const society = useStore($society);

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
