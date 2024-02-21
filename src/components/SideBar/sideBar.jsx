"use client";

import {
  HomeIcon,
  UserCircleIcon,
  DocumentTextIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  BuildingOfficeIcon,
  Cog8ToothIcon,
} from "@heroicons/react/24/outline";

const SideBar = () => {
  return (
    <div className="bg-white w-60 rounded-2xl py-10 flex flex-col h-[80vh] justify-between sticky left-6 top-24 z-10">
      <div className="flex flex-col w-full items-center">
        <div className="flex items-center w-52 h-12 justify-start bg-[#7070FF] rounded-2xl text-white">
          <button type="button" className="mr-4 ml-2">
            <HomeIcon className="h-6 w-6" aria-hidden="true" />
          </button>
          <p lassName="m-1.5 text-slate-500 font-medium">Home</p>
        </div>
        <div className="flex items-center w-52 h-12 justify-start rounded-2xl text-[#5E5E6F]">
          <button type="button" className="mr-4 ml-2">
            <UserCircleIcon className="h-6 w-6" aria-hidden="true" />
          </button>
          <p lassName="m-1.5 text-slate-500 font-medium">Profile</p>
        </div>
        <div className="flex items-center w-52 h-12 justify-start rounded-2xl text-[#5E5E6F]">
          <button type="button" className="mr-4 ml-2">
            <DocumentTextIcon className="h-6 w-6" aria-hidden="true" />
          </button>
          <p lassName="m-1.5 text-slate-500 font-medium">My Work</p>
        </div>
        <div className="flex items-center w-52 h-12 justify-start rounded-2xl text-[#5E5E6F]">
          <button type="button" className="mr-4 ml-2">
            <ChatBubbleOvalLeftEllipsisIcon
              className="h-6 w-6"
              aria-hidden="true"
            />
          </button>
          <p lassName="m-1.5 text-slate-500 font-medium">Messages</p>
        </div>
        <div className="flex items-center w-52 h-12 justify-start rounded-2xl text-[#5E5E6F]">
          <button type="button" className="mr-4 ml-2">
            <BuildingOfficeIcon className="h-6 w-6" aria-hidden="true" />
          </button>
          <p lassName="m-1.5 text-slate-500 font-medium">Employers</p>
        </div>
      </div>
      <div className="flex flex-col w-full items-center">
        <div className="flex items-center w-52 h-12 justify-start rounded-2xl text-[#5E5E6F]">
          <button type="button" className="mr-4 ml-2">
            <Cog8ToothIcon className="h-6 w-6" aria-hidden="true" />
          </button>
          <p lassName="m-1.5 text-slate-500 font-medium">Messages</p>
        </div>
        <div className="flex items-center w-52 h-12 justify-start rounded-2xl text-[#5E5E6F]">
          <button type="button" className="mr-4 ml-2">
            <HomeIcon className="h-6 w-6" aria-hidden="true" />
          </button>
          <p lassName="m-1.5 text-slate-500 font-medium">Employers</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
