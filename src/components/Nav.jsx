import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <div className="py-5 shadow-nav bg-white">
      <div className="container xl:max-w-[1160px] mx-auto px-4">
        <div className="flex justify-between items-center">
          <a className="font-cinzel text-2xl font-bold text-black" href="">
            J.ALISSA
          </a>
          <ul className="flex gap-6 items-center">
            <li>
              <Link
                className="text-black font-normal text-xl text-opacity-70 font-cinzel hover:text-opacity-100 transition-opacity ease-linear duration-300"
                href=""
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="text-black font-normal text-xl text-opacity-70 font-cinzel hover:text-opacity-100 transition-opacity ease-linear duration-300"
                href=""
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                className="text-black font-normal text-xl text-opacity-70 font-cinzel hover:text-opacity-100 transition-opacity ease-linear duration-300"
                href=""
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="text-black font-normal text-xl text-opacity-70 font-cinzel hover:text-opacity-100 transition-opacity ease-linear duration-300"
                href=""
              >
                Books
              </Link>
            </li>
            <li>
              <Link
                className="text-black font-normal text-xl text-opacity-70 font-cinzel hover:text-opacity-100 transition-opacity ease-linear duration-300"
                href=""
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                className="text-black font-normal text-xl text-opacity-70 font-cinzel hover:text-opacity-100 transition-opacity ease-linear duration-300"
                href=""
              >
                Client Albums
              </Link>
            </li>
            <li>
              <Link
                className="text-black font-normal text-xl text-opacity-70 font-cinzel hover:text-opacity-100 transition-opacity ease-linear duration-300"
                href=""
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
