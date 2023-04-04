import '@/styles/tailwind.css';

import type { AppProps } from 'next/app';
import { useEffect } from 'react';

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isSafari =
      userAgent.includes('safari') && !userAgent.includes('chrom');

    if (isSafari) {
      window.history.scrollRestoration = 'auto';
    }
  }, []);

  return <Component {...pageProps} />;
};

export default App;
