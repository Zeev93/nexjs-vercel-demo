import '@/styles/globals.css'
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ReactElement } from 'react';

type NextPageWithLayout = NextPage & {
    getLayout?: (page: JSX.Element) => JSX.Element
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {

  const getLayout = Component.getLayout || ((page) => page );
  return getLayout( <Component {...pageProps} /> )
}

export default MyApp
