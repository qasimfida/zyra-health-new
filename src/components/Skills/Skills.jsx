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
  DocumentFrameIcon,
  AddPlusIcon
} from "@/svgs/icons";
import ProgressBar from "../CustomProgressbar/CustomProgressbar";
import CustomCheckbox from "../CustomCheckbox/CustomCheckbox";
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
          <p className="font-normal text-[16px] leading-6 text-[#5E5E6F]">
            Upload External Checklist
          </p>
        </div>
      </div>

      <div className="px-5 py-6 mt-6 bg-white rounded-2xl">
        <div className="flex justify-center text-center flex-col items-center">
          <DocumentFrameIcon className="w-5 h-5" aria-hidden="true" />
          <h4 className="text-[17px] font-semibold text-[#5E5E6F]">
            Add a Checklist
          </h4>
          <p className="font-normal text-[16px] leading-6 text-[#5E5E6F]">
            Upload External Checklist
          </p>
        </div>
      </div>

      <div className="px-5 py-6 mt-6 bg-white rounded-2xl">
        <div className="flex justify-between items-center w-full min-h-[67px] border-b">
          <div className="flex items-center">
            <button type="button" className="mr-4 text-white">
              <BackIcon className="w-5 h-5" aria-hidden="true" />
            </button>
            <h4 className="text-[19px] font-semibold text-[#7070FF]">
              Please fill out your Administrative RN Skills
            </h4>
          </div>
        </div>
        <div className="flex justify-between mt-6">
          <div>
            <button type="button" className="flex mb-4 items-center">
              <div className="w-6 h-6 bg-[#FF5858] rounded-full"></div>
              <span className="ml-2 text-[16px] font-medium text-[#5E5E6F]">
                No theory or experience
              </span>
            </button>
            <button type="button" className="flex mb-4">
              <div className="w-6 h-6 bg-[#FE9B26] rounded-full"></div>
              <span className="ml-2 text-[16px] font-medium text-[#5E5E6F]">
                Limited experience. Need training
              </span>
            </button>
          </div>
          <div>
            <button
              type="button"
              className="flex text-[16px] font-medium text-[#5E5E6F] mb-4"
            >
              <div className="w-6 h-6 bg-[#FFC75A] rounded-full"></div>
              <span className="ml-2">
                Experienced. Able to perform under supervision
              </span>
            </button>
            <button
              type="button"
              className="flex text-[16px] font-medium text-[#5E5E6F] mb-4"
            >
              <div className="w-6 h-6 bg-[#00DF59] rounded-full"></div>
              <span className="ml-2">
                Proficient. Able to perform independently
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="pt-5 border flex flex-col justify-start px-[16px] py-[14px] rounded-3xl mt-6 bg-[#CDE1E1] h-[100px]">
        <ProgressBar filled={30} />
      </div>

      <div className="px-5 py-6 mt-6 bg-white rounded-2xl">
          <div className="flex justify-between items-center w-full min-h-[67px] border-b">
            <div className="flex items-center">
              <h4 className="text-[19px] font-semibold text-[#7070FF]">
              Administrative Duties
              </h4>
            </div>
          </div>
          <div className="mt-6 border-b h-[54px] flex justify-between">
                <div>
                  <h4 className="text-[16px] font-semibold text-[#5E5E6F] mb-2">
                  Data Entry
                  </h4>
                </div>
                <div className="flex gap-2">
                    <CustomCheckbox variant="red" />
                    <CustomCheckbox variant="orange" checkedDefault={true} />
                    <CustomCheckbox variant="yellow" checkedDefault={true} />
                    <CustomCheckbox variant="green" />
                </div>
          </div>

          <div className="mt-6 border-b h-[54px] flex justify-between">
                <div>
                  <h4 className="text-[16px] font-semibold text-[#5E5E6F] mb-2">
                  Medical Records - Entry
                  </h4>
                </div>
                <div className="flex gap-2">
                    <CustomCheckbox variant="red" />
                    <CustomCheckbox variant="orange" />
                    <CustomCheckbox variant="yellow" checkedDefault={true} />
                    <CustomCheckbox variant="green" checkedDefault={true} />
                </div>
          </div>

          <div className="mt-6 border-b h-[54px] flex justify-between">
                <div>
                  <h4 className="text-[16px] font-semibold text-[#5E5E6F] mb-2">
                  Medical Records - Maintenance
                  </h4>
                </div>
                <div className="flex gap-2">
                    <CustomCheckbox variant="red" />
                    <CustomCheckbox variant="orange" />
                    <CustomCheckbox variant="yellow" checkedDefault={true} />
                    <CustomCheckbox variant="green" />
                </div>
          </div>

          <div className="mt-6 border-b h-[54px] flex justify-between">
                <div>
                  <h4 className="text-[16px] font-semibold text-[#5E5E6F] mb-2">
                  Electronic Medical Records - Entry  
                  </h4>
                </div>
                <div className="flex gap-2">
                    <CustomCheckbox variant="red" checkedDefault={true} />
                    <CustomCheckbox variant="orange" />
                    <CustomCheckbox variant="yellow" />
                    <CustomCheckbox variant="green" />
                </div>
          </div>

          <div className="mt-6 border-b h-[54px] flex justify-between">
                <div>
                  <h4 className="text-[16px] font-semibold text-[#5E5E6F] mb-2">
                  Electronic Medical Records - Maintenance
                  </h4>
                </div>
                <div className="flex gap-2">
                    <CustomCheckbox variant="red" />
                    <CustomCheckbox variant="orange" />
                    <CustomCheckbox variant="yellow" />
                    <CustomCheckbox variant="green" />
                </div>
          </div>

          <div className="mt-6 border-b h-[54px] flex justify-between">
                <div>
                  <h4 className="text-[16px] font-semibold text-[#5E5E6F] mb-2">
                  Electronic Medical Records - Maintenance
                  </h4>
                </div>
                <div className="flex gap-2">
                    <CustomCheckbox variant="red" />
                    <CustomCheckbox variant="orange" />
                    <CustomCheckbox variant="yellow" />
                    <CustomCheckbox variant="green" />
                </div>
          </div>

          <div className="mt-6 border-b h-[54px] flex justify-between">
                <div>
                  <h4 className="text-[16px] font-semibold text-[#5E5E6F] mb-2">
                  Gathers data and runs reports
                  </h4>
                </div>
                <div className="flex gap-2">
                    <CustomCheckbox variant="red" />
                    <CustomCheckbox variant="orange" />
                    <CustomCheckbox variant="yellow" />
                    <CustomCheckbox variant="green" />
                </div>
          </div>

          <div className="mt-6 border-b h-[54px] flex justify-between">
                <div>
                  <h4 className="text-[16px] font-semibold text-[#5E5E6F] mb-2">
                  Patient Files - Set up, report, and record
                  </h4>
                </div>
                <div className="flex gap-2">
                    <CustomCheckbox variant="red" />
                    <CustomCheckbox variant="orange" />
                    <CustomCheckbox variant="yellow" />
                    <CustomCheckbox variant="green" />
                </div>
          </div>

          <div className="mt-6 border-b h-[54px] flex justify-between">
                <div>
                  <h4 className="text-[16px] font-semibold text-[#5E5E6F] mb-2">
                  Completion and filing/distribution of reports
                  </h4>
                </div>
                <div className="flex gap-2">
                    <CustomCheckbox variant="red" />
                    <CustomCheckbox variant="orange" />
                    <CustomCheckbox variant="yellow" />
                    <CustomCheckbox variant="green" />
                </div>
          </div>

          <div className="mt-6 border-b h-[54px] flex justify-between">
                <div>
                  <h4 className="text-[16px] font-semibold text-[#5E5E6F] mb-2">
                  Schedules appointments/tests
                  </h4>
                </div>
                <div className="flex gap-2">
                    <CustomCheckbox variant="red" />
                    <CustomCheckbox variant="orange" />
                    <CustomCheckbox variant="yellow" />
                    <CustomCheckbox variant="green" />
                </div>
          </div>

          <div className="mt-6 border-b h-[54px] flex justify-between">
                <div>
                  <h4 className="text-[16px] font-semibold text-[#5E5E6F] mb-2">
                  Takes, distributes, and prioritizes messages
                  </h4>
                </div>
                <div className="flex gap-2">
                    <CustomCheckbox variant="red" />
                    <CustomCheckbox variant="orange" />
                    <CustomCheckbox variant="yellow" />
                    <CustomCheckbox variant="green" />
                </div>
          </div>

          <div className="mt-6 border-b h-[54px] flex justify-between">
                <div>
                  <h4 className="text-[16px] font-semibold text-[#5E5E6F] mb-2">
                  Assists physicians with procedures
                  </h4>
                </div>
                <div className="flex gap-2">
                    <CustomCheckbox variant="red" />
                    <CustomCheckbox variant="orange" />
                    <CustomCheckbox variant="yellow" />
                    <CustomCheckbox variant="green" />
                </div>
          </div>

          <div className="mt-6 border-b h-[54px] flex justify-between">
                <div>
                  <h4 className="text-[16px] font-semibold text-[#5E5E6F] mb-2">
                  Assists nursing staff
                  </h4>
                </div>
                <div className="flex gap-2">
                    <CustomCheckbox variant="red" />
                    <CustomCheckbox variant="orange" />
                    <CustomCheckbox variant="yellow" />
                    <CustomCheckbox variant="green" />
                </div>
          </div>

          <div className="mt-6 border-b h-[54px] flex justify-between">
                <div>
                  <h4 className="text-[16px] font-semibold text-[#5E5E6F] mb-2">
                  Prepares patients for appointments and exams
                  </h4>
                </div>
                <div className="flex gap-2">
                    <CustomCheckbox variant="red" />
                    <CustomCheckbox variant="orange" />
                    <CustomCheckbox variant="yellow" />
                    <CustomCheckbox variant="green" />
                </div>
          </div>

          <div className="mt-6 border-b h-[54px] flex justify-between">
                <div>
                  <h4 className="text-[16px] font-semibold text-[#5E5E6F] mb-2">
                  Gathers patient history and VS
                  </h4>
                </div>
                <div className="flex gap-2">
                    <CustomCheckbox variant="red" />
                    <CustomCheckbox variant="orange" />
                    <CustomCheckbox variant="yellow" />
                    <CustomCheckbox variant="green" />
                </div>
          </div>

          <div className="mt-6 border-b h-[54px] flex justify-between">
                <div>
                  <h4 className="text-[16px] font-semibold text-[#5E5E6F] mb-2">
                  Gives injections as directed
                  </h4>
                </div>
                <div className="flex gap-2">
                    <CustomCheckbox variant="red" />
                    <CustomCheckbox variant="orange" />
                    <CustomCheckbox variant="yellow" />
                    <CustomCheckbox variant="green" />
                </div>
          </div>

          <div className="mt-6 border-b h-[54px] flex justify-between">
                <div>
                  <h4 className="text-[16px] font-semibold text-[#5E5E6F] mb-2">
                  Performs phlebotomy skills
                  </h4>
                </div>
                <div className="flex gap-2">
                    <CustomCheckbox variant="red" />
                    <CustomCheckbox variant="orange" />
                    <CustomCheckbox variant="yellow" />
                    <CustomCheckbox variant="green" />
                </div>
          </div>

          <div className="mt-6 border-b h-[54px] flex justify-between">
                <div>
                  <h4 className="text-[16px] font-semibold text-[#5E5E6F] mb-2">
                  Collects lab. Specimens
                  </h4>
                </div>
                <div className="flex gap-2">
                    <CustomCheckbox variant="red" />
                    <CustomCheckbox variant="orange" />
                    <CustomCheckbox variant="yellow" />
                    <CustomCheckbox variant="green" />
                </div>
          </div>

          <div className="mt-6 border-b h-[54px] flex justify-between">
                <div>
                  <h4 className="text-[16px] font-semibold text-[#5E5E6F] mb-2">
                  Administer EKGs
                  </h4>
                </div>
                <div className="flex gap-2">
                    <CustomCheckbox variant="red" />
                    <CustomCheckbox variant="orange" />
                    <CustomCheckbox variant="yellow" />
                    <CustomCheckbox variant="green" />
                </div>
          </div>

          <div className="mt-6 border-b h-[54px] flex justify-between">
                <div>
                  <h4 className="text-[16px] font-semibold text-[#5E5E6F] mb-2">
                  Completes specimen testing, i.e. glucose, strep, mono, flu
                  </h4>
                </div>
                <div className="flex gap-2">
                    <CustomCheckbox variant="red" />
                    <CustomCheckbox variant="orange" />
                    <CustomCheckbox variant="yellow" />
                    <CustomCheckbox variant="green" />
                </div>
          </div>



      </div>

      <div className="px-5 py-6 mt-6 bg-white rounded-2xl">
          <div className="flex justify-between items-center w-full min-h-[67px] border-b">
            <div className="flex items-center">
              <h4 className="text-[19px] font-semibold text-[#7070FF]">
              Computer Skills
              </h4>
            </div>
          </div>
          <div className="mt-6 border-b h-[54px] flex justify-between">
                <div>
                  <h4 className="text-[16px] font-semibold text-[#5E5E6F] mb-2">
                  Medic, Medic Soft
                  </h4>
                </div>
                <div className="flex gap-2">
                    <CustomCheckbox variant="red" />
                    <CustomCheckbox variant="orange" checkedDefault={true} />
                    <CustomCheckbox variant="yellow" checkedDefault={true} />
                    <CustomCheckbox variant="green" />
                </div>
          </div>

          <div className="mt-6 border-b h-[54px] flex justify-between">
                <div>
                  <h4 className="text-[16px] font-semibold text-[#5E5E6F] mb-2">
                  Centricity
                  </h4>
                </div>
                <div className="flex gap-2">
                    <CustomCheckbox variant="red" />
                    <CustomCheckbox variant="orange" />
                    <CustomCheckbox variant="yellow" checkedDefault={true} />
                    <CustomCheckbox variant="green" checkedDefault={true} />
                </div>
          </div>

          <div className="mt-6 border-b h-[54px] flex justify-between">
                <div>
                  <h4 className="text-[16px] font-semibold text-[#5E5E6F] mb-2">
                  Medical Manager
                  </h4>
                </div>
                <div className="flex gap-2">
                    <CustomCheckbox variant="red" />
                    <CustomCheckbox variant="orange" />
                    <CustomCheckbox variant="yellow" checkedDefault={true} />
                    <CustomCheckbox variant="green" />
                </div>
          </div>

          <div className="mt-6 border-b h-[54px] flex justify-between">
                <div>
                  <h4 className="text-[16px] font-semibold text-[#5E5E6F] mb-2">
                  HIS
                  </h4>
                </div>
                <div className="flex gap-2">
                    <CustomCheckbox variant="red" checkedDefault={true} />
                    <CustomCheckbox variant="orange" />
                    <CustomCheckbox variant="yellow" />
                    <CustomCheckbox variant="green" />
                </div>
          </div>

          <div className="mt-6 border-b h-[54px] flex justify-between">
                <div>
                  <h4 className="text-[16px] font-semibold text-[#5E5E6F] mb-2">
                  Word, Word Perfect
                  </h4>
                </div>
                <div className="flex gap-2">
                    <CustomCheckbox variant="red" />
                    <CustomCheckbox variant="orange" />
                    <CustomCheckbox variant="yellow" />
                    <CustomCheckbox variant="green" />
                </div>
          </div>

          <div className="mt-6 border-b h-[54px] flex justify-between">
                <div>
                  <h4 className="text-[16px] font-semibold text-[#5E5E6F] mb-2">
                  Soft
                  </h4>
                </div>
                <div className="flex gap-2">
                    <CustomCheckbox variant="red" />
                    <CustomCheckbox variant="orange" />
                    <CustomCheckbox variant="yellow" />
                    <CustomCheckbox variant="green" />
                </div>
          </div>

          <div className="mt-6 border-b h-[54px] flex justify-between">
                <div>
                  <h4 className="text-[16px] font-semibold text-[#5E5E6F] mb-2">
                  Windows
                  </h4>
                </div>
                <div className="flex gap-2">
                    <CustomCheckbox variant="red" />
                    <CustomCheckbox variant="orange" />
                    <CustomCheckbox variant="yellow" />
                    <CustomCheckbox variant="green" />
                </div>
          </div>

          <div className="mt-6 border-b h-[54px] flex justify-between">
                <div>
                  <h4 className="text-[16px] font-semibold text-[#5E5E6F] mb-2">
                  IDX
                  </h4>
                </div>
                <div className="flex gap-2">
                    <CustomCheckbox variant="red" />
                    <CustomCheckbox variant="orange" />
                    <CustomCheckbox variant="yellow" />
                    <CustomCheckbox variant="green" />
                </div>
          </div>

          <div className="mt-6 border-b h-[54px] flex justify-between">
                <div>
                  <h4 className="text-[16px] font-semibold text-[#5E5E6F] mb-2">
                  Meditech
                  </h4>
                </div>
                <div className="flex gap-2">
                    <CustomCheckbox variant="red" />
                    <CustomCheckbox variant="orange" />
                    <CustomCheckbox variant="yellow" />
                    <CustomCheckbox variant="green" />
                </div>
          </div>


      </div>

      <div className="px-5 py-6 mt-6 bg-white rounded-2xl">
          <div className="flex justify-between items-center w-full min-h-[67px] border-b">
            <div className="flex items-center">
              <h4 className="text-[19px] font-semibold text-[#7070FF]">
              Age-Specific Competencies
              </h4>
            </div>
          </div>
          <div className="mt-6 border-b h-[54px] flex justify-between">
                <div>
                  <h4 className="text-[16px] font-semibold text-[#5E5E6F] mb-2">
                  Newborn (birth to 30 days)
                  </h4>
                </div>
                <div className="flex gap-2">
                    <CustomCheckbox variant="red" />
                    <CustomCheckbox variant="orange" checkedDefault={true} />
                    <CustomCheckbox variant="yellow" checkedDefault={true} />
                    <CustomCheckbox variant="green" />
                </div>
          </div>

          <div className="mt-6 border-b h-[54px] flex justify-between">
                <div>
                  <h4 className="text-[16px] font-semibold text-[#5E5E6F] mb-2">
                  Infant (31 days to 1 year)
                  </h4>
                </div>
                <div className="flex gap-2">
                    <CustomCheckbox variant="red" />
                    <CustomCheckbox variant="orange" />
                    <CustomCheckbox variant="yellow" checkedDefault={true} />
                    <CustomCheckbox variant="green" checkedDefault={true} />
                </div>
          </div>

          <div className="mt-6 border-b h-[54px] flex justify-between">
                <div>
                  <h4 className="text-[16px] font-semibold text-[#5E5E6F] mb-2">
                  Toddler (ages 2-3 years)
                  </h4>
                </div>
                <div className="flex gap-2">
                    <CustomCheckbox variant="red" />
                    <CustomCheckbox variant="orange" />
                    <CustomCheckbox variant="yellow" checkedDefault={true} />
                    <CustomCheckbox variant="green" />
                </div>
          </div>

          <div className="mt-6 border-b h-[54px] flex justify-between">
                <div>
                  <h4 className="text-[16px] font-semibold text-[#5E5E6F] mb-2">
                  Preschooler (ages 4-5 years)
                  </h4>
                </div>
                <div className="flex gap-2">
                    <CustomCheckbox variant="red" checkedDefault={true} />
                    <CustomCheckbox variant="orange" />
                    <CustomCheckbox variant="yellow" />
                    <CustomCheckbox variant="green" />
                </div>
          </div>

          <div className="mt-6 border-b h-[54px] flex justify-between">
                <div>
                  <h4 className="text-[16px] font-semibold text-[#5E5E6F] mb-2">
                  Childhood (ages 6-12 years)
                  </h4>
                </div>
                <div className="flex gap-2">
                    <CustomCheckbox variant="red" />
                    <CustomCheckbox variant="orange" />
                    <CustomCheckbox variant="yellow" />
                    <CustomCheckbox variant="green" />
                </div>
          </div>

          <div className="mt-6 border-b h-[54px] flex justify-between">
                <div>
                  <h4 className="text-[16px] font-semibold text-[#5E5E6F] mb-2">
                  Adolescents (ages 13-21 years)
                  </h4>
                </div>
                <div className="flex gap-2">
                    <CustomCheckbox variant="red" />
                    <CustomCheckbox variant="orange" />
                    <CustomCheckbox variant="yellow" />
                    <CustomCheckbox variant="green" />
                </div>
          </div>

          <div className="mt-6 border-b h-[54px] flex justify-between">
                <div>
                  <h4 className="text-[16px] font-semibold text-[#5E5E6F] mb-2">
                  Young Adults (ages 22-39 years)
                  </h4>
                </div>
                <div className="flex gap-2">
                    <CustomCheckbox variant="red" />
                    <CustomCheckbox variant="orange" />
                    <CustomCheckbox variant="yellow" />
                    <CustomCheckbox variant="green" />
                </div>
          </div>

          <div className="mt-6 border-b h-[54px] flex justify-between">
                <div>
                  <h4 className="text-[16px] font-semibold text-[#5E5E6F] mb-2">
                  Adults (ages 40-64 years)
                  </h4>
                </div>
                <div className="flex gap-2">
                    <CustomCheckbox variant="red" />
                    <CustomCheckbox variant="orange" />
                    <CustomCheckbox variant="yellow" />
                    <CustomCheckbox variant="green" />
                </div>
          </div>

          <div className="mt-6 border-b h-[54px] flex justify-between">
                <div>
                  <h4 className="text-[16px] font-semibold text-[#5E5E6F] mb-2">
                  Older Adults (ages 65 -79 years)
                  </h4>
                </div>
                <div className="flex gap-2">
                    <CustomCheckbox variant="red" />
                    <CustomCheckbox variant="orange" />
                    <CustomCheckbox variant="yellow" />
                    <CustomCheckbox variant="green" />
                </div>
          </div>

          <div className="mt-6 border-b h-[54px] flex justify-between">
                <div>
                  <h4 className="text-[16px] font-semibold text-[#5E5E6F] mb-2">
                  Elderly (ages 80+ years)
                  </h4>
                </div>
                <div className="flex gap-2">
                    <CustomCheckbox variant="red" />
                    <CustomCheckbox variant="orange" />
                    <CustomCheckbox variant="yellow" />
                    <CustomCheckbox variant="green" />
                </div>
          </div>


      </div>

      {/* Search Preferences Component start */}
      <div className="px-5 mt-6 bg-white rounded-2xl">
        <div className="flex justify-between items-center w-full min-h-[67px] border-b">
          <div>
            <h4 className="text-[19px] font-semibold text-[#7070FF]">
            Search Preferences
            </h4>
          </div>
          <div className="flex items-center">
            <button type="button" className="text-white">
              <EditIcon className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="pt-5 border-b">
          <div className="mb-4">
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">
              Job Type Preference:
              </span>
              Full-time
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">
              Job Search Status:
              </span>
              Actively looking for new opportunities
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Start Date Availability: </span>
              Immediately
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">
              Work Style Preference:
              </span>
              Remote
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">
              Willingness to Travel/Relocate: 
              </span>
              Yes, I am willing to travel on
            </p>
            <div className="flex flex-wrap w-full gap-1.5 mb-2">
              <p className="flex items-center text-[16px] text-[#7F7F7F] font-medium mr-2">
                <span className="text-[#5E5E6F]">Skills Acquired: </span>
              </p>
              <button
                type="button"
                className=" flex items-center text-[14px] font-medium text-[#7F7F7F] py-[5px] px-[7px]"
              >
                
                Patient Assessment
              </button>
              <button
                type="button"
                className="flex items-center text-[14px] font-medium text-[#7F7F7F] py-[5px] px-[7px]"
              >
                
                Care Planning
              </button>
              <button
                type="button"
                className="flex items-center text-[14px] font-medium text-[#7F7F7F] py-[5px] px-[7px]"
              >
                
                Patient Education
              </button>
              <button
                type="button"
                className="flex items-center text-[16px] font-medium text-[#7070FF] py-[5px] px-[7px]"
              >
                <span>
                  <AddPlusIcon className="w-5 h-5" aria-hidden="true" />
                </span>
                View More
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Experience Summary Component End */}

      {/* Workplace Preferences Component start */}
      <div className="px-5 mt-6 bg-white rounded-2xl">
        <div className="flex justify-between items-center w-full min-h-[67px] border-b">
          <div>
            <h4 className="text-[19px] font-semibold text-[#7070FF]">
            Workplace Preferences
            </h4>
          </div>
          <div className="flex items-center">
            <button type="button" className="text-white">
              <EditIcon className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="pt-5 border-b">
          <div className="mb-4">
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">
              Job Opportunity Priorities:
              </span>
              Company Culture
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">
              Preferred Organization Type:
              </span>
              Hospital chain
            </p>

            <div className="flex flex-wrap w-full gap-1.5 mb-2">
              <p className="flex items-center text-[16px] text-[#7F7F7F] font-medium mr-2">
                <span className="text-[#5E5E6F]">Skills Acquired: </span>
              </p>
              <button
                type="button"
                className=" flex items-center text-[14px] font-medium text-[#7F7F7F] py-[5px] px-[7px]"
              >
                
                Adult Day Care Center
              </button>
              <button
                type="button"
                className="flex items-center text-[16px] font-medium text-[#7070FF] py-[5px] px-[7px]"
              >
                <span>
                  <AddPlusIcon className="w-5 h-5" aria-hidden="true" />
                </span>
                View More
              </button>
            </div>

            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">
              Desired Salary Range:
              </span>
              $45,000-$60,000/Year
            </p>

            <div className="flex flex-wrap w-full gap-1.5 mb-2">
              <p className="flex items-center text-[16px] text-[#7F7F7F] font-medium mr-2">
                <span className="text-[#5E5E6F]">Skills Acquired: </span>
              </p>
              <button
                type="button"
                className=" flex items-center text-[14px] font-medium text-[#7F7F7F] py-[5px] px-[7px]"
              >
                
                Rotating Shifts
              </button>
              <button
                type="button"
                className=" flex items-center text-[14px] font-medium text-[#7F7F7F] py-[5px] px-[7px]"
              >
                
                Weekend Shifts
              </button>
              <button
                type="button"
                className="flex items-center text-[16px] font-medium text-[#7070FF] py-[5px] px-[7px]"
              >
                <span>
                  <AddPlusIcon className="w-5 h-5" aria-hidden="true" />
                </span>
                View More
              </button>
            </div>

            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">
              Management Style:
              </span>
              Autonomous
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">
              Team Environment:
              </span>
              Dynamic
            </p>

            
          </div>
        </div>
      </div>
      {/* Experience Summary Component End */}

      <AddCardComponent
        title={"Add Employment Preferences"}
        subTitle={"Add Employment Preferences"}
        description={
          "Customize your job search by setting your employment preferences"}
      />

       {/* Search Preferences Component start */}
       <div className="px-5 mt-6 bg-white rounded-2xl">
        <div className="flex justify-between items-center w-full min-h-[67px] border-b">
          <div>
            <h4 className="text-[19px] font-semibold text-[#7070FF]">
            Search Preferences
            </h4>
          </div>
          <div className="flex items-center">
            <button type="button" className="text-white">
              <EditIcon className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="pt-5 border-b">
          <div className="mb-4">
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">
              Job Type Preference:
              </span>
              Full-time
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">
              Job Search Status:
              </span>
              Actively looking for new opportunities
            </p>

            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">
              Start Date Availability:
              </span>
              Immediately
            </p>

            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">
              Work Style Preference:
              </span>
              Remote
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">
              Willingness to Travel/Relocate: 
              </span>
              Yes, I am willing to travel on
            </p>

            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">
              Preferred Work Location: 
              </span>
              Atlanta, GA
            </p>

            
          </div>
        </div>
      </div>
      {/* Experience Summary Component End */}

       {/* Workplace Preferences Component start */}
       <div className="px-5 mt-6 bg-white rounded-2xl">
        <div className="flex justify-between items-center w-full min-h-[67px] border-b">
          <div>
            <h4 className="text-[19px] font-semibold text-[#7070FF]">
            Workplace Preferences
            </h4>
          </div>
          <div className="flex items-center">
            <button type="button" className="text-white">
              <EditIcon className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="pt-5 border-b">
          <div className="mb-4">
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">
              Job Opportunity Priorities:
              </span>
              Company Culture
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">
              Preferred Organization Type:
              </span>
              Hospital chain
            </p>

            <div className="flex flex-wrap w-full gap-1.5 mb-2">
              <p className="flex items-center text-[16px] text-[#7F7F7F] font-medium mr-2">
                <span className="text-[#5E5E6F]">Skills Acquired: </span>
              </p>
              <button
                type="button"
                className=" flex items-center text-[14px] font-medium text-[#7F7F7F] py-[5px] px-[7px]"
              >
                
                Adult Day Care Center
              </button>
              <button
                type="button"
                className="flex items-center text-[16px] font-medium text-[#7070FF] py-[5px] px-[7px]"
              >
                <span>
                  <AddPlusIcon className="w-5 h-5" aria-hidden="true" />
                </span>
                View More
              </button>
            </div>

            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">
              Desired Salary Range:
              </span>
              $45,000-$60,000/Year
            </p>

            <div className="flex flex-wrap w-full gap-1.5 mb-2">
              <p className="flex items-center text-[16px] text-[#7F7F7F] font-medium mr-2">
                <span className="text-[#5E5E6F]">Skills Acquired: </span>
              </p>
              <button
                type="button"
                className=" flex items-center text-[14px] font-medium text-[#7F7F7F] py-[5px] px-[7px]"
              >
                
                Rotating Shifts
              </button>
              <button
                type="button"
                className=" flex items-center text-[14px] font-medium text-[#7F7F7F] py-[5px] px-[7px]"
              >
                
                Weekend Shifts
              </button>
              <button
                type="button"
                className="flex items-center text-[16px] font-medium text-[#7070FF] py-[5px] px-[7px]"
              >
                <span>
                  <AddPlusIcon className="w-5 h-5" aria-hidden="true" />
                </span>
                View More
              </button>
            </div>

            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">
              Management Style:
              </span>
              Autonomous
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">
              Team Environment:
              </span>
              Dynamic
            </p>

            
          </div>
        </div>
      </div>
      {/* Experience Summary Component End */}

      {/* Employment Preferences Component start */}
      <div className="px-5 mt-6 bg-white rounded-2xl">
        <div className="flex justify-between items-center w-full min-h-[67px] border-b">
          <div>
            <h4 className="text-[19px] font-semibold text-[#7070FF]">
            Employment Preferences
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
              Full-time
              </h4>
            </div>
            <div className="flex items-center mr-[12px]">
              <button type="button" className="text-white">
                <EditIconTransparent className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          </div>


          <div className="mb-4 border-b">
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">
              Start Date Availability:
              </span>
              March 2024
            </p>

            <div className="flex flex-wrap w-full gap-1.5 mb-2">
              <p className="flex items-center text-[16px] text-[#7F7F7F] font-medium mr-2">
                <span className="text-[#5E5E6F]">Preferred Work Location: </span>
              </p>
              <button
                type="button"
                className=" flex items-center text-[14px] font-medium text-[#7F7F7F] py-[5px] px-[7px]"
              >
                
                Charlotte, NC
              </button>
              <button
                type="button"
                className=" flex items-center text-[14px] font-medium text-[#7F7F7F] py-[5px] px-[7px]"
              >
                
                Charleston, SC
              </button>
              <button
                type="button"
                className=" flex items-center text-[14px] font-medium text-[#7F7F7F] py-[5px] px-[7px]"
              >
                
                Winston-Salem, NC
              </button>
              <button
                type="button"
                className="flex items-center text-[16px] font-medium text-[#7070FF] py-[5px] px-[7px]"
              >
                <span>
                  <AddPlusIcon className="w-5 h-5" aria-hidden="true" />
                </span>
                View More
              </button>
            </div>

            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">
              Desired Pay: 
              </span>
              $30/Hour
            </p>

            <div className="flex flex-wrap w-full gap-1.5 mb-2">
              <p className="flex items-center text-[16px] text-[#7F7F7F] font-medium mr-2">
                <span className="text-[#5E5E6F]">Shift Preferences: </span>
              </p>
              <button
                type="button"
                className=" flex items-center text-[14px] font-medium text-[#7F7F7F] py-[5px] px-[7px]"
              >
                
                Day Shifts
              </button>
              <button
                type="button"
                className=" flex items-center text-[14px] font-medium text-[#7F7F7F] py-[5px] px-[7px]"
              >
                
                Weekend Shifts
              </button>
              <button
                type="button"
                className="flex items-center text-[16px] font-medium text-[#7070FF] py-[5px] px-[7px]"
              >
                <span>
                  <AddPlusIcon className="w-5 h-5" aria-hidden="true" />
                </span>
                View More
              </button>
            </div>

            
          </div>

          <div className="mb-4 border-b">
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">
              Start Date Availability:
              </span>
              March 2024
            </p>

            <div className="flex flex-wrap w-full gap-1.5 mb-2">
              <p className="flex items-center text-[16px] text-[#7F7F7F] font-medium mr-2">
                <span className="text-[#5E5E6F]">Preferred Work Location: </span>
              </p>
              <button
                type="button"
                className=" flex items-center text-[14px] font-medium text-[#7F7F7F] py-[5px] px-[7px]"
              >
                
                Charlotte, NC
              </button>
              <button
                type="button"
                className=" flex items-center text-[14px] font-medium text-[#7F7F7F] py-[5px] px-[7px]"
              >
                
                Charleston, SC
              </button>
              <button
                type="button"
                className=" flex items-center text-[14px] font-medium text-[#7F7F7F] py-[5px] px-[7px]"
              >
                
                Winston-Salem, NC
              </button>
              <button
                type="button"
                className="flex items-center text-[16px] font-medium text-[#7070FF] py-[5px] px-[7px]"
              >
                <span>
                  <AddPlusIcon className="w-5 h-5" aria-hidden="true" />
                </span>
                View More
              </button>
            </div>

            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">
              Desired Pay: 
              </span>
              $30/Hour
            </p>

            <div className="flex flex-wrap w-full gap-1.5 mb-2">
              <p className="flex items-center text-[16px] text-[#7F7F7F] font-medium mr-2">
                <span className="text-[#5E5E6F]">Shift Preferences: </span>
              </p>
              <button
                type="button"
                className=" flex items-center text-[14px] font-medium text-[#7F7F7F] py-[5px] px-[7px]"
              >
                
                Day Shifts
              </button>
              <button
                type="button"
                className=" flex items-center text-[14px] font-medium text-[#7F7F7F] py-[5px] px-[7px]"
              >
                
                Weekend Shifts
              </button>
              <button
                type="button"
                className="flex items-center text-[16px] font-medium text-[#7070FF] py-[5px] px-[7px]"
              >
                <span>
                  <AddPlusIcon className="w-5 h-5" aria-hidden="true" />
                </span>
                View More
              </button>
            </div>

            
          </div>

          <div className="mb-4 border-b">
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">
              Start Date Availability:
              </span>
              March 2024
            </p>

            <div className="flex flex-wrap w-full gap-1.5 mb-2">
              <p className="flex items-center text-[16px] text-[#7F7F7F] font-medium mr-2">
                <span className="text-[#5E5E6F]">Preferred Work Location: </span>
              </p>
              <button
                type="button"
                className=" flex items-center text-[14px] font-medium text-[#7F7F7F] py-[5px] px-[7px]"
              >
                
                Charlotte, NC
              </button>
              <button
                type="button"
                className=" flex items-center text-[14px] font-medium text-[#7F7F7F] py-[5px] px-[7px]"
              >
                
                Charleston, SC
              </button>
              <button
                type="button"
                className=" flex items-center text-[14px] font-medium text-[#7F7F7F] py-[5px] px-[7px]"
              >
                
                Winston-Salem, NC
              </button>
              <button
                type="button"
                className="flex items-center text-[16px] font-medium text-[#7070FF] py-[5px] px-[7px]"
              >
                <span>
                  <AddPlusIcon className="w-5 h-5" aria-hidden="true" />
                </span>
                View More
              </button>
            </div>

            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">
              Desired Pay: 
              </span>
              $30/Hour
            </p>

            <div className="flex flex-wrap w-full gap-1.5 mb-2">
              <p className="flex items-center text-[16px] text-[#7F7F7F] font-medium mr-2">
                <span className="text-[#5E5E6F]">Shift Preferences: </span>
              </p>
              <button
                type="button"
                className=" flex items-center text-[14px] font-medium text-[#7F7F7F] py-[5px] px-[7px]"
              >
                
                Day Shifts
              </button>
              <button
                type="button"
                className=" flex items-center text-[14px] font-medium text-[#7F7F7F] py-[5px] px-[7px]"
              >
                
                Weekend Shifts
              </button>
              <button
                type="button"
                className="flex items-center text-[16px] font-medium text-[#7070FF] py-[5px] px-[7px]"
              >
                <span>
                  <AddPlusIcon className="w-5 h-5" aria-hidden="true" />
                </span>
                View More
              </button>
            </div>

            
          </div>




        </div>
      </div>
      {/* Experience Summary Component End */}

    </div>
  );
};

export default Skills;
