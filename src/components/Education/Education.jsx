"use client";

import {
  DocumentMagnifyingGlassIcon,
  DocumentMinusIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";

import {
  IconBreifcase,
  AwardIcon,
  SettingsIcon,
  DocumentsIcon,
  EditIcon,
  AddIcon,
  EditIconTransparent,
  DocumentTagIcon,
  CertifiedIcon,
  AddPlusIcon,
} from "@/svgs/icons";
import AddCardComponent from "../AddCardComponent/AddCardComponent";

const Education = () => {
  return (
    <div className="w-[calc(100%-3rem)] md:w-[calc(100%-19.5rem)] lg:w-[calc(100%-40rem)] flex flex-col justify-between sm:auto relative">
      <div className="bg-white rounded-2xl">
        <div className="sm:hidden">
          <select
            id="tabs"
            className=" border border-gray-300 text-gray-900 text-sm block w-full p-2.5 rounded-xl"
          >
            <option>Overview</option>
            <option>Credentials</option>
            <option>Education</option>
            <option>Experience</option>
            <option>Documents</option>
            <option>Skills</option>
            <option>Preferences</option>
          </select>
        </div>
        <div>
          <ul className="text-sm font-medium text-center text-gray-500 sm:flex min-h-[67px] overflow-hidden hidden">
            <li className="flex items-center w-full focus-within:z-10">
              <a
                href="#"
                className="flex items-center justify-center  w-full h-[46px] border-r hover:text-gray-700"
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
                <DocumentMinusIcon
                  className="w-5 h-5 mr-1"
                  aria-hidden="true"
                />
                Credentials
              </a>
            </li>
            <li className="flex items-center w-full focus-within:z-10">
              <a
                href="#"
                className="flex items-center justify-center  w-full min-h-[46px] border-r  text-[#7070FF] rounded-s-2xl"
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
                <button type="button" className="mr-1">
                  <SettingsIcon className="w-6 h-6" aria-hidden="true" />
                </button>
                <p lassname="m-1.5 text-slate-500 font-medium">Preferences</p>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Education Empty Data Start */}
      <AddCardComponent
        title={"Education"}
        subTitle={"Add Education"}
        description={
          "Unlock job opportunities by adding education details to your profile"
        }
      />
      {/* Education Empty Data End */}

      {/* Education Component start */}
      <div className="px-5 mt-6 bg-white rounded-2xl">
        <div className="flex justify-between items-center w-full min-h-[67px] border-b">
          <div>
            <h4 className="text-[19px] font-semibold text-[#7070FF]">
              Education
            </h4>
          </div>
          <div className="flex items-center">
            <button type="button" className="text-white">
              <EditIcon className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="pt-5 border-b">
          <div className="flex justify-between items-center w-full min-h-[40px]">
            <div>
              <h4 className="text-[17px] font-semibold text-[#5E5E6F] mb-2">
                Bachelor of Science in Nursing (BSN)
              </h4>
            </div>
            <div className="flex items-center mr-[12px]">
              <button type="button" className="text-white">
                <EditIconTransparent className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          </div>
          <div className="mb-4">
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Institution Name: </span>North
              Carolina Board of Nursing
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Field of Study: </span>Compact
              License
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Start Date: </span>
              XYZ23091234
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">End/Expected Date: </span>October
              2024
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">GPA: </span>October 2024
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Honors and Awards: </span>October
              2024
            </p>
            <div className="flex flex-wrap w-full gap-1.5">
              <button
                type="button"
                className="rounded-3xl border border-[#299DCF] flex items-center text-[14px] font-medium text-[#299DCF] h-[30px] py-[5px] px-[10px]"
              >
                <span className="mr-2">
                  <DocumentTagIcon className="w-5 h-5" aria-hidden="true" />
                </span>
                Name of Document
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Education Component End */}

      {/* Continuing Education Empty Data Start */}
      <AddCardComponent
        title={"Continuing Education"}
        subTitle={"Add Continuing Education"}
        description={
          "Add continuing education credits earned to enhance your profile"
        }
      />
      {/* Continuing Education Empty Data End */}

      {/* Continuing Education Component start */}
      <div className="px-5 mt-6 bg-white rounded-2xl">
        <div className="flex justify-between items-center w-full min-h-[67px] border-b">
          <div>
            <h4 className="text-[19px] font-semibold text-[#7070FF]">
              Continuing Education
            </h4>
          </div>
          <div className="flex items-center">
            <button type="button" className="text-white">
              <EditIcon className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="pt-5 border-b">
          <div className="flex justify-between items-center w-full min-h-[40px]">
            <div>
              <h4 className="text-[17px] font-semibold text-[#5E5E6F] mb-2">
                Advanced Pediatric Care Techniques:
              </h4>
              <h4 className="text-[17px] font-semibold text-[#5E5E6F] mb-2">
                Enhancing Skills and Knowledge for Modern Nursing
              </h4>
            </div>
            <div className="flex items-center mr-[12px]">
              <button type="button" className="text-white">
                <EditIconTransparent className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          </div>
          <div className="mb-4">
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Institution Name: </span>
              Riverside Health Sciences Institute - Center for Nursing
              Excellence
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Course Type: </span>Seminar
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Field of Study: </span>Geriatric
              Nursing
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Start Date: </span>
              September 2020
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">End/Expected Date: </span>October
              2024
            </p>
            <div className="flex flex-wrap w-full gap-1.5 mb-2">
              <p className="flex items-center text-[16px] text-[#7F7F7F] font-medium mr-2">
                <span className="text-[#5E5E6F]">Skills Acquired: </span>
              </p>
              <button
                type="button"
                className="rounded-3xl bg-[#E8E6FF] flex items-center text-[14px] font-medium text-[#7F7F7F] h-[30px] py-[5px] px-[7px]"
              >
                <span className="mr-2">
                  <DocumentTagIcon className="w-5 h-5" aria-hidden="true" />
                </span>
                Elderly Population
              </button>
              <button
                type="button"
                className="rounded-3xl bg-[#E8E6FF] flex items-center text-[14px] font-medium text-[#7F7F7F] h-[30px] py-[5px] px-[7px]"
              >
                <span className="mr-2">
                  <DocumentTagIcon className="w-5 h-5" aria-hidden="true" />
                </span>
                Geriatrics
              </button>
              <button
                type="button"
                className="rounded-3xl flex items-center text-[16px] font-medium text-[#7070FF] h-[30px] py-[5px] px-[7px]"
              >
                <span>
                  <AddPlusIcon className="w-5 h-5" aria-hidden="true" />
                </span>
                View More
              </button>
            </div>

            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">CEUs Earned: </span>10 CEUs
            </p>
          </div>
        </div>
        <div className="pt-5 border-b">
          <div className="flex justify-between items-center w-full min-h-[40px]">
            <div>
              <h4 className="text-[17px] font-semibold text-[#5E5E6F] mb-2">
                Advanced Pediatric Care Techniques:
              </h4>
              <h4 className="text-[17px] font-semibold text-[#5E5E6F] mb-2">
                Enhancing Skills and Knowledge for Modern Nursing
              </h4>
            </div>
            <div className="flex items-center mr-[12px]">
              <button type="button" className="text-white">
                <EditIconTransparent className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          </div>
          <div className="mb-4">
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Institution Name: </span>
              Riverside Health Sciences Institute - Center for Nursing
              Excellence
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Course Type: </span>Seminar
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Field of Study: </span>Geriatric
              Nursing
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Start Date: </span>
              September 2020
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">End/Expected Date: </span>October
              2024
            </p>
            <div className="flex flex-wrap w-full gap-1.5 mb-2">
              <p className="flex items-center text-[16px] text-[#7F7F7F] font-medium mr-2">
                <span className="text-[#5E5E6F]">Skills Acquired: </span>
              </p>
              <button
                type="button"
                className="rounded-3xl bg-[#E8E6FF] flex items-center text-[14px] font-medium text-[#7F7F7F] h-[30px] py-[5px] px-[7px]"
              >
                <span className="mr-2">
                  <DocumentTagIcon className="w-5 h-5" aria-hidden="true" />
                </span>
                Elderly Population
              </button>
              <button
                type="button"
                className="rounded-3xl bg-[#E8E6FF] flex items-center text-[14px] font-medium text-[#7F7F7F] h-[30px] py-[5px] px-[7px]"
              >
                <span className="mr-2">
                  <DocumentTagIcon className="w-5 h-5" aria-hidden="true" />
                </span>
                Geriatrics
              </button>
              <button
                type="button"
                className="rounded-3xl flex items-center text-[16px] font-medium text-[#7070FF] h-[30px] py-[5px] px-[7px]"
              >
                <span>
                  <AddPlusIcon className="w-5 h-5" aria-hidden="true" />
                </span>
                View More
              </button>
            </div>

            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">CEUs Earned: </span>10 CEUs
            </p>
          </div>
        </div>
        <div className="pt-5 border-b">
          <div className="flex justify-between items-center w-full min-h-[40px]">
            <div>
              <h4 className="text-[17px] font-semibold text-[#5E5E6F] mb-2">
                Advanced Pediatric Care Techniques:
              </h4>
              <h4 className="text-[17px] font-semibold text-[#5E5E6F] mb-2">
                Enhancing Skills and Knowledge for Modern Nursing
              </h4>
            </div>
            <div className="flex items-center mr-[12px]">
              <button type="button" className="text-white">
                <EditIconTransparent className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          </div>
          <div className="mb-4">
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Institution Name: </span>
              Riverside Health Sciences Institute - Center for Nursing
              Excellence
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Course Type: </span>Seminar
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Field of Study: </span>Geriatric
              Nursing
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Start Date: </span>
              September 2020
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">End/Expected Date: </span>October
              2024
            </p>
            <div className="flex flex-wrap w-full gap-1.5 mb-2">
              <p className="flex items-center text-[16px] text-[#7F7F7F] font-medium mr-2">
                <span className="text-[#5E5E6F]">Skills Acquired: </span>
              </p>
              <button
                type="button"
                className="rounded-3xl bg-[#E8E6FF] flex items-center text-[14px] font-medium text-[#7F7F7F] h-[30px] py-[5px] px-[7px]"
              >
                <span className="mr-2">
                  <DocumentTagIcon className="w-5 h-5" aria-hidden="true" />
                </span>
                Elderly Population
              </button>
              <button
                type="button"
                className="rounded-3xl bg-[#E8E6FF] flex items-center text-[14px] font-medium text-[#7F7F7F] h-[30px] py-[5px] px-[7px]"
              >
                <span className="mr-2">
                  <DocumentTagIcon className="w-5 h-5" aria-hidden="true" />
                </span>
                Geriatrics
              </button>
              <button
                type="button"
                className="rounded-3xl flex items-center text-[16px] font-medium text-[#7070FF] h-[30px] py-[5px] px-[7px]"
              >
                <span>
                  <AddPlusIcon className="w-5 h-5" aria-hidden="true" />
                </span>
                View More
              </button>
            </div>

            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">CEUs Earned: </span>10 CEUs
            </p>
            <div className="flex flex-wrap w-full gap-1.5">
              <button
                type="button"
                className="rounded-3xl border border-[#1ECA63] flex items-center text-[14px] font-medium text-[#1ECA63] h-[30px] py-[5px] px-[10px]"
              >
                <span className="mr-2">
                  <CertifiedIcon className="w-5 h-5" aria-hidden="true" />
                </span>
                Name of Document
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Continuing Education Component End */}

      {/* Training Certifications Empty Data Start */}
      <AddCardComponent
        title={"Training"}
        subTitle={"Add Training"}
        description={
          "Add trainings attended to demonstrate your professional development"
        }
      />
      {/* Training Certifications Empty Data End */}

      {/* Training Certifications Component start */}
      <div className="px-5 mt-6 bg-white rounded-2xl">
        <div className="flex justify-between items-center w-full min-h-[67px] border-b">
          <h4 className="text-[19px] font-semibold text-[#7070FF]">Training</h4>
        </div>

        <div className="pt-5 border-b">
          <div className="flex justify-between items-center w-full min-h-[40px]">
            <div>
              <h4 className="text-[17px] font-semibold text-[#5E5E6F] mb-2">
                Training
              </h4>
            </div>
            <div className="flex items-center mr-[12px]">
              <button type="button" className="text-white">
                <EditIconTransparent className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          </div>
          <div className="pt-5 border-b">
            <div className="flex justify-between items-center w-full min-h-[40px]">
              <div>
                <h4 className="text-[17px] font-semibold text-[#5E5E6F] mb-2">
                  Advanced Pediatric Care Techniques:
                </h4>
                <h4 className="text-[17px] font-semibold text-[#5E5E6F] mb-2">
                  Enhancing Skills and Knowledge for Modern Nursing
                </h4>
              </div>
              <div className="flex items-center mr-[12px]">
                <button type="button" className="text-white">
                  <EditIconTransparent className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>
            </div>
            <div className="mb-4">
              <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
                <span className="text-[#5E5E6F]">Institution Name: </span>
                Riverside Health Sciences Institute - Center for Nursing
                Excellence
              </p>
              <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
                <span className="text-[#5E5E6F]">Course Type: </span>Seminar
              </p>
              <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
                <span className="text-[#5E5E6F]">Field of Study: </span>
                Geriatric Nursing
              </p>
              <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
                <span className="text-[#5E5E6F]">Start Date: </span>
                September 2020
              </p>
              <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
                <span className="text-[#5E5E6F]">End/Expected Date: </span>
                October 2024
              </p>
              <div className="flex flex-wrap w-full gap-1.5 mb-2">
                <p className="flex items-center text-[16px] text-[#7F7F7F] font-medium mr-2">
                  <span className="text-[#5E5E6F]">Skills Acquired: </span>
                </p>
                <button
                  type="button"
                  className="rounded-3xl bg-[#E8E6FF] flex items-center text-[14px] font-medium text-[#7F7F7F] h-[30px] py-[5px] px-[7px]"
                >
                  <span className="mr-2">
                    <DocumentTagIcon className="w-5 h-5" aria-hidden="true" />
                  </span>
                  Elderly Population
                </button>
                <button
                  type="button"
                  className="rounded-3xl bg-[#E8E6FF] flex items-center text-[14px] font-medium text-[#7F7F7F] h-[30px] py-[5px] px-[7px]"
                >
                  <span className="mr-2">
                    <DocumentTagIcon className="w-5 h-5" aria-hidden="true" />
                  </span>
                  Geriatrics
                </button>
                <button
                  type="button"
                  className="rounded-3xl flex items-center text-[16px] font-medium text-[#7070FF] h-[30px] py-[5px] px-[7px]"
                >
                  <span>
                    <AddPlusIcon className="w-5 h-5" aria-hidden="true" />
                  </span>
                  View More
                </button>
              </div>

              <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
                <span className="text-[#5E5E6F]">CEUs Earned: </span>10 CEUs
              </p>
              <div className="flex flex-wrap w-full gap-1.5">
                <button
                  type="button"
                  className="rounded-3xl border border-[#1ECA63] flex items-center text-[14px] font-medium text-[#1ECA63] h-[30px] py-[5px] px-[10px]"
                >
                  <span className="mr-2">
                    <CertifiedIcon className="w-5 h-5" aria-hidden="true" />
                  </span>
                  Name of Document
                </button>
              </div>
            </div>
          </div>
          <div className="pt-5 border-b">
            <div className="flex justify-between items-center w-full min-h-[40px]">
              <div>
                <h4 className="text-[17px] font-semibold text-[#5E5E6F] mb-2">
                  Advanced Pediatric Care Techniques:
                </h4>
                <h4 className="text-[17px] font-semibold text-[#5E5E6F] mb-2">
                  Enhancing Skills and Knowledge for Modern Nursing
                </h4>
              </div>
              <div className="flex items-center mr-[12px]">
                <button type="button" className="text-white">
                  <EditIconTransparent className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>
            </div>
            <div className="mb-4">
              <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
                <span className="text-[#5E5E6F]">Institution Name: </span>
                Riverside Health Sciences Institute - Center for Nursing
                Excellence
              </p>
              <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
                <span className="text-[#5E5E6F]">Course Type: </span>Seminar
              </p>
              <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
                <span className="text-[#5E5E6F]">Field of Study: </span>
                Geriatric Nursing
              </p>
              <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
                <span className="text-[#5E5E6F]">Start Date: </span>
                September 2020
              </p>
              <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
                <span className="text-[#5E5E6F]">End/Expected Date: </span>
                October 2024
              </p>
              <div className="flex flex-wrap w-full gap-1.5 mb-2">
                <p className="flex items-center text-[16px] text-[#7F7F7F] font-medium mr-2">
                  <span className="text-[#5E5E6F]">Skills Acquired: </span>
                </p>
                <button
                  type="button"
                  className="rounded-3xl bg-[#E8E6FF] flex items-center text-[14px] font-medium text-[#7F7F7F] h-[30px] py-[5px] px-[7px]"
                >
                  <span className="mr-2">
                    <DocumentTagIcon className="w-5 h-5" aria-hidden="true" />
                  </span>
                  Elderly Population
                </button>
                <button
                  type="button"
                  className="rounded-3xl bg-[#E8E6FF] flex items-center text-[14px] font-medium text-[#7F7F7F] h-[30px] py-[5px] px-[7px]"
                >
                  <span className="mr-2">
                    <DocumentTagIcon className="w-5 h-5" aria-hidden="true" />
                  </span>
                  Geriatrics
                </button>
                <button
                  type="button"
                  className="rounded-3xl flex items-center text-[16px] font-medium text-[#7070FF] h-[30px] py-[5px] px-[7px]"
                >
                  <span>
                    <AddPlusIcon className="w-5 h-5" aria-hidden="true" />
                  </span>
                  View More
                </button>
              </div>

              <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
                <span className="text-[#5E5E6F]">CEUs Earned: </span>10 CEUs
              </p>
              <div className="flex flex-wrap w-full gap-1.5">
                <button
                  type="button"
                  className="rounded-3xl border border-[#1ECA63] flex items-center text-[14px] font-medium text-[#1ECA63] h-[30px] py-[5px] px-[10px]"
                >
                  <span className="mr-2">
                    <CertifiedIcon className="w-5 h-5" aria-hidden="true" />
                  </span>
                  Name of Document
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-5 border-b">
          <div className="flex justify-between items-center w-full min-h-[40px]">
            <div>
              <h4 className="text-[17px] font-semibold text-[#5E5E6F] mb-2">
                Advanced Pediatric Care Techniques:
              </h4>
              <h4 className="text-[17px] font-semibold text-[#5E5E6F] mb-2">
                Enhancing Skills and Knowledge for Modern Nursing
              </h4>
            </div>
            <div className="flex items-center mr-[12px]">
              <button type="button" className="text-white">
                <EditIconTransparent className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          </div>
          <div className="mb-4">
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Institution Name: </span>
              Riverside Health Sciences Institute - Center for Nursing
              Excellence
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Course Type: </span>Seminar
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Field of Study: </span>Geriatric
              Nursing
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Start Date: </span>
              September 2020
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">End/Expected Date: </span>October
              2024
            </p>
            <div className="flex flex-wrap w-full gap-1.5 mb-2">
              <p className="flex items-center text-[16px] text-[#7F7F7F] font-medium mr-2">
                <span className="text-[#5E5E6F]">Skills Acquired: </span>
              </p>
              <button
                type="button"
                className="rounded-3xl bg-[#E8E6FF] flex items-center text-[14px] font-medium text-[#7F7F7F] h-[30px] py-[5px] px-[7px]"
              >
                <span className="mr-2">
                  <DocumentTagIcon className="w-5 h-5" aria-hidden="true" />
                </span>
                Elderly Population
              </button>
              <button
                type="button"
                className="rounded-3xl bg-[#E8E6FF] flex items-center text-[14px] font-medium text-[#7F7F7F] h-[30px] py-[5px] px-[7px]"
              >
                <span className="mr-2">
                  <DocumentTagIcon className="w-5 h-5" aria-hidden="true" />
                </span>
                Geriatrics
              </button>
              <button
                type="button"
                className="rounded-3xl flex items-center text-[16px] font-medium text-[#7070FF] h-[30px] py-[5px] px-[7px]"
              >
                <span>
                  <AddPlusIcon className="w-5 h-5" aria-hidden="true" />
                </span>
                View More
              </button>
            </div>

            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">CEUs Earned: </span>10 CEUs
            </p>
            <div className="flex flex-wrap w-full gap-1.5">
              <button
                type="button"
                className="rounded-3xl border border-[#1ECA63] flex items-center text-[14px] font-medium text-[#1ECA63] h-[30px] py-[5px] px-[10px]"
              >
                <span className="mr-2">
                  <CertifiedIcon className="w-5 h-5" aria-hidden="true" />
                </span>
                Name of Document
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Training Certifications Component End */}
    </div>
  );
};

export default Education;
