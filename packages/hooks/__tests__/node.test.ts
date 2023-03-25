/**
 * @jest-environment node
 */

import React from 'react';

import { useLayoutEffect } from '../src';

describe('useLayoutEffect', () => {
  test('should be `React.useEffect` if not browser', () => {
    expect(useLayoutEffect).toBe(React.useEffect);
  });
});
