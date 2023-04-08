/* @jest-environment node */

import { isBrowser } from './isBrowser';

describe('isBrowser', () => {
  test('should return `false` if not browser', () => {
    expect(isBrowser()).toBe(false);
  });
});
