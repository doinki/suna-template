/**
 * @jest-environment node
 */

import React from 'react';

import { useLayoutEffect } from './useLayoutEffect';

describe('useLayoutEffect', () => {
  test('should be `React.useEffect` if not browser', () => {
    expect(useLayoutEffect).toBe(React.useEffect);
  });
});
