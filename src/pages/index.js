import { DM_Sans } from 'next/font/google';

const dmSans = DM_Sans({ subsets: ['latin'] });

import Layout from '@/components/layouts/Layout';
import { Hero, HowItWorks, Newsletter } from '@/components/sections';

import Head from 'next/head';

const Home = () => {
  return (
    <Layout>
      <Head>
        <meta charset="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />

        <meta name="description" content="My Secret Gifter" />

        <meta
          property="og:image"
          content="%PUBLIC_URL%/assets/icons/logo.svg"
        />
        <meta property="og:title" content=" My Secret Gifter" />
        <meta
          property="og:description"
          content="Add an element of surprise and joy to your social circle—because every occasion deserves a little Secret Gifter magic!"
        />

        <meta
          property="og:image"
          content="%PUBLIC_URL%/assets/icons/logo.svg"
        />

        <link
          rel="apple-touch-icon"
          href="%PUBLIC_URL%/assets/icons/logo.svg"
        />

        {/* <link rel="manifest" href="%PUBLIC_URL%/manifest.json" /> */}

        <title>Secret Gifter</title>
      </Head>
      <div className={`${dmSans.className}`}>
        <Hero />
        <HowItWorks />
        <Newsletter />
      </div>
    </Layout>
  );
};

export default Home;
