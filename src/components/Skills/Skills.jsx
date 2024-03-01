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
  BackIcon,
  EditIconTransparent,
  AddIconSmall,
  DownloadIcon,
  DocumentTagIcon,
  UploadIcon,
  DropdownIcon,
  CheckboxIcon,
  PhoneIcon,
  DeleteIcon,
  BoxIcon,
  DocumentFrameIcon
} from "@/svgs";
import AddCardComponent from "../AddCardComponent/AddCardComponent";

const Skills = () => {
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
                <button type="button" className="mr-1">
                  <DocumentsIcon className="w-6 h-6" aria-hidden="true" />
                </button>
                <p lassname="m-1.5 text-slate-500 font-medium">Documents</p>
              </a>
            </li>
            <li className="flex items-center w-full focus-within:z-10">
              <a
                href="#"
                className="flex items-center justify-center  w-full min-h-[46px] border-r  text-[#7070FF] rounded-s-2xl"
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

      {/* New Card Empty component */}

      <div className="px-5 pb-6 mt-6 bg-white rounded-2xl">
        <div className="flex justify-between items-center w-full h-[67px] border-b">
          <div>
            <h4 className="text-[19px] font-semibold text-[#7070FF]">
              Add a Checklist
            </h4>
          </div>
          <div></div>
        </div>
        <div className="flex justify-center pt-5">
          {/* Dropdown menu */}
          <button
            id=" dropdownOffsetButton"
            data-dropdown-toggle="dropdownSkidding"
            data-dropdown-offset-distance="10"
            data-dropdown-offset-skidding="100"
            data-dropdown-placement="right"
            className="border border-[#EAEAF1] rounded-full text-[#5E5E6F] w-full justify-between font-medium text-[14px] px-5 py-2.5 text-center inline-flex items-center"
            type="button"
          >
            <p className="mr-4">Dropdown button</p>

            <span className="w-3">
              <DropdownIcon aria-hidden="true" />
            </span>
          </button>
          <div
            id="dropdownSkidding"
            className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
          >
            <ul
              class="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDefault"
            >
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Dashboard
                </a>
              </li>
            </ul>
          </div>
          <div className="mx-[20px] flex items-center">
            <p lassname="m-1.5 text-slate-500 font-medium">or</p>
          </div>
          <button
            type="button"
            className="rounded-3xl bg-[#7070FF] flex items-center text-[16px] font-medium text-white h-[45px] py-[10px] px-[20px] min-w-fit leading-6"
          >
            <p className="mr-4">Upload External Checklist</p>

            <UploadIcon className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="px-5 pb-6 mt-6 bg-white rounded-2xl">
        <div className="flex justify-between items-center w-full h-[67px] border-b">
          <div>
            <h4 className="text-[19px] font-semibold text-[#7070FF]">
            Completed Chekcklists
            </h4>
          </div>
          <div></div>
        </div>
        <div className="pt-5 border flex justify-between px-[16px] py-[14px] items-center rounded-3xl mt-6">
          <div>
            <h4 className="text-[17px] font-semibold text-[#5E5E6F] mb-2">
              Clinical Nurse Specialist (CNS) – Oncology
            </h4>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Company Name: </span>City Health
              Oncology Center
            </p>
          </div>
          <div>
            <button
              type="button"
              className="rounded-3xl border border-[#F46A4C] flex items-center text-[14px] font-medium text-[#F46A4C] h-[30px] py-[5px] px-[14px]"
            >
              70% Complete
            </button>
          </div>
          <div>
            <button type="button" className="text-white">
              <EditIconTransparent className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="pt-5 border flex justify-between px-[16px] py-[14px] items-center rounded-3xl mt-6">
          <div>
            <h4 className="text-[17px] font-semibold text-[#5E5E6F] mb-2">
              Clinical Nurse Specialist (CNS) – Oncology
            </h4>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Company Name: </span>City Health
              Oncology Center
            </p>
          </div>
          <div>
            <button
              type="button"
              className="rounded-3xl border border-[#EB3838] flex items-center text-[14px] font-medium text-[#EB3838] h-[30px] py-[5px] px-[14px]"
            >
              50% Complete
            </button>
          </div>
          <div>
            <button type="button" className="text-white">
              <EditIconTransparent className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="pt-5 border flex justify-between px-[16px] py-[14px] items-center rounded-3xl mt-6">
          <div>
            <h4 className="text-[17px] font-semibold text-[#5E5E6F] mb-2">
              Clinical Nurse Specialist (CNS) – Oncology
            </h4>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Company Name: </span>City Health
              Oncology Center
            </p>
          </div>
          <div>
            <button
              type="button"
              className="rounded-3xl border border-[#1ECA63] flex items-center text-[14px] font-medium text-[#1ECA63] h-[30px] py-[5px] px-[14px]"
            >
              90% Complete
            </button>
          </div>
          <div>
            <button type="button" className="text-white">
              <EditIconTransparent className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="pt-5 border flex justify-between px-[16px] py-[14px] items-center rounded-3xl mt-6">
          <div>
            <h4 className="text-[17px] font-semibold text-[#5E5E6F] mb-2">
              Clinical Nurse Specialist (CNS) – Oncology
            </h4>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Company Name: </span>City Health
              Oncology Center
            </p>
          </div>
          <div>
            <button
              type="button"
              className="rounded-3xl border border-[#F46A4C] flex items-center text-[14px] font-medium text-[#F46A4C] h-[30px] py-[5px] px-[14px]"
            >
              70% Complete
            </button>
          </div>
          <div>
            <button type="button" className="text-white">
              <EditIconTransparent className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="pt-5 border flex justify-between px-[16px] py-[14px] items-center rounded-3xl mt-6">
          <div>
            <h4 className="text-[17px] font-semibold text-[#5E5E6F] mb-2">
              Clinical Nurse Specialist (CNS) – Oncology
            </h4>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Company Name: </span>City Health
              Oncology Center
            </p>
          </div>
          <div>
            <button
              type="button"
              className="rounded-3xl border border-[#1ECA63] flex items-center text-[14px] font-medium text-[#1ECA63] h-[30px] py-[5px] px-[14px]"
            >
              70% Complete
            </button>
          </div>
          <div>
            <button type="button" className="text-white">
              <EditIconTransparent className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      <div className="px-5 pb-6 mt-6 bg-white rounded-2xl">
        <div className="flex justify-between items-center w-full h-[67px] border-b">
          <div>
            <h4 className="text-[19px] font-semibold text-[#7070FF]">
              Add a Checklist
            </h4>
          </div>
          <div></div>
        </div>
        <div className="pt-5 border flex justify-between px-[16px] py-[14px] items-center rounded-3xl mt-6">
          <div>
            <h4 className="text-[17px] font-semibold text-[#5E5E6F] mb-2">
              Clinical Nurse Specialist (CNS) – Oncology
            </h4>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Company Name: </span>City Health
              Oncology Center
            </p>
          </div>
          <div>
            <button
              type="button"
              className="rounded-3xl border border-[#299DCF] flex items-center text-[14px] font-medium text-[#299DCF] h-[30px] py-[5px] px-[14px]"
            >
              <span className="mr-2">
                <DocumentTagIcon className="w-5 h-5" aria-hidden="true" />
              </span>
              Cm_Checklist913.pdf
            </button>
          </div>
          <div>
            <button type="button" className="text-white">
              <DeleteIcon className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      <div className="px-5 pb-6 mt-6 bg-white rounded-2xl">
        <div className="flex justify-between items-center w-full h-[67px] border-b">
          <div>
            <h4 className="text-[19px] font-semibold text-[#7070FF]">
              Add a Checklist
            </h4>
          </div>
          <div></div>
        </div>
        <div className="flex justify-center pt-5">
          {/* Dropdown menu */}
          <button
            id=" dropdownOffsetButton"
            data-dropdown-toggle="dropdownSkidding"
            data-dropdown-offset-distance="10"
            data-dropdown-offset-skidding="100"
            data-dropdown-placement="right"
            className="border border-[#EAEAF1] rounded-full text-[#5E5E6F] w-full justify-between font-medium text-[14px] px-5 py-2.5 text-center inline-flex items-center"
            type="button"
          >
            <p className="mr-4">Dropdown button</p>

            <span className="w-3">
              <DropdownIcon aria-hidden="true" />
            </span>
          </button>
          <div
            id="dropdownSkidding"
            className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
          >
            <ul
              class="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDefault"
            >
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Dashboard
                </a>
              </li>
            </ul>
          </div>
          <div className="mx-[20px] flex items-center">
            <p lassname="m-1.5 text-slate-500 font-medium">or</p>
          </div>
          <button
            type="button"
            className="rounded-3xl bg-[#7070FF] flex items-center text-[16px] font-medium text-white h-[45px] py-[10px] px-[20px] min-w-fit leading-6"
          >
            <p className="mr-4">Upload External Checklist</p>

            <UploadIcon className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="px-5 py-6 mt-6 bg-white rounded-2xl">
        <div className="flex justify-center text-center flex-col items-center">
        <BoxIcon className="w-5 h-5" aria-hidden="true" />
          <h4 className="text-[17px] font-semibold text-[#5E5E6F]">
              Add a Checklist
            </h4>
            <p className="font-normal text-[16px] leading-6 text-[#5E5E6F]">Upload External Checklist</p>
        </div>
          
      </div>

      <div className="px-5 py-6 mt-6 bg-white rounded-2xl">
            <div className="flex justify-center text-center flex-col items-center">
        <DocumentFrameIcon className="w-5 h-5" aria-hidden="true" />
          <h4 className="text-[17px] font-semibold text-[#5E5E6F]">
              Add a Checklist
            </h4>
            <p className="font-normal text-[16px] leading-6 text-[#5E5E6F]">Upload External Checklist</p>
        </div>
      </div>

    </div>
  );
};

export default Skills;
