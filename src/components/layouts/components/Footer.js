import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { logo } from '../../../../public/assets/icons';
import { ExternalRoutes, WebsiteRoutes } from '@/websiteRoutes';

const Footer = () => {
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

  const socials = [
    {
      id: 1,
      name: 'Instagram',
      link: ExternalRoutes.INSTAGRAM,
    },
    {
      id: 2,
      name: 'Twitter',
      link: ExternalRoutes.TWITTER,
    },
    {
      id: 3,
      name: 'LinkedIn',
      link: ExternalRoutes.LINKEDIN,
    },
  ];

  return (
    <footer className="bg-white ">
      <div className="py-4 px-4 lg:px-8 xl:px-0 xl:w-5/6 mx-auto flex flex-wrap gap-y-4 justify-between items-center">
        <Link href="/">
          <div>
            <Image src={logo} alt="secret gifter logo" />
          </div>
        </Link>

        <ul
          aria-label="footer-links"
          className="flex items-center gap-4 md:gap-8"
        >
          {navItems?.map((item) => (
            <Link
              className={`text-sm text-black hover:text-black transition-all`}
              key={item.id}
              href={item.link}
            >
              {item.name}
            </Link>
          ))}
        </ul>

        <ul
          aria-label="social-media-links"
          className="flex items-center gap-4 md:gap-8"
        >
          {socials?.map((item) => (
            <a
              className={`text-sm text-black hover:text-black transition-all underline`}
              key={item.id}
              href={item.link}
              target="_blank"
              norefer
            >
              {item.name}
            </a>
          ))}
        </ul>
      </div>

      <div className=" border-t border-gray-500 py-4 text-center">
        © 2023 ByteChi Labs. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
//  <footer className="bg-white">
//    <div className="py-4 px-4 lg:px-8 xl:px-0 xl:w-5/6 mx-auto flex flex-wrap gap-y-4 justify-between items-center">
//      <Link href="/">
//        <div>
//          <Image src={logo} alt="secret gifter logo" />
//        </div>
//      </Link>

//      <ul
//        aria-label="footer-links"
//        className="flex items-center gap-4 md:gap-8"
//      >
//        {navItems?.map((item) => (
//          <Link
//            className={`text-sm text-black hover:text-black transition-all`}
//            key={item.id}
//            href={item.link}
//          >
//            {item.name}
//          </Link>
//        ))}
//      </ul>

//      <ul
//        aria-label="social-media-links"
//        className="flex items-center gap-4 md:gap-8"
//      >
//        {socials?.map((item) => (
//          <a
//            className={`text-sm text-black hover:text-black transition-all`}
//            key={item.id}
//            href={item.link}
//            target="_blank"
//            norefer
//          >
//            {item.name}
//          </a>
//        ))}
//      </ul>
//    </div>

//    <div className=" border-t border-gray-500 py-4 text-center">
//      © 2023 ByteChi Labs. All rights reserved.
//    </div>
//  </footer>;
