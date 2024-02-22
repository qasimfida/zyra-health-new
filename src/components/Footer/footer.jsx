"use client";

import {
    ArrowRightIcon,
} from "@heroicons/react/24/outline";

import { QuestionIcon, SheildIcon, CoverIcon, LockIcon } from "../../svgs/index";

const Footer = () => {
  return (
    <footer className="w-full px-12 bg-white">
      <div className="flex sm:flex-row flex-col gap-8 flex-wrap justify-center items-center">
        <div className="w-[20rem]">
          <div className="flex justify-center pt-5">
            <button
              type="button"
              className=" text-[#7070FF] bg-white rounded-full"
            >
              <QuestionIcon className="w-10 h-10" aria-hidden="true" />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h4 className="text-[17px] font-semibold text-[#5E5E6F] mb-2 mt-2">
            Drop a Line
            </h4>

            <p className="text-[14px] text-[#5E5E6F] font-normal text-center">
            Questions or feedback? We are all ears and ready to help!
            </p>
            <button
          type="button"
          className="rounded-3xl flex h-10 px-9 items-center text-[16px] font-medium text-[#7070FF] mb-4 justify-center leading-6"
        >
          Show More
          <ArrowRightIcon className="w-5 h-5 ml-1.5" aria-hidden="true" />
        </button>
          </div>
        </div>
        <div className="w-[20rem]">
          <div className="flex justify-center pt-5">
            <button
              type="button"
              className=" text-[#7070FF] bg-white rounded-full"
            >
              <SheildIcon className="w-10 h-10" aria-hidden="true" />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h4 className="text-[17px] font-semibold text-[#5E5E6F] mb-2 mt-2">
            Support Hub
            </h4>

            <p className="text-[14px] text-[#5E5E6F] font-normal text-center">
            Navigate your way through solutions, common queries, and FAQs.
            </p>
            <button
          type="button"
          className="rounded-3xl flex h-10 px-9 items-center text-[16px] font-medium text-[#7070FF] mb-4 justify-center leading-6"
        >
          Show More
          <ArrowRightIcon className="w-5 h-5 ml-1.5" aria-hidden="true" />
        </button>
          </div>
        </div>
        <div className="w-[20rem]">
          <div className="flex justify-center pt-5">
            <button
              type="button"
              className=" text-[#7070FF] bg-white rounded-full"
            >
              <CoverIcon className="w-10 h-10" aria-hidden="true" />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h4 className="text-[17px] font-semibold text-[#5E5E6F] mb-2 mt-2 text-center">
            Rules of Engagement
            </h4>

            <p className="text-[14px] text-[#5E5E6F] font-normal text-center">
            Quick insights into our terms. Understand your rights and ours in a snap.
            </p>
            <button
          type="button"
          className="rounded-3xl flex h-10 px-9 items-center text-[16px] font-medium text-[#7070FF] mb-4 justify-center leading-6"
        >
          Show More
          <ArrowRightIcon className="w-5 h-5 ml-1.5" aria-hidden="true" />
        </button>
          </div>
        </div>
        <div className="w-[20rem]">
          <div className="flex justify-center pt-5">
            <button
              type="button"
              className=" text-[#7070FF] bg-white rounded-full"
            >
              <LockIcon className="w-10 h-10" aria-hidden="true" />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h4 className="text-[17px] font-semibold text-[#5E5E6F] mb-2 mt-2">
            Privacy First
            </h4>

            <p className="text-[14px] text-[#5E5E6F] font-normal text-center">
            Dive into how we respect and protect your data. Your privacy matters!
            </p>
            <button
          type="button"
          className="rounded-3xl flex h-10 px-9 items-center text-[16px] font-medium text-[#7070FF] mb-4 justify-center leading-6"
        >
          Show More
          <ArrowRightIcon className="w-5 h-5 ml-1.5" aria-hidden="true" />
        </button>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center w-full h-[67px] border-t">
        <div>
          <h4 className="text-[14px] font-normal text-[#7070FF] leading-[21px]">
          2023 © ZyraHealth
          </h4>
        </div>
        <div>
          <h4 className="text-[14px] font-normal text-[#7070FF] underline">
          Made with love in Boston
          </h4>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
