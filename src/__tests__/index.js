import { Magician, Daemon } from '../index';

test.each([
  [3, 2, [80, 75]],
  [1, 1, [100, 100]],
  [5, 2, [60, 55]],
])(('test Magician attack and stoned'), (attackCell, stonedCell, expected) => {
  const magl = new Magician();
  magl.attack = attackCell;
  magl.stoned = stonedCell;
  const result = [magl.attack, magl.stoned];
  expect(result).toEqual(expected);
});

test.each([
  [3, 2, [80, 75]],
  [1, 1, [100, 100]],
  [5, 2, [60, 55]],
])(('test Daemon attack and stoned'), (attackCell, stonedCell, expected) => {
  const daemon = new Daemon();
  daemon.attack = attackCell;
  daemon.stoned = stonedCell;
  const result = [daemon.attack, daemon.stoned];
  expect(result).toEqual(expected);
});
