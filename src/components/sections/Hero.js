import React from 'react';
import Image from 'next/image';
import { Button } from '@material-tailwind/react';

import { heroImage, greenRibbon } from '../../../public/assets/images';

const Hero = () => {
  return (
    <div className="relative px-4 lg:pl-12 pt-20  xl:w-5/6 mx-auto grid grid-cols-1 lg:grid-cols-8 gap-8 mt-6 bg-white lg:shadow-sm text-black rounded-xl  ">
      <Image
        className="w-40 h-30 md:h-auto md:w-56 absolute -left-4 md:-right-8 lg:-left-8 -top-16 "
        src={greenRibbon}
        alt="green knotted ribbon"
      />

      <div className="lg:col-span-4 self-center ">
        <h1 className="font-bold text-3xl">
          This is the main header for this page
        </h1>

        <p className="my-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book.
        </p>

        <Button className="mt-4 bg-forest-green capitalize px-12 text-base rounded-lg">
          get started
        </Button>
      </div>

      <div className="lg:col-span-4 ">
        <Image
          className=""
          src={heroImage}
          alt="several gifts piled ontop each other"
        />
      </div>
    </div>
  );
};

export default Hero;
