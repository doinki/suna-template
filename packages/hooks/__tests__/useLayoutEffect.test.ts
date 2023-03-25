import React from 'react';

import { useLayoutEffect } from '../src';

describe('useLayoutEffect', () => {
  test('should be `React.useLayoutEffect` if browser', () => {
    expect(useLayoutEffect).toBe(React.useLayoutEffect);
  });
});
