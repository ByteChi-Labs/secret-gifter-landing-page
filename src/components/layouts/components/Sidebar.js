import React from 'react';
import Link from 'next/link';
// import { closeBlack } from '../../../assets/svgs';

import { Button } from '@material-tailwind/react';
import { WebsiteRoutes } from '@/websiteRoutes';

const Sidebar = ({ sidebar, setSidebar }) => {
  const closeSideBar = () => {
    if (sidebar) {
      setSidebar(false);
    }
  };

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
    {
      id: 3,
      name: 'About us',
      link: WebsiteRoutes.ABOUT_US,
    },
  ];

  return (
    <>
      <div
        className={`fixed top-0  bottom-0 h-full  z-50  w-80 sm:w-96  text-gray-600 text-center  lg:hidden transition-all ease-in-out duration-300 ${
          sidebar ? 'right-0' : '-right-96'
        } `}
      >
        <ul className="h-full flex flex-col justify-center items-center  bg-white gap-y-8">
          {navItems?.map((item) => (
            <Link href={item.link} key={item?.id}>
              {item.name}
            </Link>
          ))}

          <a
            onClick={closeSideBar}
            href="https://organiser.mysecretgifter.com/sign-up"
            target="_blank"
          >
            <Button className="bg-forest-green capitalize">
              {' '}
              create account
            </Button>
          </a>
        </ul>
      </div>
      {/* overlay */}
      {sidebar && (
        <div
          onClick={closeSideBar}
          className="h-full w-full z-20 bg-black/20 fixed top-0 right-0 bottom-0"
        ></div>
      )}
    </>
  );
};

export default Sidebar;
