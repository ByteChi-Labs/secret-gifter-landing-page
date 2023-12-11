import { DM_Sans } from 'next/font/google';
import { useState } from 'react';
const dmSans = DM_Sans({ subsets: ['latin'] });

import axios from 'axios';

import Layout from '@/components/layouts/Layout';

import { Button } from '@material-tailwind/react';
import Head from 'next/head';

import { Newsletter } from '@/components/sections';
import { useForm } from 'react-hook-form';

import { toast } from 'react-toastify';

const ContactUs = () => {
  const [sending, setSending] = useState(false);
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
      attributes: {
        full_name: data.fullName,
        message: data.message,
      },
      emailBlacklisted: false,
      smsBlacklisted: false,
      listIds: [4],
      updateEnabled: false,
    };

    try {
      const res = await api.post('/contacts', subscribeData);

      if (res.status === 201) {
        toast.success('Your message was sent successfully');
        setSending(false);
        reset();
      }
    } catch (err) {
      setSending(false);
      toast.error('Something went wrong, please try again');
    }
  });

  return (
    <Layout>
      <Head>
        <meta charset="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />

        <meta name="description" content="My Secret Gifter" />

        <meta
          property="og:image"
          content="%PUBLIC_URL%/assets/icons/logo.svg"
        />
        <meta property="og:title" content=" My Secret Gifter" />
        <meta
          property="og:description"
          content="Add an element of surprise and joy to your social circle—because every occasion deserves a little Secret Gifter magic!"
        />

        <meta
          property="og:image"
          content="%PUBLIC_URL%/assets/icons/logo.svg"
        />

        <link
          rel="apple-touch-icon"
          href="%PUBLIC_URL%/assets/icons/logo.svg"
        />

        {/* <link rel="manifest" href="%PUBLIC_URL%/manifest.json" /> */}

        <title>Secret Gifter | Contact Us</title>
      </Head>
      <section className={`${dmSans.className} `}>
        <h1 className="px-4 lg:px-6 xl:px-0 xl:w-5/6 mx-auto  font-bold text-2xl lg:text-[36px] leading-10">
          Secret Gifter - Contact Us
        </h1>

        <div className="mb-20 py-16 px-4 lg:px-10 bg-white xl:w-5/6 mx-auto lg:shadow-sm rounded-xl   grid grid-cols-1 lg:grid-cols-8 gap-8 mt-6">
          <article className="lg:col-span-5 text-black  ">
            <h2 className="text-2xl lg:text-3xl font-semibold lg:w-2/3">
              Discover Seamless and Joyous Gift Exchanges
            </h2>
            <div className="lg:w-5/6">
              <p className="my-4">
                Experience the magic of Secret Gifter – where gift-giving
                becomes effortless, and memories are crafted. Join us for
                seamless and joyous exchanges that turn every gift into a
                delightful memory.
              </p>

              <p>
                Whether you have questions, suggestions, or just want to share
                the excitement, our contact portal is your gateway to the world
                of effortless gifting. Connect with the magic today!
              </p>
            </div>
          </article>

          <article className="lg:col-span-3">
            <form className="">
              <div>
                <label className="text-base text-newBlack">Full name</label>
                <input
                  name="fullName"
                  className="inputField w-full text-newBlack px-2 py-3 rounded border border-gray-300 focus:outline-0 focus:border-primary"
                  label="Full Name"
                  placeholder="Full Name"
                  {...register('fullName', {
                    required: true,
                  })}
                />
                {errors.fullName && (
                  <div className="text-red-400 text-sm">Full name required</div>
                )}
              </div>
              <div className="my-4">
                <label className="text-base text-newBlack">Email address</label>
                <input
                  name="email"
                  className="inputField w-full text-newBlack px-2 py-3 rounded border border-gray-300 focus:outline-0 focus:border-primary"
                  label="Email Address"
                  placeholder="Enter email"
                  {...register('email', {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  })}
                />
                {errors.email && (
                  <div className="text-red-400 text-sm">Email is required</div>
                )}
              </div>
              <div>
                <label className="text-base text-newBlack">
                  Enter your message
                </label>
                <textarea
                  name="message"
                  label="Enter your message"
                  className="areaField w-full text-newBlack px-2 py-3 border border-gray-300 rounded focus:outline-0 focus:border-primary"
                  placeholder="Type in your message"
                  rows="3"
                  {...register('message', {
                    required: true,
                  })}
                ></textarea>
                {errors.message && (
                  <div className="text-red-400 text-sm">
                    Message is required
                  </div>
                )}
              </div>
              <div className="lg:text-center mt-6">
                <Button
                  onClick={submitForm}
                  className="w-full mt-4 bg-forest-green capitalize px-12 text-base rounded-lg"
                >
                  {sending ? 'Sending..' : 'send'}
                </Button>
              </div>
            </form>
          </article>
        </div>

        <Newsletter />
      </section>
    </Layout>
  );
};

export default ContactUs;
