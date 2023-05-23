"use client";
import Image from "next/image";
import Logo from "../assets/logo.png";
import Google from "../assets/google.svg";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
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
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
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

        <div className="flex flex-row items-center gap-8">
          <label className="cursor-pointer label gap-2">
            <input
              type="checkbox"
              checked={checked}
              className="checkbox checkbox-secondary"
              onClick={() => setChecked(!checked)}
            />
            <span className="label-text">Remember for 30 days</span>
          </label>
          <span className="label-text cursor-pointer text-blue-400">
            Forgot Password
          </span>
        </div>

        <div className="space-y-4">
          <button className="btn btn-block">Sign In</button>
          <button className="btn btn-block gap-4">
            <Image src={Google} alt="Google" />
            <p>Sign in with Google</p>
          </button>
        </div>

        <Link href={"/register"}>
          <p className="text-sm cursor-pointer mt-4">
            Don&lsquo;t have an account?
            <span className="text-blue-400">Sign up</span>
          </p>
        </Link>
      </div>
    </main>
  );
}
