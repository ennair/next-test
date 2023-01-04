import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

import crypto from 'crypto';
import fs from 'fs';
import { promisify } from 'util';

import getCSP from '../scripts/getCSP';

export const readFile = promisify(fs.readFile);

const cspHashOf = (text: any) => {
  const hash = crypto.createHash('sha256');
  hash.update(text);
  return hash.digest('base64');
};

interface Props {
  nonce: string;
}

class Document extends NextDocument<Props> {
  static async getInitialProps(ctx: any) {
    const initialProps = await NextDocument.getInitialProps(ctx);

    let nonce;
    if (ctx.res) {
      const { html } = await ctx.renderPage();
      nonce = cspHashOf(html + ctx.asPath);
      const preview = ctx.res.getHeader('preview');
      const contentSecurityPolicy = getCSP(nonce, preview);
      ctx.res.setHeader('Content-Security-Policy', contentSecurityPolicy);
    }

    return {
      ...initialProps,
      nonce: nonce,
    };
  }

  render() {
    const nonce = this.props.nonce;

    return (
      <Html className='no-js'>
        <Head nonce={nonce}>
        </Head>
        <body>
          <Main />
          <NextScript nonce={nonce} />
        </body>
      </Html>
    );
  }
}

export default Document;

