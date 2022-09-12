import '../styles/index.scss';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../utils/theme';
import Head from 'next/head';

function MyApp({ Component, pageProps }: any) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Sigmaverse | Portal to the Ergo universe</title>
        <meta name="title" content="Sigmaverse - explore dapps in the ergo ecosystem." />
        <meta
          name="description"
          content="Sigmaverse is a one-stop portal to the Ergo dApp ecosystem: a place where users can find all the cool functionality that community developers are building on Ergo, all in one place."
        />
        <meta name="keywords" content="sigmaverse, ergo, ergo ecosystem, dapps, blockchain" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="ergoplatform.org" />
        <link rel="shortcut icon" href="/static/favicon.svg" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-VT7PYD147T"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-VT7PYD147T');`,
          }}
        ></script>
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
