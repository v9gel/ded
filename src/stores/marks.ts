import { atom } from 'nanostores';

export const $health = atom<number>(5);
export const $low = atom<number>(5);
export const $money = atom<number>(5);
export const $society = atom<number>(5);
export const $time = atom<number>(65 * 5);

export function calcMarks(
  health: number,
  low: number,
  money: number,
  society: number,
  time: number
) {
  $health.set($health.get() + health);
  $low.set($low.get() + low);
  $money.set($money.get() + money);
  $society.set($society.get() + society);
  $time.set($time.get() + time);
}
