import React from 'react';
import Image from 'next/image';
import { Button } from '@material-tailwind/react';

import { heroImage, greenRibbon } from '../../../public/assets/images';

const Hero = () => {
  return (
    <>
      <div className="relative px-4 lg:px-12  xl:w-5/6 mx-auto py-20 lg:py-36 grid grid-cols-1 lg:grid-cols-8 mt-6 bg-white lg:shadow-md text-black rounded-xl  ">
        <Image
          className="w-40 md:w-56 absolute -left-4 md:-right-8 lg:-left-8 -top-16 "
          src={greenRibbon}
          alt="green knotted ribbon"
        />

        <div className="lg:col-span-5  self-center ">
          <h1 className="font-bold text-3xl">
            This is the main header for this page
          </h1>

          <p className="lg:w-2/3 my-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </p>

          <Button className="mt-4 bg-[#007E29] capitalize px-12 text-base rounded-lg">
            get started
          </Button>
        </div>

        <div className="mt-10 lg:absolute -right-16 bottom-0">
          <Image src={heroImage} alt="several gifts piled ontop each other" />
        </div>
      </div>

      {/* <div className="bg-white text-black pt-12 flex flex-col gap-y-4 justify-center items-center mt-6 rounded-xl h-main px-4 lg:px-12 xl:px-0  xl:w-5/6 mx-auto">
        <h1 className="font-bold text-3xl">
          This is the main header of this webpage
        </h1>

        <p className="lg:w-2/3 lg:text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book.
        </p>

        <Button className="bg-forest-green capitalize px-12 text-lg">
          get started
        </Button>

        <div className="">
          <Image
            className=""
            src={heroImage}
            alt="several gifts piled ontop each other"
          />
        </div>
      </div> */}
    </>
  );
};

export default Hero;
