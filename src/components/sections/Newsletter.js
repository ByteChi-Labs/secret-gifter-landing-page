import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@material-tailwind/react';
import { useForm } from 'react-hook-form';
import { newsletterAlert } from '../../../public/assets/images';

import axios from 'axios';

const Newsletter = () => {
  const [sending, setSending] = useState(false);
  const [showMessage, setShowMessage] = useState({
    isOpen: false,
    message: '',
    status: '',
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const apiKey = process.env.BREVO_API_KEY;

  const api = axios.create({
    baseURL: 'https://api.sendinblue.com/v3',
    headers: {
      'api-key': apiKey,
      accept: 'application/json',
      'content-type': 'application/json',
    },
  });

  const submitForm = handleSubmit(async (data) => {
    setSending(true);

    const subscribeData = {
      email: data.email,
      emailBlacklisted: false,
      smsBlacklisted: false,
      listIds: [3],
      updateEnabled: false,
    };

    try {
      const res = await api.post('/contacts', subscribeData);

      setSending(false);

      if (res?.status === 201) {
        reset();

        setShowMessage({
          isOpen: true,
          status: 'success',
          message: 'Welcome to the Secret Gifter community',
        });

        setTimeout(
          () =>
            setShowMessage({
              ...showMessage,
              isOpen: false,
            }),
          3000,
        );
      }
    } catch (err) {
      setSending(false);

      setShowMessage({
        isOpen: true,
        message: 'Something went wrong, please try again',
        status: 'error',
      });

      setTimeout(
        () =>
          setShowMessage({
            ...showMessage,
            isOpen: false,
          }),
        3000,
      );
    }
  });

  return (
    <section className="px-4 lg:px-8 xl:px-0 py-10 lg:py-20 xl:py-0 relative bg-forest-green h-fit xl:h-[60vh] lg:flex items-center justify-center">
      <div className="hidden lg:block absolute lg:-top-20 xl:-top-12 lg:left-4 xl:left-36 ">
        <Image src={newsletterAlert} alt="secret gifteer holiday bells" />
      </div>

      <div className="lg:hidden">
        <Image
          className="w-48 mx-auto"
          src={newsletterAlert}
          alt="secret gifter holiday bells"
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
              className="flex-1 py-2 px-2 bg-white/20 text-white placeholder-white border rounded border-transparent focus:shadow-none focus:border-white focus:outline-0 "
              type="email"
              placeholder="Enter your email address"
              {...register('email', {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              })}
            />

            <Button
              onClick={submitForm}
              className="bg-white text-black capitalize text-sm px-6 rounded"
            >
              {sending ? 'Subscribing..' : 'Subcribe'}
            </Button>
          </div>
          {errors.email && (
            <div className="text-white text-sm mt-2">
              Invalid: Email is required
            </div>
          )}
        </form>

        {showMessage?.isOpen && (
          <div
            className={`text-center !px-4 py-2 mt-4 w-fit rounded ${
              showMessage?.status === 'success'
                ? 'text-green-500 bg-white'
                : 'text-red-500 bg-white '
            }`}
          >
            {showMessage?.message}
          </div>
        )}
      </div>
    </section>
  );
};

export default Newsletter;
