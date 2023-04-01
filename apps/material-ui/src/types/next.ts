import type { EmotionCache } from '@emotion/cache';
import type { AppProps } from 'next/app';
// eslint-disable-next-line @next/next/no-document-import-in-page
import type { DocumentProps } from 'next/document';

export interface ExtendedAppProps<P = any> extends AppProps<P> {
  emotionCache?: EmotionCache;
}

export interface ExtendedDocumentProps extends DocumentProps {
  emotionStyleTags: JSX.Element[];
}
