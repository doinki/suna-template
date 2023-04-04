import '@/styles/tailwind.css';

import { CacheProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { useEffect } from 'react';

import type { ExtendedAppProps } from '@/types';
import { createEmotionCache } from '@/utils';

const clientSideEmotionCache = createEmotionCache();

const App = ({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}: ExtendedAppProps) => {
  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isSafari =
      userAgent.includes('safari') && !userAgent.includes('chrom');

    if (isSafari) {
      window.history.scrollRestoration = 'auto';
    }
  }, []);

  return (
    <CacheProvider value={emotionCache}>
      <CssBaseline />
      <Component {...pageProps} />
    </CacheProvider>
  );
};

export default App;
