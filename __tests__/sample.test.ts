import { isObject } from '../sample';

it('works', () => {
  expect(isObject({ testing: 'yes' })).toBeTruthy();
});
