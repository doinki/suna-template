import createEmotionServer from '@emotion/server/create-instance';
import type { AppType } from 'next/app';
import type { DocumentContext } from 'next/document';
import NextDocument, { Head, Html, Main, NextScript } from 'next/document';
import type { ComponentProps, ComponentType } from 'react';

import type { ExtendedAppProps, ExtendedDocumentProps } from '@/types';
import { createEmotionCache } from '@/utils';

const Document = ({ emotionStyleTags }: ExtendedDocumentProps) => {
  return (
    <Html lang="en">
      <Head>
        <link href="/icons/volleyball_two_tone.svg" rel="icon" />
        <meta content="" name="emotion-insertion-point" />
        {emotionStyleTags}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

Document.getInitialProps = async (ctx: DocumentContext) => {
  const originalRenderPage = ctx.renderPage;
  const cache = createEmotionCache();
  const emotionServer = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (
        App: ComponentType<ComponentProps<AppType> & ExtendedAppProps>
      ) =>
        function EnhanceApp(props) {
          return <App emotionCache={cache} {...props} />;
        },
    });

  const initialProps = await NextDocument.getInitialProps(ctx);
  const emotionStyles = emotionServer.extractCriticalToChunks(
    initialProps.html
  );
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
      key={style.key}
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
    />
  ));

  return { ...initialProps, emotionStyleTags };
};

export default Document;
