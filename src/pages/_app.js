import { useEffect } from 'react';
import '@/styles/globals.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);
  return (
    <>
      <Component {...pageProps} />
      <ToastContainer />
    </>
  );
}

export default App;
