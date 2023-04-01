import '@/styles/tailwind.css';

import { CacheProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';

import type { ExtendedAppProps } from '@/types';
import { createEmotionCache } from '@/utils';

const clientSideEmotionCache = createEmotionCache();

const App = ({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}: ExtendedAppProps) => {
  return (
    <CacheProvider value={emotionCache}>
      <CssBaseline />
      <Component {...pageProps} />
    </CacheProvider>
  );
};

export default App;
