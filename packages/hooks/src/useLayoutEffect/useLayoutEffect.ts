import { isBrowser } from '@suna/utils';
import React from 'react';

export default isBrowser() ? React.useLayoutEffect : React.useEffect;
