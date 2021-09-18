import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name="title" content="Sigmaverse - explore dapps in the ergo ecosystem." />
          <meta
            name="description"
            content="Ergo has some amazing tech and some talented developers. However, as a decentralised and community-powered platform, it’s not always easy to know what’s going on all the time. Different people are developing different dApps and use cases, formally and informally. Connecting them to the same users and building that all-important DeFi network effect isn’t always easy.That’s what the Sigmaverse is about. Sigmaverse is a one-stop portal to the Ergo dApp ecosystem: a place where users can find all the cool functionality that community developers are building on Ergo, all in one place."
          />
          <meta name="keywords" content="sigmaverse, ergo, ergo ecosystem, dapps, blockchain" />
          <meta name="robots" content="index, follow" />
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="language" content="English" />
          <meta name="author" content="ergoplatform.org" />
          <link rel="shortcut icon" href="/static/favicon.svg" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
