"use client";

import {
  DocumentMagnifyingGlassIcon,
  DocumentMinusIcon,
  AcademicCapIcon,
  PencilIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";

import { IconBreifcase, AwardIcon, SettingsIcon, DocumentsIcon } from "@/svgs";

export default function Home() {
  return (
    <div className="w-[calc(100%-3rem)] md:w-[calc(100%-19.5rem)] lg:w-[calc(100%-40rem)] flex flex-col justify-between sm:auto relative">
      <div className="bg-white rounded-2xl">
        <div className="hidden">
          <label htmlFor="tabs" className="sr-only">
            Select your country
          </label>
          <select
            id="tabs"
            className=" border border-gray-300 text-gray-900 text-sm block w-full p-2.5"
          >
            <option>Overview</option>
            <option>Dashboard</option>
            <option>setting</option>
            <option>Invoioce</option>
          </select>
        </div>
        <div>
        <ul className="text-sm font-medium text-center text-gray-500 sm:flex min-h-[67px] overflow-hidden">
          <li className="flex items-center w-full focus-within:z-10">
            <a
              href="#"
              className="flex items-center justify-center  w-full min-h-[46px] border-r  text-[#7070FF] rounded-s-2xl"
            >
              <DocumentMagnifyingGlassIcon
                className="w-5 h-5 mr-1"
                aria-hidden="true"
              />
              Overview
            </a>
          </li>
          <li className="flex items-center w-full focus-within:z-10">
            <a
              href="#"
              className="flex items-center justify-center  w-full h-[46px] border-r hover:text-gray-700"
            >
              <DocumentMinusIcon className="w-5 h-5 mr-1" aria-hidden="true" />
              Credentials
            </a>
          </li>
          <li className="flex items-center w-full focus-within:z-10">
            <a
              href="#"
              className="flex items-center justify-center  w-full h-[46px] border-r hover:text-gray-700"
            >
              <AcademicCapIcon className="w-5 h-5 mr-1" aria-hidden="true" />
              Education
            </a>
          </li>
          <li className="flex items-center w-full focus-within:z-10">
            <a
              href="#"
              className="flex items-center justify-center  w-full h-[46px] border-r hover:text-gray-700"
            >
              <button type="button" className="mr-1">
                <IconBreifcase className="w-6 h-6" aria-hidden="true" />
              </button>
              <p lassname="m-1.5 text-slate-500 font-medium">Experience</p>
            </a>
          </li>
          <li className="flex items-center w-full focus-within:z-10">
            <a
              href="#"
              className="flex items-center justify-center  w-full h-[46px] border-r hover:text-gray-700"
            >
              {/* <DocumentTextIcon className="w-6 h-6 mr-1" aria-hidden="true" />
            Documents */}

              <button type="button" className="mr-1">
                <DocumentsIcon className="w-6 h-6" aria-hidden="true" />
              </button>
              <p lassname="m-1.5 text-slate-500 font-medium">Documents</p>
            </a>
          </li>
          <li className="flex items-center w-full focus-within:z-10">
            <a
              href="#"
              className="flex items-center justify-center  w-full h-[46px] border-r hover:text-gray-700"
            >
              {/* <AcademicCapIcon className="w-6 h-6 mr-1" aria-hidden="true" />
            Skills */}
              <button type="button" className="mr-1">
                <AwardIcon className="w-6 h-6" aria-hidden="true" />
              </button>
              <p lassname="m-1.5 text-slate-500 font-medium">Skills</p>
            </a>
          </li>
          <li className="flex items-center w-full focus-within:z-10">
            <a
              href="#"
              className="flex items-center justify-center  w-full h-[46px] hover:text-gray-700 rounded-e-2xl"
            >
              {/* <IconBreifcase className="fill-current" aria-hidden="true" />Preferences */}
              <button type="button" className="mr-1">
                <SettingsIcon className="w-6 h-6" aria-hidden="true" />
              </button>
              <p lassname="m-1.5 text-slate-500 font-medium">Preferences</p>
            </a>
          </li>
        </ul>
        </div>
      </div>

      <div className="px-5 mt-6 bg-white min-h-80 rounded-2xl">
        <div className="flex justify-between items-center w-full min-h-[67px] border-b">
          <div>
            <h4 className="text-[19px] font-semibold text-[#7070FF]">
              Personal Information
            </h4>
          </div>
          <div>
            <button
              type="button"
              className="p-2 text-white bg-[#7070FF] rounded-full hover:text-black hover:border-gray-700"
            >
              <PencilIcon className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>
        <div className="pt-5">
          <h4 className="text-[17px] font-semibold text-[#5E5E6F] mb-2">
            Registered Nurse (RN)
          </h4>
          <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
            <span className="text-[#5E5E6F]">Discipline Type: </span>Nursing
          </p>
          <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
            <span className="text-[#5E5E6F]">Discipline Type: </span>Registered
            Nurse (RN)
          </p>
          <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
            <span className="text-[#5E5E6F]">Bio: </span>Committed and versatile
            healthcare professional with extensive experience across a variety
            of healthcare settings. Known for providing top-notch care and
            support, excelling in fast-paced environments, and adept at
            addressing diverse patient needs with empathy and proficiency. With
            a strong foundation in patient care principles, equipped to deliver
            exceptional service whether in direct patient care, administrative
            roles, or team collaboration. Driven by a passion for improving
            patient outcomes and enhancing the quality of healthcare delivery
          </p>
        </div>
      </div>

      <div className="px-5 pb-2 mt-6 bg-white rounded-2xl">
        <div className="flex justify-between items-center w-full h-[67px] border-b">
          <div>
            <h4 className="text-[19px] font-semibold text-[#7070FF]">
              Contact Information
            </h4>
          </div>
          <div>
            <button
              type="button"
              className="p-2 text-white bg-[#7070FF] rounded-full hover:text-black hover:border-gray-700"
            >
              <PencilIcon className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>
        <div className="pt-5">
          <h4 className="text-[17px] font-semibold text-[#5E5E6F] mb-2">
            Currently located in Charlotte, NC
          </h4>
          <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
            <span className="text-[#5E5E6F]">Phone Number: </span>617-777-7788
          </p>
          <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
            <span className="text-[#5E5E6F]">Email: </span>williamnash@gmail.com
          </p>
        </div>
      </div>

      <div className="px-5 pb-2 mt-6 bg-white rounded-2xl">
        <div className="flex justify-between items-center w-full h-[67px] border-b">
          <div>
            <h4 className="text-[19px] font-semibold text-[#7070FF]">
              Languages
            </h4>
          </div>
          <div>
            {/* <button
              type="button"
              className="p-2 text-white bg-[#7070FF] rounded-full hover:text-black hover:border-gray-700"
            >
              <PencilIcon className="w-5 h-5" aria-hidden="true" />
            </button> */}
          </div>
        </div>
        <div className="flex justify-center pt-5">
          <button
            type="button"
            className="p-2 text-white bg-[#7070FF] rounded-full hover:text-black hover:border-gray-700"
          >
            <PlusIcon className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h4 className="text-[17px] font-semibold text-[#5E5E6F] mb-2 mt-4">
            Add Languages
          </h4>

          <p className="text-[16px] text-[#5E5E6F] font-medium mb-8">
            Attract more employers by adding the languages you speak on your
            profile
          </p>
        </div>
      </div>

      <div className="px-5 pb-2 mt-6 bg-white rounded-2xl">
        <div className="flex justify-between items-center w-full min-h-[67px] border-b">
          <div>
            <h4 className="text-[19px] font-semibold text-[#7070FF]">
              Emergency Contacts
            </h4>
          </div>
          <div>
            {/* <button
              type="button"
              className="p-2 text-white bg-[#7070FF] rounded-full hover:text-black hover:border-gray-700"
            >
              <PencilIcon className="w-5 h-5" aria-hidden="true" />
            </button> */}
          </div>
        </div>
        <div className="flex justify-center pt-5">
          <button
            type="button"
            className="p-2 text-white bg-[#7070FF] rounded-full hover:text-black hover:border-gray-700"
          >
            <PlusIcon className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h4 className="text-[17px] font-semibold text-[#5E5E6F] mb-2 mt-4">
            Add Emergency Contacts
          </h4>

          <p className="text-[16px] text-[#5E5E6F] font-medium mb-8">
            Add an emergency contact to increase profile completeness
          </p>
        </div>
      </div>

      <div className="px-5 pb-2 mt-6 bg-white rounded-2xl">
        <div className="flex justify-between items-center w-full min-h-[67px] border-b">
          <div>
            <h4 className="text-[19px] font-semibold text-[#7070FF]">
              Social Profile
            </h4>
          </div>
          <div>
            {/* <button
              type="button"
              className="p-2 text-white bg-[#7070FF] rounded-full hover:text-black hover:border-gray-700"
            >
              <PencilIcon className="w-5 h-5" aria-hidden="true" />
            </button> */}
          </div>
        </div>
        <div className="flex justify-center pt-5">
          <button
            type="button"
            className="p-2 text-white bg-[#7070FF] rounded-full hover:text-black hover:border-gray-700"
          >
            <PlusIcon className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h4 className="text-[17px] font-semibold text-[#5E5E6F] mb-2 mt-4">
            Add Social Profile
          </h4>

          <p className="text-[16px] text-[#5E5E6F] font-medium mb-8">
            Add your social media or other online accounts to enhance your
            profile
          </p>
        </div>
      </div>

      <div className="px-5 pb-2 mt-6 bg-white rounded-2xl">
        <div className="flex justify-between items-center w-full min-h-[67px] border-b">
          <div>
            <h4 className="text-[19px] font-semibold text-[#7070FF]">
              Identity Information
            </h4>
          </div>
          <div>
            {/* <button
              type="button"
              className="p-2 text-white bg-[#7070FF] rounded-full hover:text-black hover:border-gray-700"
            >
              <PencilIcon className="w-5 h-5" aria-hidden="true" />
            </button> */}
          </div>
        </div>
        <div className="flex justify-center pt-5">
          <button
            type="button"
            className="p-2 text-white bg-[#7070FF] rounded-full hover:text-black hover:border-gray-700"
          >
            <PlusIcon className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h4 className="text-[17px] font-semibold text-[#5E5E6F] mb-2 mt-4">
          Drop a Line

          </h4>

          <p className="text-[16px] text-[#5E5E6F] font-medium mb-8">
          Questions or feedback? We are all ears and ready to help!
          </p>
          
        </div>
      </div>
    </div>
  );
}