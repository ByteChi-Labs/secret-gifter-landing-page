import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const navItems = [
    {
      id: 1,
      name: 'How it works',
      link: '/features',
    },
    {
      id: 2,
      name: 'Contact us',
      link: '/contact-us',
    },
    {
      id: 3,
      name: 'About us',
      link: '/about-us',
    },
  ];

  const socials = [
    {
      id: 1,
      name: 'Instagram',
      link: '/features',
    },
    {
      id: 2,
      name: 'Twitter',
      link: '/contact-us',
    },
    {
      id: 3,
      name: 'LinkedIn',
      link: '/about-us',
    },
  ];

  return (
    <footer className="bg-white">
      <div className="py-4 px-4 lg:px-8 xl:px-0 xl:w-5/6 mx-auto flex flex-wrap gap-y-4 justify-between items-center">
        <div className="font-bold">SecretGifter</div>

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
            <Link
              className={`text-sm text-black hover:text-black transition-all`}
              key={item.id}
              href={item.link}
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </div>

      <div className="border-t border-gray-500 py-4 text-center">
        © 2023 ByteChi Labs. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
