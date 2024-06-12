"use client";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const linkStyle =
    "block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500";

  const links = [
    { name: "About us", href: "#", current: true },
    { name: "Innovation", href: "#" },
    { name: "Impact", href: "#" },
    { name: "Services", href: "#" },
    { name: "Team", href: "#" },
  ];

  return (
    <nav className="fixed start-0 top-0 z-20 w-full border-b border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-900">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center whitespace-nowrap font-sans text-base font-bold text-[#18181B] dark:text-white">
            APEX
          </span>
        </a>
        <div className="flex flex-row items-center justify-between space-x-3 font-sans md:order-2 md:space-x-0 lg:gap-2 rtl:space-x-reverse">
          <p className="hidden md:block">Get Started</p>
          {/* <button
            type="button"
            className="hidden md:block rounded-lg border border-gray-400 bg-white px-2 py-1 text-center font-sans text-xs font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:px-4 md:py-2 lg:text-sm"
          >
            Join community
          </button> */}

          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
            aria-controls="navbar-sticky"
            aria-expanded={isOpen}
            onClick={toggleNavbar}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between ${isOpen ? "block" : "hidden"} w-full md:order-1 md:flex md:w-auto`}
          id="navbar-sticky"
        >
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-sans font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900 rtl:space-x-reverse">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`${linkStyle} ${link.current ? "bg-green-500 font-sans text-base leading-6 text-white md:bg-transparent md:text-gray-900 md:dark:text-green-500" : ""}`}
                  aria-current={link.current ? "page" : undefined}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              {/* <button
                type="button"
                className="rounded-lg border border-gray-400 bg-white px-2 py-1 text-center font-sans text-xs font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden "
              >
                Join community
              </button> */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
