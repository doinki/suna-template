import { isBrowser } from '../src';

describe('isBrowser', () => {
  test('should return `true` if browser', () => {
    expect(isBrowser()).toBe(true);
  });
});
