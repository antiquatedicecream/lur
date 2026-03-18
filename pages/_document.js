import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preload" href="/fonts/Adriane Text Regular.woff" as="font" type="font/woff" crossOrigin="anonymous" />
          <link rel="preload" href="/fonts/Adriane Text Bold.woff" as="font" type="font/woff" crossOrigin="anonymous" />
          <link rel="preload" href="/fonts/josefin-sans-v32-latin-semibold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
          {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS && (
            <link rel="preconnect" href="https://www.googletagmanager.com" />
          )}
        </Head>
        <body>
        <Main/>
        <NextScript/>
        </body>
      </Html>
    )
  }
}
