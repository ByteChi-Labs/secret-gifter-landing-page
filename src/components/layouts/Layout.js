import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

const Layout = ({ children }) => {
  return (
    <div className="bg-off-white">
      <Header />

      <div className="bg-off-white overflow-y-auto pt-[72px] snap-y	snap-mandatory	">
        <main className="snap-start ">{children}</main>

        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
