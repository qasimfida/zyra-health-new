"use client";

import {
  BackIcon,
  EditIconTransparent,
  DocumentTagIcon,
  UploadIcon,
  DropdownIcon,
  DeleteIcon,
  BoxIcon,
  DocumentFrameIcon,
} from "@/svgs/icons";
import ProgressBar from "../CustomProgressbar/CustomProgressbar";
import CustomCheckbox from "../CustomCheckbox/CustomCheckbox";

const Skills = () => {
  return (
    <div>
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
    </div>
  );
};

export default Skills;
