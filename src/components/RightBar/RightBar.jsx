"use client";

import { ImageIcon } from "@/svgs/icons";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const RightBar = () => {

  return (
    <div className="flex flex-col min-h-[90vh] w-[calc(100%-3rem)] md:w-[calc(100%-19.5rem)] ml-auto lg:ml-0 mr-6 lg:mr-0 lg:w-[18.8rem] relative  lg:sticky z-10">

      <div className="flex flex-col items-center w-full mb-6 text-center bg-white px-6 py-6 rounded-2xl gap-2">
        <div className="flex items-center flex-col w-full">
          <ImageIcon aria-hidden="true" />
        </div>
        <h4 className="text-4xl text-body">
          Your career belongs to you
        </h4>
        <p className="text-sm font-medium text-body">
          Fast track your way to a better, <br /> more fulfilling job.
        </p>
        <button
          type="button"
          className="rounded-3xl border-2 mt-2 px-8 py-1.5 border-primaryLight flex items-center text-4xl text-primary hover:text-white hover:bg-primary hover:border-primary"
        >
          Find your fit
          <ArrowRightIcon className="w-5 h-5 ml-1.5" aria-hidden="true" />
        </button>
      </div>
      <h4 className="text-base font-semibold text-body mb-2">
        Featured Jobs
      </h4>


      <div className="flex justify-center w-full bg-white px-3 py-3.5 mb-7 rounded-2xl">
        <div className="flex justify-center h-[60px] w-[100px]">
          <img src={"/images/frame.png"} alt="Career Image" layout="fill" />
        </div>
        <div className="flex flex-col ml-2  gap-2">
          <div>
            <h4 className="text-base font-semibold text-body">
              Registered Nurse (RN)
            </h4>
            <p className="text-sm font-semibold text-secondary">
              Bayada Home Care
            </p>
            <p className="text-sm text-medium text-body">
              Home Health Care Agency <br /> Boston, MA (Field-Based)
            </p>
          </div>
          <div className="flex flex-wrap w-full gap-2">
            <button
              type="button"
              className="rounded-3xl font-normal bg-light flex items-center text-xs text-primary px-1.5 py-1"
            >
              Full Time
            </button>
            <button
              type="button"
              className="rounded-3xl font-normal bg-light flex items-center text-xs text-primary px-1.5 py-1"
            >
              40 Hours / Week
            </button>
            <button
              type="button"
              className="rounded-3xl font-normal bg-light flex items-center text-xs text-primary px-1.5 py-1"
            >
              $75,000-$120,000
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center w-full bg-white px-3 py-3.5 mb-7 rounded-2xl">
        <div className="flex justify-center h-[60px] w-[100px]">
          <img src={"/images/frame.png"} alt="Career Image" layout="fill" />
        </div>
        <div className="flex flex-col ml-2  gap-2">
          <div>
            <h4 className="text-base font-semibold text-body">
              Registered Nurse (RN)
            </h4>
            <p className="text-sm font-semibold text-secondary">
              Bayada Home Care
            </p>
            <p className="text-sm text-medium text-body">
              Home Health Care Agency <br /> Boston, MA (Field-Based)
            </p>
          </div>
          <div className="flex flex-wrap w-full gap-2">
            <button
              type="button"
              className="rounded-3xl font-normal bg-light flex items-center text-xs text-primary px-1.5 py-1"
            >
              Full Time
            </button>
            <button
              type="button"
              className="rounded-3xl font-normal bg-light flex items-center text-xs text-primary px-1.5 py-1"
            >
              40 Hours / Week
            </button>
            <button
              type="button"
              className="rounded-3xl font-normal bg-light flex items-center text-xs text-primary px-1.5 py-1"
            >
              $75,000-$120,000
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center w-full bg-white px-3 py-3.5 mb-7 rounded-2xl">
        <div className="flex justify-center h-[60px] w-[100px]">
          <img src={"/images/frame.png"} alt="Career Image" layout="fill" />
        </div>
        <div className="flex flex-col ml-2  gap-2">
          <div>
            <h4 className="text-base font-semibold text-body">
              Registered Nurse (RN)
            </h4>
            <p className="text-sm font-semibold text-secondary">
              Bayada Home Care
            </p>
            <p className="text-sm text-medium text-body">
              Home Health Care Agency <br /> Boston, MA (Field-Based)
            </p>
          </div>
          <div className="flex flex-wrap w-full gap-2">
            <button
              type="button"
              className="rounded-3xl font-normal bg-light flex items-center text-xs text-primary px-1.5 py-1"
            >
              Full Time
            </button>
            <button
              type="button"
              className="rounded-3xl font-normal bg-light flex items-center text-xs text-primary px-1.5 py-1"
            >
              40 Hours / Week
            </button>
            <button
              type="button"
              className="rounded-3xl font-normal bg-light flex items-center text-xs text-primary px-1.5 py-1"
            >
              $75,000-$120,000
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center w-full bg-white px-3 py-3.5 mb-7 rounded-2xl">
        <div className="flex justify-center h-[60px] w-[100px]">
          <img src={"/images/frame.png"} alt="Career Image" layout="fill" />
        </div>
        <div className="flex flex-col ml-2  gap-2">
          <div>
            <h4 className="text-base font-semibold text-body">
              Registered Nurse (RN)
            </h4>
            <p className="text-sm font-semibold text-secondary">
              Bayada Home Care
            </p>
            <p className="text-sm text-medium text-body">
              Home Health Care Agency <br /> Boston, MA (Field-Based)
            </p>
          </div>
          <div className="flex flex-wrap w-full gap-2">
            <button
              type="button"
              className="rounded-3xl font-normal bg-light flex items-center text-xs text-primary px-1.5 py-1"
            >
              Full Time
            </button>
            <button
              type="button"
              className="rounded-3xl font-normal bg-light flex items-center text-xs text-primary px-1.5 py-1"
            >
              40 Hours / Week
            </button>
            <button
              type="button"
              className="rounded-3xl font-normal bg-light flex items-center text-xs text-primary px-1.5 py-1"
            >
              $75,000-$120,000
            </button>
          </div>
        </div>
      </div>


      <button
        type="button"
        className="rounded-3xl border-2 border-primaryLight flex items-center text-base px- font-semibold text-primary justify-center hover:text-white hover:bg-primary hover:border-none"
      >
        Show More
        <ArrowRightIcon className="w-5 h-5 ml-1.5" aria-hidden="true" />
      </button>
    </div>
  );
};

export default RightBar;
