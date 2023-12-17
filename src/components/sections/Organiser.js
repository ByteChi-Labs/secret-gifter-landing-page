import React from 'react';
import Image from 'next/image';

import {
  account1,
  account2,
  event1,
  event2,
  invite1,
  invite2,
} from '../../../public/assets/images';
import { Animator } from '../layouts/components';

const Organiser = () => {
  return (
    <section>
      <div>
        <article>
          <div className="flex items-baseline gap-x-2 lg:gap-x-4">
            <Animator data_aos_delay="400">
              <span className="font-bold block text-5xl lg:text-9xl text-forest-green">
                1
              </span>
            </Animator>

            <div>
              <Animator data_aos_delay="400">
                <h3 className="font-bold text-2xl lg:text-5xl lg:w-1/2 text-forest-green">
                  Create secret gifter account
                </h3>
              </Animator>

              <Animator data_aos_delay="400">
                <p className="lg:w-1/2 mt-2">
                  Create an account on Secret Gifter effortlessly! Just use your
                  email to set up a password-protected organizer account. This
                  grants you exclusive access to the Secret Gifter dashboard,
                  where the magic of seamless gift exchanges unfolds.
                </p>
              </Animator>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center lg:w-2/3 ml-auto gap-x-20 gap-y-8 mt-8">
            <Animator data_aos_delay="550">
              <div className="">
                <Image src={account1} alt="secret gifter create account" />
              </div>
            </Animator>
            <Animator data_aos_delay="550">
              <div className="flex-1">
                <Image src={account2} alt="secret gifter create account" />
              </div>
            </Animator>
          </div>
        </article>
      </div>

      <div className="py-20 ">
        <article>
          <div className="lg:w-[60%] ml-auto  flex items-baseline justity-end gap-x-2 lg:gap-x-4  ">
            <Animator data_aos_delay="100">
              <span className="  font-bold block text-5xl lg:text-9xl text-forest-green">
                2
              </span>
            </Animator>

            <div className=" flex-1">
              <Animator data_aos_delay="200">
                <h3 className="font-bold text-2xl lg:text-5xl text-forest-green">
                  Create an event
                </h3>
              </Animator>

              <Animator data_aos_delay="400">
                <p className="mt-2">
                  After signup, easily plan gift exchanges for any occasion –
                  Christmas, birthdays, and more. One-click event creation on
                  Secret Gifter makes it simple and seamless.
                </p>
              </Animator>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center  lg:items-end lg:w-2/3 ml-auto gap-x-20 gap-y-8 mt-8">
            <Animator data_aos_delay="400">
              <div className="">
                <Image src={event1} alt="secret gifter create event mobile" />
              </div>
            </Animator>

            <Animator data_aos_delay="400">
              <div className>
                <Image src={event2} alt="secret gifter create event desktop" />
              </div>
            </Animator>
          </div>
        </article>
      </div>

      <div>
        <article>
          <div className="flex items-baseline gap-x-2 lg:gap-x-4">
            <Animator data_aos_delay="100">
              <span className="font-bold block text-5xl lg:text-9xl text-forest-green">
                3
              </span>
            </Animator>

            <div>
              <Animator data_aos_delay="200">
                <h3 className="font-bold text-2xl lg:text-5xl text-forest-green">
                  Invite participants
                </h3>
              </Animator>

              <Animator data_aos_delay="400">
                <p className="lg:w-1/2 mt-2">
                  Invite participants hassle-free! Share event details via email
                  or a simple link copied to their inboxes. With Secret Gifter,
                  seamless event participation is just a click away.
                </p>
              </Animator>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row  items-center lg:items-end lg:w-2/3 ml-auto gap-x-20 gap-y-8 mt-8">
            <Animator data_aos_delay="400">
              <div className="">
                <Image src={invite1} alt="secret gifter invite demo" />
              </div>
            </Animator>

            <Animator data_aos_delay="400">
              <div className="flex-1">
                <Image src={invite2} alt="secret gifter add participants" />
              </div>
            </Animator>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Organiser;
