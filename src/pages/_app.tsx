import { MuiThemeProvider, ReduxProvider } from "@/libs/contexts";
import { RouteListener } from "@/components/RouteListerner";
import "@/styles/globals.css";
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

// eslint-disable-next-line
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type Props = AppProps & {
  Component: NextPageWithLayout
}

export default function App(props: Props) {
  const { Component, pageProps } = props

  // custom per page method
  const getLayout = Component.getLayout || ((page: ReactNode) => page) // No layout by default

  return (
    <MuiThemeProvider>
      <ReduxProvider>
        <RouteListener />
        {getLayout(<Component {...pageProps} />)}
      </ReduxProvider>
    </MuiThemeProvider>
  );
}
