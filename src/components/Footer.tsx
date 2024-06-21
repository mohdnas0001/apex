import React from "react";
import Image from "next/image";

const handle = "get_apex";

const twitterLink = `https://twitter.com/${handle}`;
const facebookLink = `https://www.facebook.com/${handle}`;
const instagramLink = `https://www.instagram.com/${handle}`;

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-white dark:bg-gray-900 lg:mt-10">
      <div className="relative mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <div className="flex w-full flex-col">
            <p className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Contact info</p>
      <p className="mb-4 font-sans text-xs font-medium text-gray-700 md:text-lg" >
        Nigeria 🇳🇬 : PLOT 1091 BLOCK C 2ND FLOOR MAINA COURT BUILDING, <br />
        HERBERT MARCAULAY WAY, CENTRAL BUSINESS DISTRICT, ABUJA, FCT 900103.
        <br /><br />
        USA 🇺🇸 : 13500 Lyndhurst Street, Austin, Texas 78717 United States.
        {/* <br /><br />
        Contact us: <a href="mailto:hi@getapex.tech" className="text-blue-600 hover:underline">hi@getapex.tech</a> */}
      </p>
            </div>
            <div className="flex w-[120px] items-center justify-start">
              <div className="w-1/3">
                <a href={twitterLink} target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/X.svg"
                    alt="Description for Image 1"
                    width={30}
                    height={30}
                    className="rounded-lg"
                  />
                </a>
              </div>
              <div className="w-1/3">
                <a
                  href={instagramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/Linkedin.svg"
                    alt="Description for Image 2"
                    width={30}
                    height={30}
                    className="rounded-lg"
                  />
                </a>
              </div>
              <div className="w-1/3">
                <a
                  href={facebookLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/Facebook.svg"
                    alt="Description for Image 3"
                    width={30}
                    height={30}
                    className="rounded-lg"
                  />
                </a>
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
                  <a href="#" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Teams
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Innovations
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
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
                  <a href="#" className="hover:underline">
                    Software Development
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Cyber Security Solutions 
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Recruitment Services
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                  ⁠Cloud Solutions and Storage
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                  ⁠Data Management Solutions 
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
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                  ⁠IT Hardware and Infrastructure Supplies 
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                  ⁠⁠Security and Safety Solutions for Homes and Complexes
                  </a>
                </li>
                {/* <li className="mb-4">
                  <a href="#" className="hover:underline">
                  ⁠⁠Data Management Solutions 
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="font-sans text-base dark:text-gray-400 sm:text-center">
            © 2024{" "}
            <a href="#" className="font-sans hover:underline">
              Apex Technology
            </a>
          
          </span>
          <div className="mt-4 flex items-center gap-2 font-sans text-base sm:mt-0 sm:justify-center">
            {/* <p className="font-sans">Terms</p> */}
            <svg
              width="6"
              height="6"
              viewBox="0 0 6 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="3" cy="3" r="3" fill="#D9D9D9" />
            </svg>
            {/* <p className="font-sans">Privacy</p> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
