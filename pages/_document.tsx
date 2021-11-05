import Document, { Html, Head, Main, NextScript } from 'next/document'

class MuiDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&amp;display=swap"
          />

          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MuiDocument