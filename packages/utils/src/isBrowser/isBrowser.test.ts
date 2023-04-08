import isBrowser from './isBrowser';

describe('isBrowser', () => {
  test('should return `true` if browser', () => {
    expect(isBrowser()).toBe(true);
  });
});
