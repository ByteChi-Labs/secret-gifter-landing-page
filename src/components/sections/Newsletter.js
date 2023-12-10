import React from 'react';
import Image from 'next/image';
import { Button } from '@material-tailwind/react';
import { newsletterAlert } from '../../../public/assets/images';

const Newsletter = () => {
  return (
    <section className="px-4 lg:px-8 xl:px-0 py-10 lg:py-20 xl:py-0 relative bg-forest-green h-fit xl:h-[60vh] lg:flex items-center justify-center">
      <div className="hidden lg:block absolute lg:-top-20 xl:-top-12 lg:left-4 xl:left-48 ">
        <Image src={newsletterAlert} alt="holiday bells" />
      </div>

      <div className="lg:hidden">
        <Image
          className="w-48 mx-auto"
          src={newsletterAlert}
          alt="holiday bells"
        />
      </div>

      <div className="mt-8 lg:mt-0 ml-auto lg:w-1/2  xl:w-1/2 ">
        <h3 className="font-semibold text-3xl  xl:text-5xl lg:w-3/4 text-white">
          Shipping you updates in real-time!
        </h3>

        <p className="text-off-white mt-2 xl:w-2/3 text-base">
          Become a cherished member and unlock a treasure trove of special
          perks, discounts, and exclusive offers. It&apos;s like joining a
          secret society of joy-spreading superheroes! Don&apos;t miss out on
          the fun – subscribe now and let the good vibes roll!
        </p>

        <form className="mt-4">
          <label className="block capitalize text-white text-lg">
            email address
          </label>

          <div className="flex items-center gap-4 lg:w-2/3">
            <input
              className="flex-1 py-2 px-2 bg-white/40 text-white placeholder-white border rounded border-transparent focus:shadow-none focus:border-white focus:outline-0 "
              type="email"
              placeholder="Enter your email address"
            />

            <Button className="bg-white text-black capitalize text-sm px-6 rounded">
              subscribe
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
