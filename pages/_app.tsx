import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import Layout from '@/components/layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )

  //TODO - https://nextjs.org/docs/basic-features/layouts
  //const getLayout = Component.getLayout || ((page) => page)
}
