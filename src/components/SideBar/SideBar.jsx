"use client";

import { DocumentIcon, HomeIcon, ProfileIcon, MessagesIcon, BuildingIcon, LogoutIcon } from "@/svgs/icons";

import {
  Cog8ToothIcon,
} from "@heroicons/react/24/outline";

const SideBar = () => {
  return (
    <div className="hidden md:flex lg:flex bg-white  sticky py-8 px-5 w-60 rounded-2xl flex-col min-h-[calc(100vh-20.5rem)] h-auto justify-between z-10 gap-52">
      <div className="flex flex-col items-center w-full gap-1">
        <div className="flex items-center w-52 h-12 justify-start rounded-2xl text-body cursor-pointer hover:text-white hover:bg-primary">
          <button type="button" className="ml-5 mr-6">
            <HomeIcon className="w-5 h-5"  aria-hidden="true" />
          </button>
          <p lassname=" text-body font-medium">Home</p>
        </div>
        <div className="flex items-center w-52 h-12 bg-primary text-white justify-start rounded-2xl text-body cursor-pointer hover:text-white hover:bg-primaryLight">
          <button type="button" className="ml-2 mr-4">
            <ProfileIcon className="w-5 h-5"  aria-hidden="true" />
          </button>
          <p lassname=" text-white font-medium">Profile</p>
        </div>
        <div className="flex items-center w-52 h-12 justify-start rounded-2xl text-body cursor-pointer hover:text-white hover:bg-primary">
          <button type="button" className="ml-2 mr-4">
            <DocumentIcon className="w-6 h-6" aria-hidden="true" />
          </button>
          <p lassname=" text-body font-medium">My Work</p>
        </div>
        <div className="flex items-center w-52 h-12 justify-start rounded-2xl text-body cursor-pointer hover:text-white hover:bg-primary">
          <button type="button" className="ml-2 mr-4">
            <MessagesIcon
              className="w-6 h-6"
              aria-hidden="true"
            />
          </button>
          <p lassname=" text-body font-medium">Messages</p>
        </div>
        <div className="flex items-center w-52 h-12 justify-start rounded-2xl text-body cursor-pointer hover:text-white hover:bg-primary">
          <button type="button" className="ml-2 mr-4">
            <BuildingIcon className="w-6 h-6" aria-hidden="true" />
          </button>
          <p lassname=" text-body font-medium">Employers</p>
        </div>
      </div>
      <div className="flex flex-col items-center w-full gap-[5px]">
        <div className="flex items-center w-52 h-12 justify-start rounded-2xl text-body cursor-pointer hover:text-white hover:bg-primary">
          <button type="button" className="ml-5 mr-5">
            <Cog8ToothIcon className="w-6 h-6" aria-hidden="true" />
          </button>
          <p lassname=" text-body font-medium">Settings</p>
        </div>
        <div className="flex items-center w-52 h-12 justify-start rounded-2xl text-body cursor-pointer hover:text-white hover:bg-primary">
          <button type="button" className="ml-2.5 mr-4">
            <LogoutIcon className="w-6 h-6" aria-hidden="true" />
          </button>
          <p lassname=" text-body font-medium">Log Out</p>
        </div>
      </div>
    </div>
  );
};  

export default SideBar;
