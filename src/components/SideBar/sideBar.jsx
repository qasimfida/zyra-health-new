"use client";

import {
  HomeIcon,
  UserCircleIcon,
  DocumentTextIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  BuildingOfficeIcon,
  Cog8ToothIcon,
  ArrowRightStartOnRectangleIcon
} from "@heroicons/react/24/outline";

const SideBar = () => {
  return (
    <div className="hidden md:flex lg:flex bg-white  sticky top-[6rem] w-60 rounded-2xl py-10  flex-col min-h-[calc(100vh-20.5rem)] h-auto justify-between z-10">
      <div className="flex flex-col items-center w-full">
        <div className="flex items-center w-52 h-12 justify-start bg-[#7070FF] rounded-2xl text-white cursor-pointer">
          <button type="button" className="ml-2 mr-4">
            <HomeIcon className="w-6 h-6" aria-hidden="true" />
          </button>
          <p lassname="m-1.5 text-slate-500 font-medium">Home</p>
        </div>
        <div className="flex items-center w-52 h-12 justify-start rounded-2xl text-[#5E5E6F] cursor-pointer hover:text-white hover:bg-[#7070FF]">
          <button type="button" className="ml-2 mr-4">
            <UserCircleIcon className="w-6 h-6" aria-hidden="true" />
          </button>
          <p lassname="m-1.5 text-slate-500 font-medium">Profile</p>
        </div>
        <div className="flex items-center w-52 h-12 justify-start rounded-2xl text-[#5E5E6F] cursor-pointer hover:text-white hover:bg-[#7070FF]">
          <button type="button" className="ml-2 mr-4">
            <DocumentTextIcon className="w-6 h-6" aria-hidden="true" />
          </button>
          <p lassname="m-1.5 text-slate-500 font-medium">My Work</p>
        </div>
        <div className="flex items-center w-52 h-12 justify-start rounded-2xl text-[#5E5E6F] cursor-pointer hover:text-white hover:bg-[#7070FF]">
          <button type="button" className="ml-2 mr-4">
            <ChatBubbleOvalLeftEllipsisIcon
              className="w-6 h-6"
              aria-hidden="true"
            />
          </button>
          <p lassname="m-1.5 text-slate-500 font-medium">Messages</p>
        </div>
        <div className="flex items-center w-52 h-12 justify-start rounded-2xl text-[#5E5E6F] cursor-pointer hover:text-white hover:bg-[#7070FF]">
          <button type="button" className="ml-2 mr-4">
            <BuildingOfficeIcon className="w-6 h-6" aria-hidden="true" />
          </button>
          <p lassname="m-1.5 text-slate-500 font-medium">Employers</p>
        </div>
      </div>
      <div className="flex flex-col items-center w-full">
        <div className="flex items-center w-52 h-12 justify-start rounded-2xl text-[#5E5E6F] cursor-pointer hover:text-white hover:bg-[#7070FF]">
          <button type="button" className="ml-2 mr-4">
            <Cog8ToothIcon className="w-6 h-6" aria-hidden="true" />
          </button>
          <p lassname="m-1.5 text-slate-500 font-medium">Settings</p>
        </div>
        <div className="flex items-center w-52 h-12 justify-start rounded-2xl text-[#5E5E6F] cursor-pointer hover:text-white hover:bg-[#7070FF]">
          <button type="button" className="ml-2.5 mr-4">
            <ArrowRightStartOnRectangleIcon className="w-6 h-6" aria-hidden="true" />
          </button>
          <p lassname="m-1.5 text-slate-500 font-medium">Log Out</p>
        </div>
      </div>
    </div>
  );
};  

export default SideBar;
