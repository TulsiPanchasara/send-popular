import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/index.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <link href='https://fonts.googleapis.com/css?family=Allura' rel='stylesheet'/>
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp
