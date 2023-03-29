import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="de">
       <Head>
        <meta name="description" content="Unser PayPal Gebührenrechner macht es Ihnen leicht, Ihre PayPal-Gebühren zu berechnen und Überraschungen zu vermeiden. Geben Sie den Betrag ein, den Sie erhalten möchten, und unser Tool zeigt Ihnen die genauen Gebühren, die Sie zahlen müssen, einschließlich Währungsumrechnungsgebühren." />
        <meta name="keywords" content="PayPal, Gebührenrechner, Gebühren, Währungsumrechnung" />
        <meta name="author" content="" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
