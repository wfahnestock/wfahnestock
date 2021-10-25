import Theme from '../styles/theme';
import { NextSeo } from 'next-seo';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <NextSeo
          title="Will Fahnestock | Portfolio"
          description="Will Fahnestock is a Web Developer with a B.Sc in Web Design & Development from Full Sail University."
        />
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
 