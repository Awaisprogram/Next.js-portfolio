'use client';
import React, { useState } from 'react';
import Heading from '../components/heading';
import { Switch } from '@headlessui/react';

function Contact() {

  return (
    <>
      <div className='animation'>
        <Heading heading="Contact Me" />
        <div className="mx-auto  max-w-2xl text-center">
          <p className="pt-10 mt-2 text-lg leading-8 text-gray-200 ">
          Thank you for exploring my portfolio! If you have any questions or would like to collaborate, feel free to reach out. I'm always open to new opportunities and connections.
          </p>
        </div>
        <form action="#" method="POST" className="rounded mx-auto mt-2 max-w-xl sm:mt-20 bg-gradient-to-r from-gray-900 to-gray-500 p-10">
  <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
    {/* First Name */}
    <div>
      <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-white">
        First name
      </label>
      <div className="mt-2.5">
        <input
          id="first-name"
          name="first-name"
          type="text"
          autoComplete="given-name"
          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#77e675] sm:text-sm sm:leading-6"
        />
      </div>
    </div>

    {/* Last Name */}
    <div>
      <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-white">
        Last name
      </label>
      <div className="mt-2.5">
        <input
          id="last-name"
          name="last-name"
          type="text"
          autoComplete="family-name"
          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#77e675] sm:text-sm sm:leading-6"
        />
      </div>
    </div>

    {/* Company */}
    <div className="sm:col-span-2">
      <label htmlFor="company" className="block text-sm font-semibold leading-6 text-white">
        Company
      </label>
      <div className="mt-2.5">
        <input
          id="company"
          name="company"
          type="text"
          autoComplete="organization"
          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#77e675] sm:text-sm sm:leading-6"
        />
      </div>
    </div>

    {/* Email */}
    <div className="sm:col-span-2">
      <label htmlFor="email" className="block text-sm font-semibold leading-6 text-white">
        Email
      </label>
      <div className="mt-2.5">
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#77e675] sm:text-sm sm:leading-6"
        />
      </div>
    </div>

    {/* Phone Number */}
    <div className="sm:col-span-2">
      <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-white">
        Phone number
      </label>
      <div className="relative mt-2.5">
        <div className="absolute inset-y-0 left-0 flex items-center">
          <label htmlFor="country" className="sr-only">
            Country
          </label>
          <select
            id="country"
            name="country"
            className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#77e675] sm:text-sm"
          >
            <option>+92</option>
            <option>+91</option>
            <option>+93</option>
          </select>
        </div>
        <input
          id="phone-number"
          name="phone-number"
          type="tel"
          autoComplete="tel"
          className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#77e675] sm:text-sm sm:leading-6"
        />
      </div>
    </div>

    {/* Message */}
    <div className="sm:col-span-2">
      <label htmlFor="message" className="block text-sm font-semibold leading-6 text-white">
        Message
      </label>
      <div className="mt-2.5">
        <textarea
          id="message"
          name="message"
          rows={4}
          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#77e675] sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  </div>

  {/* Submit Button */}
  <div className="mt-10">
    <button
      type="submit"
      className="block w-full rounded-full bg-gradient-to-br from-green-300 via-green-400 to-green-700 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#77e675]"
    >
      Let's talk
    </button>
  </div>
</form>

      </div>
    </>
  );
}

export default Contact;
