"use client";
import Image from "next/image";
import Logo from "../../public/logo.png";
import { useState } from "react";
import Link from "next/link";

export default function CreateAccount() {
  const [checked, setChecked] = useState(false);
  return (
    <main className="flex flex-col sm:flex-row gap-4 sm:gap-8 md:gap-16 lg:gap-32 xl:gap-64 min-h-screen p-4 sm:p-6 md:p-8 lg:p-16 items-center justify-center">
      <Image src={Logo} alt="logo" />
      <div className="space-y-4">
        <div className="mb-8">
          <p className="text-center font-bold text-lg sm:text-xl md:text-1xl lg:text-3xl">
            Log in to your account
          </p>
          <p className="text-center font-light text-sm sm:text-base md:text-lg lg:text-1xl">
            Welcome back! Please enter your details.
          </p>
        </div>

        <div className="space-y-2">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="input input-bordered border-2 w-full"
            />
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered border-2 w-full"
            />
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered border-2 w-full"
            />
          </div>
        </div>

        <div className="space-y-4">
          <button className="btn btn-block">Get Started</button>
        </div>

        <Link href={"/"}>
          <p className="text-sm cursor-pointer mt-4">
            Already have an account?{" "}
            <span className="text-blue-400">Sign in</span>
          </p>
        </Link>
      </div>
    </main>
  );
}
