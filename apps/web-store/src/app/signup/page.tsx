'use client';
import { BenefitCard } from '@/components/BenefitCard';
import { benefits } from '@/data/benefits';
import Link from 'next/link';
import { useState } from 'react';

export default function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    console.log(firstName, lastName, email, password, confirmPassword);
  };

  return (
    <div className="flex h-screen p-6">
      {/* Left Section */}
      <div className="flex w-1/2 flex-col justify-center px-32">
        <div className="mb-10 text-2xl font-semibold">eKart</div>
        <form className="w-full max-w-md">
          <h2 className="text-3xl font-semibold">Create an account</h2>
          <p className="mt-2 text-sm text-gray-600">
            I already have an account{' '}
            <span className="cursor-pointer font-medium text-blue-600">
              <Link href="/signin">Sign in</Link>
            </span>
          </p>

          <div className="mt-6 flex flex-col gap-4">
            <div className="flex w-full flex-row justify-between gap-2">
              <input
                type="text"
                placeholder="First Name"
                className="rounded-md border px-4 py-2"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Last Name"
                className="rounded-md border px-4 py-2"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <input
              type="text"
              placeholder="Email"
              className="rounded-md border px-4 py-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                className="w-full rounded-md border px-4 py-2"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="absolute top-3 right-3 cursor-pointer text-gray-400">
                👁️
              </span>
              <p className="mt-1 mb-2 text-xs text-gray-500">
                Passwords must be at least 8 characters.
              </p>

              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full rounded-md border px-4 py-2"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <span className="absolute top-3 right-3 cursor-pointer text-gray-400">
                👁️
              </span>
              <p className="mt-1 text-xs text-gray-500">
                Password must be same as above.
              </p>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-600">
              <input type="checkbox" id="save-password" />
              <label htmlFor="save-password">Save the password</label>
            </div>

            <div className="flex items-start gap-2 text-sm text-gray-600">
              <input type="checkbox" id="offers" />
              <label htmlFor="offers" className="leading-tight">
                I would like to receive personalized commercial offers from
                eKart by email.
              </label>
            </div>

            <button
              type="submit"
              className="mt-2 rounded-md bg-red-500 py-2 text-white hover:bg-red-600"
              onClick={handleSignUp}
            >
              Create an account
            </button>

            <div className="text-center text-sm text-gray-500">
              or continue with
            </div>

            <div className="flex justify-center gap-3">
              <button className="flex items-center gap-2 rounded-md border px-4 py-2">
                <span>🌐</span> Google
              </button>
              <button className="flex items-center gap-2 rounded-md border px-4 py-2">
                <span>📘</span> Facebook
              </button>
              <button className="flex items-center gap-2 rounded-md border px-4 py-2">
                🍎 Apple
              </button>
            </div>
          </div>

          <div className="absolute bottom-4 text-xs text-gray-500">
            <p className="cursor-pointer hover:underline">Need help?</p>
            <p className="mt-2">© All rights reserved. Made by eKart.</p>
          </div>
        </form>
      </div>

      {/* Right Section */}
      <div className="flex w-1/2 flex-col justify-center rounded-2xl bg-gradient-to-r from-[#E7F0FD] to-[#ACCBEE] px-20">
        <h3 className="mb-10 text-center text-xl font-semibold">
          eKart account benefits
        </h3>

        <div className="grid grid-cols-2 gap-6">
          {benefits.map(({ icon, title }, index) => (
            <BenefitCard icon={icon} title={title} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
