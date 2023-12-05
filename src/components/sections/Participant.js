import React from 'react';

const Participant = ({ tab }) => {
  return (
    <div className={tab === 'participants' ? 'block' : 'hidden'}>
      <div>
        <article>
          <h3 className="font-bold text-2xl lg:text-3xl">
            Get invite link from mail
          </h3>
          <p className="lg:w-1/2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:w-2/3 ml-auto mt-4">
            <div className="self-end bg-white border border-black h-48"></div>
            <div className="bg-black border border-black h-60"></div>
          </div>
        </article>
      </div>

      <div className="my-20 ">
        <article>
          <h3 className="font-bold text-2xl lg:text-3xl text-right">
            Create your wish-list
          </h3>
          <p className="lg:w-1/2 ml-auto text-right">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:w-2/3 ml-auto mt-4">
            <div className="self-end bg-white border border-black h-48"></div>
            <div className="bg-black border border-black h-60"></div>
          </div>
        </article>
      </div>

      <div>
        <article>
          <h3 className="font-bold text-2xl lg:text-3xl">
            Choose a participant to gift
          </h3>
          <p className="lg:w-1/2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:w-2/3 ml-auto mt-4">
            <div className="self-end bg-white border border-black h-48"></div>
            <div className="bg-black border border-black h-60"></div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Participant;
