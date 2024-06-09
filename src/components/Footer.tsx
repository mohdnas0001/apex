import React from "react";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 lg:mt-10">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <div className="flex w-full flex-col">
              <p className="font-sans text-base font-bold leading-10">APEX</p>
              <p className="font-sans text-lg font-medium">
                For further enquiry please reach out on hi@getapex.tech
              </p>
            </div>
             <div className="flex w-[120px] justify-start items-center ">
      <div className="w-1/3 ">
        <Image
          src="/X.svg"
          alt="Description for Image 1"
          width={30}
          height={30}
          className="rounded-lg"
        />
      </div>
      <div className="w-1/3 ">
       <Image
          src="/Linkedin.svg"
          alt="Description for Image 1"
          width={30}
          height={30}
          className="rounded-lg"
        />
      </div>
      <div className="w-1/3 ">
        <Image
          src="/Facebook.svg"
          alt="Description for Image 1"
          width={30}
          height={30}
          className="rounded-lg"
        />
      </div>
    </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
            <div className="font-sans">
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                Company
              </h2>
              <ul className="font-sans text-base font-medium text-black dark:text-gray-400">
                <li className="mb-4">
                  <a href="" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li className="mb-4">
                  <a href="" className="hover:underline">
                    Teams
                  </a>
                </li>
                <li className="mb-4">
                  <a href="" className="hover:underline">
                    Innovations
                  </a>
                </li>
                <li>
                  <a href="" className="hover:underline">
                    Impact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                Services
              </h2>
              <ul className="font-sans text-base font-medium text-black dark:text-gray-400">
                <li className="mb-4">
                  <a href="" className="hover:underline">
                    Join hiring pool
                  </a>
                </li>
                <li className="mb-4">
                  <a href="" className="hover:underline">
                    Recruitment
                  </a>
                </li>
                <li className="mb-4">
                  <a href="" className="hover:underline">
                    Cyber Security
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                Resources
              </h2>
              <ul className="font-sans text-base font-medium text-black dark:text-gray-400">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Faqs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Apex Commuinity
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="font-sans text-base dark:text-gray-400 sm:text-center">
            © 2024{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Apex Technologies™
            </a>
            . All Rights Reserved.
          </span>
          <div className="mt-4 flex items-center gap-2 font-sans text-base sm:mt-0 sm:justify-center">
            <p>Terms</p>
            <svg
              width="6"
              height="6"
              viewBox="0 0 6 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="3" cy="3" r="3" fill="#D9D9D9" />
            </svg>

            <p>Privacy</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
