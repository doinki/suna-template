import type { EmotionCache } from '@emotion/cache';
import type { ExtendedAppProps as SunaExtendedAppProps } from '@suna/types';
// eslint-disable-next-line @next/next/no-document-import-in-page
import type { DocumentProps } from 'next/document';

export type ExtendedAppProps = SunaExtendedAppProps & {
  emotionCache?: EmotionCache;
};

export interface ExtendedDocumentProps extends DocumentProps {
  emotionStyleTags: JSX.Element[];
}
