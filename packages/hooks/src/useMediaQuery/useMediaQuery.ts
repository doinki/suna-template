import { isBrowser } from '@suna/utils';
import { useCallback, useMemo, useSyncExternalStore } from 'react';

import type { UseMediaQueryOptions } from './useMediaQueryTypes';

const useMediaQuery = (
  query: string,
  options: UseMediaQueryOptions = {}
): boolean => {
  const replacedQuery = query.replace(/^@media( ?)/m, '');
  const {
    defaultMatches = false,
    matchMedia = isBrowser() && typeof window.matchMedia !== 'undefined'
      ? window.matchMedia
      : null,
    noSsr = false,
    ssrMatchMedia = null,
  } = options;

  const getDefaultSnapshot = useCallback(
    () => defaultMatches,
    [defaultMatches]
  );

  const [subscribe, getSnapshot] = useMemo(() => {
    if (matchMedia === null) {
      return [() => () => {}, getDefaultSnapshot];
    }

    const mediaQueryList = matchMedia(replacedQuery);

    return [
      (notify: () => void) => {
        mediaQueryList.addEventListener('change', notify);

        return () => {
          mediaQueryList.removeEventListener('change', notify);
        };
      },
      () => mediaQueryList.matches,
    ];
  }, [getDefaultSnapshot, matchMedia, replacedQuery]);

  const getServerSnapshot = useMemo(() => {
    if (noSsr && matchMedia) {
      return () => matchMedia(replacedQuery).matches;
    }

    if (ssrMatchMedia !== null) {
      return () => ssrMatchMedia(replacedQuery).matches;
    }

    return getDefaultSnapshot;
  }, [getDefaultSnapshot, matchMedia, noSsr, replacedQuery, ssrMatchMedia]);

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
};

export default useMediaQuery;
