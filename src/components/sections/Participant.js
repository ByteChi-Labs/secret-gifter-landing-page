import React from 'react';
import Image from 'next/image';

import {
  choose1,
  choose2,
  wish1,
  wish2,
  mail1,
  mail2,
} from '../../../public/assets/images';

const Participant = ({ tab }) => {
  return (
    <div className={tab === 'participants' ? 'block' : 'hidden'}>
      <div>
        <article>
          <div className="flex items-baseline gap-x-2 lg:gap-x-4">
            <span className="font-bold block text-5xl lg:text-9xl text-forest-green">
              1
            </span>

            <div>
              <h3 className="font-bold text-2xl lg:text-5xl text-forest-green">
                Get invite link for mail
              </h3>

              <p className="lg:w-1/2 mt-2">
                Your journey on Secret Gifter begins with a personalized invite
                link sent to your email. Click, create your account, and step
                into the world of surprises effortlessly.
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center lg:w-2/3 ml-auto  gap-y-8 mt-8">
            <div className="">
              <Image src={mail1} alt="create account" />
            </div>
            <div className="flex-1">
              <Image src={mail2} alt="create account" />
            </div>
          </div>
        </article>
      </div>

      <div className="py-20 ">
        <article>
          <div className="lg:w-[60%] ml-auto  flex items-baseline justity-end gap-x-2 lg:gap-x-4  ">
            <span className="  font-bold block text-5xl lg:text-9xl text-forest-green">
              2
            </span>

            <div className=" flex-1">
              <h3 className="font-bold text-2xl lg:text-5xl text-forest-green">
                Create Wish-list
              </h3>

              <p className="mt-2">
                Take the next step as a participant—create a wishlist of your
                heart&apos;s desires within the fixed range. Get ready to be
                pleasantly surprised as Secret Gifter brings your wishes to
                life!
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center lg:w-2/3 ml-auto gap-x-20 gap-y-8 mt-8">
            <div className="">
              <Image src={wish2} alt="create event mobile" />
            </div>
            <div className="flex-1">
              <Image src={wish1} alt="create event desktop" />
            </div>
          </div>
        </article>
      </div>

      <div>
        <article>
          <div className="flex items-baseline gap-x-2 lg:gap-x-4">
            <span className="font-bold block text-5xl lg:text-9xl text-forest-green">
              3
            </span>

            <div>
              <h3 className="font-bold text-2xl lg:text-5xl text-forest-green">
                Choose a participant to gift
              </h3>

              <p className="lg:w-1/2 mt-2">
                Select your gift exchange partner with a simple click on Secret
                Gifter. Our fully randomized and transparent process guarantees
                a fair and enjoyable experience for all participants.
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center lg:w-2/3 ml-auto gap-x-20 gap-y-8 mt-8">
            <div className="">
              <Image src={choose2} alt="choose participant" />
            </div>
            <div className="flex-1">
              <Image src={choose1} alt="choose participant" />
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Participant;
