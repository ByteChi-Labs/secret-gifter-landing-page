import React, { useState } from 'react';
import Organiser from './Organiser';
import Participant from './Participant';

const HowItWorks = () => {
  const [tab, setTab] = useState('organisers');

  return (
    <section className="my-20 ">
      <div className="text-center">
        <h2 className="font-semibold text-xl lg:text-4xl">
          How Secret Gifter Works
        </h2>

        <p className="mt-2 text-sm md:text-base">
          Begin using secret gifter in three easy steps
        </p>
      </div>

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
            tab === 'participants' ? 'bg-deep-red text-white' : 'text-gray-600'
          }`}
          onClick={() => setTab('participants')}
        >
          Participants
        </li>
      </ul>

      <div className="xl:w-5/6 mx-auto mt-8 px-4 lg:px-8 xl:px-0">
        <Organiser tab={tab} />
        <Participant tab={tab} />
      </div>
    </section>
  );
};

export default HowItWorks;
