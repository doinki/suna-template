import createCache from '@emotion/cache';
import { isBrowser } from '@suna/utils';

const createEmotionCache = () => {
  let insertionPoint;

  if (isBrowser()) {
    const emotionInsertionPoint = document.querySelector<HTMLMetaElement>(
      'meta[name="emotion-insertion-point"]'
    );
    insertionPoint = emotionInsertionPoint ?? undefined;
  }

  return createCache({ insertionPoint, key: 'mui-style' });
};

export default createEmotionCache;
