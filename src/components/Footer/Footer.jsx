"use client";

import {
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

import { QuestionIcon, SheildIcon, CoverIcon, LockIcon } from "../../svgs/icons";

const Footer = () => {
  return (
    <footer className="w-full bg-white">
      <div className="flex md:flex-row flex-col gap-8 justify-center items-center px-24 py-6">
        <div className="flex flex-col gap-4">
          <div className="flex justify-center">
            <button
              type="button"
              className=" text-primary bg-white rounded-full"
            >
              <QuestionIcon className="w-10 h-10" aria-hidden="true" />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center gap-1">
            <h4 className="text-4xl text-body">
              Drop a Line
            </h4>

            <p className="text-sm text-body font-normal text-center">
              Questions or feedback? We are all ears and ready to help!
            </p>
            <button
              type="button"
              className="rounded-3xl flex  items-center text-base font-medium text-primary justify-center leading-6"
            >
              Show More
              <ArrowRightIcon className="w-5 h-5 ml-1.5" aria-hidden="true" />
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex justify-center">
            <button
              type="button"
              className=" text-primary bg-white rounded-full"
            >
              <SheildIcon className="w-10 h-10" aria-hidden="true" />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center  gap-1">
            <h4 className="text-4xl text-body">
              Support Hub
            </h4>

            <p className="text-sm text-body font-normal text-center">
              Navigate your way through solutions, common queries, and FAQs.
            </p>
            <button
              type="button"
              className="rounded-3xl flex items-center text-base font-medium text-primary justify-center leading-6"
            >
              Show More
              <ArrowRightIcon className="w-5 h-5 ml-1.5" aria-hidden="true" />
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex justify-center">
            <button
              type="button"
              className=" text-primary bg-white rounded-full"
            >
              <CoverIcon className="w-10 h-10" aria-hidden="true" />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center  gap-1">
            <h4 className="text-4xl text-body text-center">
              Rules of Engagement
            </h4>

            <p className="text-sm text-body font-normal text-center">
              Quick insights into our terms. Understand your rights and ours in a snap.
            </p>
            <button
              type="button"
              className="rounded-3xl flex items-center text-base font-medium text-primary justify-center leading-6"
            >
              Show More
              <ArrowRightIcon className="w-5 h-5 ml-1.5" aria-hidden="true" />
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex justify-center">
            <button
              type="button"
              className=" text-primary bg-white rounded-full"
            >
              <LockIcon className="w-10 h-10" aria-hidden="true" />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center gap-1">
            <h4 className="text-4xl text-body">
              Privacy First
            </h4>

            <p className="text-sm text-body font-normal text-center">
              Dive into how we respect and protect your data. Your privacy matters!
            </p>
            <button
              type="button"
              className="rounded-3xl flex items-center text-base font-medium text-primary justify-center leading-6"
            >
              Show More
              <ArrowRightIcon className="w-5 h-5 ml-1.5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center w-full px-24 py-6 border-t ">
        <div>
          <h4 className="text-sm font-normal text-primary">
            2023 © ZyraHealth
          </h4>
        </div>
        <div>
          <h4 className="text-sm font-normal text-primary underline">
            Made with love in Boston
          </h4>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
