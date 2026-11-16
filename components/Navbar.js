"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const showNavbar = ["/", "/generate"].includes(pathname);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {showNavbar && (
        <nav className="bg-white w-[92vw] lg:w-[85xl] xl:w-[80vw] left-1/2 -translate-x-1/2 rounded-full fixed p-3 lg:p-4 px-6 lg:px-7 top-4 lg:top-7 flex justify-between items-center z-50 shadow-md">
          <div className="logo flex items-center gap-6 xl:gap-10">
            <Link href={"/"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 494.1 100"
                role="img"
                aria-label="Linktree"
                width="118"
                height="28"
                className="block h-7 lg:h-8 text-black shrink-0"
              >
                <path
                  fill="currentColor"
                  d="M0 10.7h14.2v74.5h39.3v13.1H0V10.7zm67.5 0c4.8 0 8.9 3.7 8.9 8.6 0 4.9-4 8.8-8.9 8.8s-8.9-3.9-8.9-8.8c0-4.8 3.9-8.6 8.9-8.6zm-7 24.5h13.6v63.2H60.5V35.2zm21.7 0h13.6v8.7c4-6.7 10.9-10.4 20.1-10.4 14.8 0 24 11.5 24 29.7v35.1h-13.6V64.5c0-11.8-5.2-18.5-14.5-18.5-10.3 0-15.9 7-15.9 19.6v32.7H82.2V35.2zm64.9-24.5h13.6v55.4l25.4-30.9h17.1l-27.1 31.6 27.1 31.5h-17.1l-25.4-30.8v30.8h-13.6V10.7zm61.5 8.4h13.9v16.1h16.2v11.3h-16.2V79c0 4.1 2.5 6.7 6.5 6.7h9.1v12.7h-10.9c-11.8 0-18.5-7-18.5-19.4l-.1-59.9zm37 16.1h12.6V43c3.4-6 9-9.5 15.9-9.5 2.1 0 3.2.1 4.8.6v12.6c-.9-.2-2.3-.5-5.1-.5-10 0-15.5 8.4-15.5 22.8v29.2h-13.6v-63h.9zm65.2-1.7c15 0 31.3 9 31.3 34.7V70h-48.8c1.1 11.3 7.6 17.5 18.6 17.5 7.9 0 14.5-4.2 16-10.1h13.9c-1.5 12.6-14.7 22.6-30 22.6-19.6 0-32-12.7-32-33.3 0-18.3 11.9-33.2 31-33.2zm16.7 25.3c-1.9-7.8-8.1-12.7-16.7-12.7-8.3 0-14.2 5-16.5 12.7h33.2zm51.6-25.3c15 0 31.3 9 31.3 34.7V70h-48.8c1.1 11.3 7.6 17.5 18.6 17.5 7.9 0 14.5-4.2 16-10.1H410C408.6 90 395.4 100 380.1 100c-19.6 0-32-12.7-32-33.3 0-18.3 11.9-33.2 31-33.2zm16.7 25.3c-1.9-7.8-8.1-12.7-16.8-12.7-8.3 0-14.2 5-16.5 12.7h33.3zm17.9-25.5H438l-17.3-16.4 9.5-9.7L446.7 24V0H461v24l16.5-16.8 9.5 9.7-17.3 16.4H494v13.6h-24.5L487 63.7l-9.5 9.5-23.7-23.7-23.7 23.7-9.5-9.5L438 46.8h-24.5V33.3h.2zm33.1 32.9h14.3v32.2h-14.3V66.2z"
                ></path>
              </svg>
            </Link>

            <ul className="hidden xl:flex gap-8 text-black font-medium">
              <Link href={"/solutions"}>
                <li>Solutions</li>
              </Link>
              <Link href={"/features"}>
                <li>Features</li>
              </Link>
              <Link href={"/intigrations"}>
                <li>Integrations</li>
              </Link>
              <Link href={"/resources"}>
                <li>Resources</li>
              </Link>
              <Link href={"/price"}>
                <li>Pricing</li>
              </Link>
            </ul>
          </div>

          <div className="hidden xl:flex gap-4 items-center">
            <button className="bg-gray-100 hover:bg-gray-200 text-black py-3 px-5 rounded-xl font-bold cursor-pointer transition-colors">
              Login
            </button>
            <button className="bg-gray-900 hover:bg-gray-800 py-3 px-7 rounded-full text-white font-bold cursor-pointer transition-colors">
              Sign up free
            </button>
          </div>

          <div className="flex xl:hidden items-center gap-2">
            <button className="bg-gray-900 text-white text-xs px-4 py-2.5 rounded-full font-bold">
              Sign up free
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-black focus:outline-none cursor-pointer"
              aria-label="Toggle Menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {isOpen && (
            <div className="absolute top-full left-0 mt-3 w-full bg-white rounded-3xl shadow-xl p-6 flex flex-col gap-4 xl:hidden border border-gray-100">
              <ul className="flex flex-col gap-4 text-black font-semibold text-lg">
                <Link href={"/solutions"} onClick={() => setIsOpen(false)}>
                  <li>Solutions</li>
                </Link>
                <Link href={"/features"} onClick={() => setIsOpen(false)}>
                  <li>Features</li>
                </Link>
                <Link href={"/intigrations"} onClick={() => setIsOpen(false)}>
                  <li>Integrations</li>
                </Link>
                <Link href={"/resources"} onClick={() => setIsOpen(false)}>
                  <li>Resources</li>
                </Link>
                <Link href={"/price"} onClick={() => setIsOpen(false)}>
                  <li>Pricing</li>
                </Link>
              </ul>
              <hr className="border-gray-200 my-1" />
              <div className="flex flex-col gap-3">
                <button className="bg-gray-100 text-black py-3 rounded-xl font-bold w-full cursor-pointer">
                  Login
                </button>
                <button className="bg-gray-900 text-white py-3 rounded-full font-bold w-full cursor-pointer">
                  Sign up free
                </button>
              </div>
            </div>
          )}
        </nav>
      )}
    </>
  );
};

export default Navbar;
