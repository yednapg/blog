import 'tailwindcss/tailwind.css'
import '../public/global.css';
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Header from '../components/header'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="High-School Student"
        />
        <title>Gaurav Pandey</title>
      </Head>

      <Header />
      <main className="py-7">
        <Component {...pageProps} />
      </main>
    </>
  )
}
