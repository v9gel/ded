import { atom } from 'nanostores';

import { DiffEnum } from '@/types';

export const $d_health = atom<DiffEnum>(DiffEnum.None);
export const $d_low = atom<DiffEnum>(DiffEnum.None);
export const $d_money = atom<DiffEnum>(DiffEnum.None);
export const $d_society = atom<DiffEnum>(DiffEnum.None);

export function setDiffs(health: number, low: number, money: number, society: number) {
  $d_health.set(Math.abs(health));
  $d_low.set(Math.abs(low));
  $d_money.set(Math.abs(money));
  $d_society.set(Math.abs(society));
}

export function resetDiffs() {
  $d_health.set(0);
  $d_low.set(0);
  $d_money.set(0);
  $d_society.set(0);
}
