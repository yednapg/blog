import 'tailwindcss/tailwind.css'
import '../public/global.css';
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Header from '../components/header'
import React from "react";
import Script from 'next/script';


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
      <React.Fragment >
        <Script src="https://scripts.simpleanalyticscdn.com/latest.js" />
        <noscript>
          {/* eslint-disable @next/next/no-img-element */}
          <img
            src="https://queue.simpleanalyticscdn.com/noscript.gif"
            alt=""
            referrerPolicy="no-referrer-when-downgrade"
          />
        </noscript>
      </React.Fragment>
    </>
  )
}
