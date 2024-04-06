import React, { useState } from "react";
import { IoIosInformationCircle } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
const Hero = () => {
  const [alertParaHide, setalertParaHide] = useState(true);

  const handleClose = () => {
    setalertParaHide(false);
  };
  return (
    <div className="my-[30px] font-paypal-open px-5 sm:px-10 lg:px-[100px] font-semibold">
      {/* search section start */}
      <h3 className="text-xl text-blue-500">Help Center</h3>
      <div className="grid items-center justify-center my-[40px]">
        <h1 className="text-[#001435] font-paypal-open text-2xl font-semibold text-center mb-[30px]">
          How can we help?
        </h1>
        {/* search bar code start */}
        {/* <div class="relative w-full">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pt-2 pointer-events-none text-gray-400">
            <svg
              class="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="text"
            id="voice-search"
            class="min-w-[300px] lg:min-w-[500px] bg-white border border-gray-400 text-black-200 text-[12px] rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 placeholder-gray-400 dark:placeholder-gray-400 "
            placeholder="Search by keyword"
            required
          />
        </div> */}
        <div className="relative w-full">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pt-2 pointer-events-none text-gray-400">
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke="currentColor"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="text"
            id="voice-search"
            className="min-w-[300px] sm:min-w-[500px] bg-white border border-gray-400 text-black-200 text-[12px] rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 placeholder-gray-400 dark:placeholder-gray-400"
            placeholder="Search by keyword"
            required
          />
        </div>

        {/* search bar code end*/}
      </div>
      {/* search section end */}

      {/* Alert Section Start*/}
      {alertParaHide && (
        <div className="bg-yellow-200 w-full rounded-xl flex pt-0 sm:pt-4 pl-4 py-4 gap-x-3 max-w-[1050px] mx-auto">
          <div className="pt-4 sm:pt-0">
            <IoIosInformationCircle size={"30"} />
          </div>
          <p className="text-base font-normal text-[rgb(0,20,53)] pt-5 sm:pt-1 w-[950px] sm:mr-4">
            Received a suspicious email, fake invoice, or message? Don't reply,
            open links, download attachments, or call any listed phone numbers.
            We'll never ask for your PayPal password or financial details by
            email or message, or over the phone. Forward suspicious messages to{" "}
            <span className="text-base text-[#0070e0] font-normal">
              phishing@paypal.com
            </span>{" "}
            and then delete them.
          </p>
          <div className="pb-4 sm:pr-2 cursor-pointer" onClick={handleClose}>
            <IoIosClose className="" size={"40"} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
