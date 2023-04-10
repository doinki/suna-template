import { isBrowser } from '@suna/utils';
import { useEffect, useLayoutEffect } from 'react';

export default isBrowser() ? useLayoutEffect : useEffect;
