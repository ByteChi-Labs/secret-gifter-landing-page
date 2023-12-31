import React, { useState } from 'react';
import Organiser from './Organiser';
import Participant from './Participant';
import { Animator } from '../layouts/components';

const HowItWorks = () => {
  const [tab, setTab] = useState('organisers');

  return (
    <section className="my-20 py-16">
      <div className="text-center">
        <div className="w-fit mx-auto">
          <Animator data_aos_delay="100">
            <h2 className=" w-fit animate-typing relative after:content-[''] after:block after:h-[10px] after:w-1.5 after:absolute after:-right-1 after:top-1/4 after:bg-white whitespace-nowrap overflow-hidden font-semibold text-xl lg:text-4xl">
              How Secret Gifter Works.
            </h2>
          </Animator>
        </div>

        <Animator data_aos_delay="250">
          <p className="mt-2 text-sm md:text-base">
            Get started with secret gifter in three easy steps
          </p>
        </Animator>
      </div>

      <Animator data_aos_delay="400">
        <ul
          aria-label="how it works"
          className="mt-8 w-fit mx-auto flex items-center  bg-white p-2 rounded-lg shadow-sm"
        >
          <li
            className={`cursor-pointer rounded-lg px-4 py-2 ${
              tab === 'organisers' ? 'bg-deep-red text-white' : 'text-gray-600'
            }`}
            onClick={() => setTab('organisers')}
          >
            Organisers
          </li>
          <li
            className={`cursor-pointer rounded-lg px-4 py-2 ${
              tab === 'participants'
                ? 'bg-deep-red text-white'
                : 'text-gray-600'
            }`}
            onClick={() => setTab('participants')}
          >
            Participants
          </li>
        </ul>
      </Animator>

      <article className="xl:w-5/6 mx-auto mt-8 px-4 lg:px-8 xl:px-0">
        {tab === 'organisers' && <Organiser />}
        {tab === 'participants' && <Participant />}
      </article>
    </section>
  );
};

export default HowItWorks;
