import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import type { Router } from 'next/router';
import type { ReactElement, ReactNode } from 'react';

export type GetLayout<Props = {}> = (
  page: ReactElement,
  context: { pageProps: Props; router: Router }
) => ReactNode;

export type ExtendedAppProps = AppProps & {
  Component: { getLayout?: GetLayout };
};

export type ExtendedNextPage<Props = {}, InitialProps = Props> = NextPage<
  Props,
  InitialProps
> & {
  getLayout?: GetLayout<Props>;
};
