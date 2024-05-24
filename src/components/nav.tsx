"use client";
import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full shadow-gray-900 shadow-md">
      <div className="px-4 max-w-7xl mx-auto py-4 mb-10 flex items-center justify-between lg:py-14 lg:px-auto">
        <div className="icon-app w-1/4">
          <Link href={"/"}>
            <h1 className="hover:font-bold transition-all hover:scale-105">
              AlulCode
            </h1>
          </Link>
        </div>
        <div className="text-center text-sm hover:font-bold transition-all hover:scale-105 hidden lg:block w-2/4">
          <span>Junior Web Developer Indonesia</span>
        </div>
        <div className="w-1/4 flex justify-end">
          <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
          <ul
            className={`flex-col gap-14 absolute top-16 right-0 bg-black/40 backdrop-filter backdrop-blur-sm shadow-lg p-8 w-screen z-40 rounded-lg transform ${menuOpen ? "translate-x-0" : "translate-x-full"} transition-transform lg:static lg:flex lg:flex-row lg:gap-5 lg:transform-none lg:bg-transparent lg:shadow-none lg:p-0`}
          >
            <Link href={"/resume"}>
              <li className="text-white text-sm lg:text-gray-300 hover:font-bold transition-all hover:scale-105 ">
                Resume
              </li>
            </Link>
            <Link href={"/project"}>
              <li className="text-white text-sm lg:text-gray-300 hover:font-bold transition-all hover:scale-105 mt-5 md:mt-0">
                Project
              </li>
            </Link>
            <Link href={"/achivement"}>
              <li className="text-white text-sm lg:text-gray-300 hover:font-bold transition-all hover:scale-105 mt-5 md:mt-0">
                Achivement
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}
