import React from 'react';
import Image from 'next/image';
import { Button } from '@material-tailwind/react';
import { newsletterAlert } from '../../../public/assets/images';

const Newsletter = () => {
  return (
    <section className="px-4 lg:px-8 xl:px-0 py-10 lg:py-0 relative bg-forest-green h-fit lg:h-[60vh] lg:flex items-center justify-center">
      <div className="hidden lg:block absolute -top-12 left-36 ">
        <Image src={newsletterAlert} alt="holiday bells" />
      </div>

      <div className="lg:hidden">
        <Image
          className="w-48 mx-auto"
          src={newsletterAlert}
          alt="holiday bells"
        />
      </div>

      <div className="mt-8 lg:mt-0 lg:w-1/2 ml-auto ">
        <h3 className="font-semibold text-2xl lg:text-3xl text-white">
          Get early updates from us
        </h3>

        <p className="text-off-white mt-2 lg:w-2/3 text-base">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy
          text.
        </p>

        <form className="mt-4">
          <label className="block capitalize text-white text-lg">
            email address
          </label>

          <div className="flex items-center gap-4 lg:w-2/3">
            <input
              className="flex-1 py-2 px-2 bg-white/40 text-white placeholder-white border rounded border-white focus:shadow-none focus:border-forest-green focus:outline-0 "
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
