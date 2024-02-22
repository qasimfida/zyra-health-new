"use client";

import { ImageIcon } from "@/svgs";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const RightBar = () => {
  return (
    <div className="flex flex-col min-h-[90vh] w-[calc(100%-3rem)] md:w-[calc(100%-19.5rem)] ml-auto lg:ml-0 mr-6 lg:mr-0   lg:w-[18.8rem] relative  lg:sticky lg:top-[6rem] z-10 ">
      <div className="flex flex-col items-center w-full mb-6 text-center bg-white rounded-2xl">
        <div className="flex items-center py-2.5 flex-col w-full">
          <ImageIcon  aria-hidden="true" />
        </div>
        <h4 className="text-[17px] font-semibold text-[#5E5E6F] mb-0.5">
          Your career belongs to you
        </h4>
        <p className="text-[14px] text-[#5E5E6F] mb-5">
          Fast track your way to a better,
          <br /> more fulfilling job.
        </p>
        <button
          type="button"
          className="rounded-3xl border border-[#7070FF] flex h-10 px-9 items-center text-[16px] font-semibold text-[#7070FF] mb-5 hover:text-white hover:bg-[#7070FF]"
        >
          Find your fit{" "}
          <ArrowRightIcon className="w-5 h-5 ml-1.5" aria-hidden="true" />
        </button>
      </div>
      <h4 className="text-[17px] font-semibold text-[#5E5E6F] mb-3">
        Featured Jobs
      </h4>
      <div className="flex justify-center w-full p-3 mb-6 bg-white rounded-2xl">
        <div className="flex justify-center h-[60px] w-[100px]">
          <img src={"/images/frame.png"} alt="Career Image" layout="fill" />
        </div>
        <div className="flex flex-col ml-2">
          <div>
            <h4 className="text-[16px] font-semibold text-[#5E5E6F]">
              Registered Nurse (RN)
            </h4>
            <p className="text-[14px] text-[#7F7F7F] font-semibold mb-5">
              Bayada Home Care
            </p>
            <p className="text-[14px] text-[#5E5E6F] mb-5">
              Home Health Care Agency <br /> Boston, MA (Field-Based)
            </p>
          </div>
          <div className="flex flex-wrap w-full gap-2">
            <button
              type="button"
              className="rounded-3xl bg-[#F3F5F8] flex items-center text-[14px] font-normal text-[#7070FF] h-7 px-[6px]"
            >
              Full Time
            </button>
            <button
              type="button"
              className="rounded-3xl bg-[#F3F5F8] flex items-center text-[14px] font-normal text-[#7070FF] h-7 px-[6px]"
            >
              40 Hours / Week
            </button>
            <button
              type="button"
              className="rounded-3xl bg-[#F3F5F8] flex items-center text-[14px] font-normal text-[#7070FF] h-7 px-[6px]"
            >
              $75,000-$120,000
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full p-3 mb-6 bg-white rounded-2xl">
        <div className="flex justify-center h-[60px] w-[100px]">
          <img src={"/images/frame.png"} alt="Career Image" layout="fill" />
        </div>
        <div className="flex flex-col ml-2">
          <div>
            <h4 className="text-[16px] font-semibold text-[#5E5E6F]">
              Registered Nurse (RN)
            </h4>
            <p className="text-[14px] text-[#7F7F7F] font-semibold mb-5">
              Bayada Home Care
            </p>
            <p className="text-[14px] text-[#5E5E6F] mb-5">
              Home Health Care Agency <br /> Boston, MA (Field-Based)
            </p>
          </div>
          <div className="flex flex-wrap w-full gap-2">
            <button
              type="button"
              className="rounded-3xl bg-[#F3F5F8] flex items-center text-[14px] font-normal text-[#7070FF] h-7 px-[6px]"
            >
              Full Time
            </button>
            <button
              type="button"
              className="rounded-3xl bg-[#F3F5F8] flex items-center text-[14px] font-normal text-[#7070FF] h-7 px-[6px]"
            >
              40 Hours / Week
            </button>
            <button
              type="button"
              className="rounded-3xl bg-[#F3F5F8] flex items-center text-[14px] font-normal text-[#7070FF] h-7 px-[6px]"
            >
              $75,000-$120,000
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full p-3 mb-6 bg-white rounded-2xl">
        <div className="flex justify-center h-[60px] w-[100px]">
          <img src={"/images/frame.png"} alt="Career Image" layout="fill" />
        </div>
        <div className="flex flex-col ml-2">
          <div>
            <h4 className="text-[16px] font-semibold text-[#5E5E6F]">
              Registered Nurse (RN)
            </h4>
            <p className="text-[14px] text-[#7F7F7F] font-semibold mb-5">
              Bayada Home Care
            </p>
            <p className="text-[14px] text-[#5E5E6F] mb-5">
              Home Health Care Agency <br /> Boston, MA (Field-Based)
            </p>
          </div>
          <div className="flex flex-wrap w-full gap-2">
            <button
              type="button"
              className="rounded-3xl bg-[#F3F5F8] flex items-center text-[14px] font-normal text-[#7070FF] h-7 px-[6px]"
            >
              Full Time
            </button>
            <button
              type="button"
              className="rounded-3xl bg-[#F3F5F8] flex items-center text-[14px] font-normal text-[#7070FF] h-7 px-[6px]"
            >
              40 Hours / Week
            </button>
            <button
              type="button"
              className="rounded-3xl bg-[#F3F5F8] flex items-center text-[14px] font-normal text-[#7070FF] h-7 px-[6px]"
            >
              $75,000-$120,000
            </button>
          </div>
        </div>
      </div>
      
      <button
          type="button"
          className="rounded-3xl border border-[#7070FF] flex h-10 px-9 items-center text-[16px] font-semibold text-[#7070FF] mb-5 justify-center hover:text-white hover:bg-[#7070FF]"
        >
          Show More
          <ArrowRightIcon className="w-5 h-5 ml-1.5" aria-hidden="true" />
        </button>
    </div>
  );
};

export default RightBar;
