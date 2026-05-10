import Head from 'next/head';
import '../styles/index.css';
import '../styles/legal.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
