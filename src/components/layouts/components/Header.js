import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { Button } from '@material-tailwind/react';
import Sidebar from './Sidebar';

import { logo } from '../../../../public/assets/icons';
import { WebsiteRoutes } from '@/websiteRoutes';

const Header = () => {
  const [shaking, setShaking] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setShaking(true);

      // Set a timeout to stop the shaking after 0.5 seconds
      setTimeout(() => {
        setShaking(false);
      }, 500);
    }, 10000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  const [sidebar, setSidebar] = useState(false);
  const { route } = useRouter();
  const navItems = [
    {
      id: 1,
      name: 'How it works',
      link: '/',
    },
    {
      id: 2,
      name: 'Contact us',
      link: WebsiteRoutes.CONTACT_US,
    },
    // {
    //   id: 3,
    //   name: 'About us',
    //   link: '/about-us',
    // },
  ];

  return (
    <header className="bg-off-white fixed top-0 left-0 w-full z-30 px-4 lg:px-12 xl:px-0 py-4">
      <nav className=" xl:w-5/6 mx-auto flex items-center justify-between">
        <Link href="/">
          <div>
            <Image src={logo} alt="secret gifter logo" />
          </div>
        </Link>

        <ul className="hidden lg:flex items-center gap-x-8">
          {navItems?.map((item) => (
            <Link
              className={`text-base ${
                route === item.link ? 'text-black' : 'text-gray-600'
              } hover:text-black transition-all`}
              key={item.id}
              href={item.link}
            >
              {item.name}
            </Link>
          ))}
        </ul>

        <a href="https://organiser.mysecretgifter.com/sign-up" target="_blank">
          <Button
            className={`text-sm hidden lg:block bg-forest-green capitalize ${
              shaking ? 'animate-shaking' : ''
            }`}
          >
            create account
          </Button>
        </a>

        <button
          onClick={() => setSidebar(!sidebar)}
          className="z-[60] flex lg:hidden flex-col justify-center items-center"
        >
          <span
            className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
              sidebar ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
            }`}
          ></span>

          <span
            className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
              sidebar ? 'opacity-0' : 'opacity-100'
            }`}
          ></span>

          <span
            className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
              sidebar ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
            }`}
          ></span>
        </button>
      </nav>

      <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
    </header>
  );
};

export default Header;
