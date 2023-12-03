import { DM_Sans } from 'next/font/google';

const dmSans = DM_Sans({ subsets: ['latin'] });

import Layout from '@/components/layouts/Layout';
import { Hero, HowItWorks } from '@/components/sections';

const Home = () => {
  return (
    <Layout>
      <div className={`${dmSans.className}`}>
        <Hero />
        <HowItWorks />
      </div>
    </Layout>
  );
};

export default Home;
