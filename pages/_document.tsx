import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';
export default class MyDocument extends Document {
  render() {
    return (
      <html lang="zh" style={{
        height: "100%",
      }}>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
          <meta
            name="keywords"
            content="视频 图片 分享"
          />
          {/* PWA primary color */}
          <meta name="theme-color"  />

        </Head>
        <body>
          <Main />
          <NextScript />
          <div id="page-transition"></div>
        </body>
      </html>
    );
  }
}

MyDocument.getInitialProps = async ctx => {

  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: App => props => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
  };
};