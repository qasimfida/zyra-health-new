"use client";

import {
  UploadIcon,
  DropdownIcon,
  BoxIcon,
  DocumentFrameIcon,
} from "@/svgs/icons";
import ProgressBar from "../CustomProgressbar/CustomProgressbar";
import CustomCheckbox from "../CustomCheckbox/CustomCheckbox";
import {
  addChecklistData,
  ageData,
  checklistData,
  completedChecklistData,
  computerSkillsData,
  iconTypes,
} from "@/utils/data";
import { Icon } from "@/svgs";
import { Button } from "../Button/Button";
import { useState } from "react";
import { Checkbox } from "../Checkbox/Checkbox";

const Skills = () => {
  const [checkboxData, setCheckboxData] = useState(checklistData);
  const [computerData, setComputerData] = useState(computerSkillsData);
  const [ageSpecificData, setAgeSpecificData] = useState(ageData);

  const handleCheckboxChange = (groupId, checkboxId) => {
    setCheckboxData((prevData) =>
      prevData.map((group) => {
        if (group.id === groupId) {
          const updatedData = group.data.map((checkbox) => {
            if (checkbox.id === checkboxId) {
              return { ...checkbox, checked: !checkbox.checked };
            } else {
              return checkbox;
            }
          });

          return { ...group, data: updatedData };
        } else {
          return group;
        }
      })
    );
  };

  const handleAgeSpecificChange = (groupId, checkboxId) => {
    setAgeSpecificData((prevData) =>
      prevData.map((group) => {
        if (group.id === groupId) {
          const updatedData = group.data.map((checkbox) => {
            if (checkbox.id === checkboxId) {
              return { ...checkbox, checked: !checkbox.checked };
            } else {
              return checkbox;
            }
          });

          return { ...group, data: updatedData };
        } else {
          return group;
        }
      })
    );
  };

  const handleComputerCheckbox = (groupId, checkboxId) => {
    setComputerData((prevData) =>
      prevData.map((group) => {
        if (group.id === groupId) {
          const updatedData = group.data.map((checkbox) => {
            if (checkbox.id === checkboxId) {
              return { ...checkbox, checked: !checkbox.checked };
            } else {
              return checkbox;
            }
          });

          return { ...group, data: updatedData };
        } else {
          return group;
        }
      })
    );
  };

  return (
    <div>
      <div className="p-5 mt-6 bg-white rounded-2xl">
        <div className="flex justify-between w-full border-b pb-2 items-center">
          <h4 className="text-5xl text-primary">Add a Checklist</h4>
          <button></button>
        </div>
        <div className="flex justify-center pt-5">
          <button
            id=" dropdownOffsetButton"
            className="border border-buttonBorder rounded-full text-body w-full justify-between font-medium text-sm px-4 py-3 text-center inline-flex items-center"
            type="button"
          >
            <p>Dropdown button</p>

            <span className="w-3">
              <DropdownIcon aria-hidden="true" />
            </span>
          </button>
          <div className="mx-4 flex items-center">
            <p lassname="m-1.5 text-slate-500 font-medium">or</p>
          </div>
          <button
            type="button"
            className="rounded-3xl bg-primary flex items-center text-base font-medium text-white py-2.5 px-4 min-w-fit leading-6 gap-2"
          >
            <p>Upload External Checklist</p>

            <UploadIcon className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="p-5 mt-6 bg-white rounded-2xl">
        <div className="flex justify-between w-full border-b pb-2 items-center">
          <h4 className="text-5xl text-primary">Completed Chekcklists</h4>
          <Icon name="edit" aria-hidden="true" filled />
        </div>

        {completedChecklistData.map(({ heading, data, percentage }) => {
          return (
            <Checkbox heading={heading} data={data} percentage={percentage} />
          );
        })}
      </div>

      <div className="p-5 mt-6 bg-white rounded-2xl">
        <div className="flex justify-between w-full border-b pb-2 items-center">
          <h4 className="text-5xl text-primary">External Checkhlist</h4>
          <Icon name="edit" aria-hidden="true" filled />
        </div>

        {addChecklistData.map(({ heading, data, percentage }) => {
          return (
            <div className="p-5 border flex justify-between px-base py-[14px] items-center rounded-3xl mt-6">
              <div>
                <h4 className="text-[17px] font-semibold text-[#5E5E6F] mb-2">
                  {heading}
                </h4>
                <p className="text-base text-[#7F7F7F] font-medium mb-2">
                  <span className="text-[#5E5E6F]">data.name: </span>
                  {data.value}
                </p>
              </div>
              <Button
                color={percentage.type}
                variant="tag"
                name={percentage.name}
                size="md"
                icon={iconTypes[percentage.type]}
              />
              <Icon name="delete" aria-hidden="true" />
            </div>
          );
        })}
      </div>

      <div className="p-5 mt-6 bg-white rounded-2xl">
        <div className="flex justify-between w-full border-b pb-2 items-center">
          <h4 className="text-5xl text-primary">Add a Checklist</h4>
          <button></button>
        </div>
        <div className="flex justify-center pt-5">
          <button
            id=" dropdownOffsetButton"
            className="border border-buttonBorder rounded-full text-body w-full justify-between font-medium text-sm px-4 py-3 text-center inline-flex items-center"
            type="button"
          >
            <p>Dropdown button</p>

            <span className="w-3">
              <DropdownIcon aria-hidden="true" />
            </span>
          </button>
          <div className="mx-4 flex items-center">
            <p lassname="m-1.5 text-slate-500 font-medium">or</p>
          </div>
          <button
            type="button"
            className="rounded-3xl bg-primary flex items-center text-base font-medium text-white py-2.5 px-4 min-w-fit leading-6 gap-2"
          >
            <p>Upload External Checklist</p>

            <UploadIcon className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="px-5 py-6 mt-6 bg-white rounded-2xl">
        <div className="flex justify-center text-center flex-col items-center">
          <BoxIcon className="w-5 h-5" aria-hidden="true" />
          <h4 className="text-5xl text-body">Add a Checklist</h4>
          <p className="font-normal text-base leading-6 text-body">
            Upload External Checklist
          </p>
        </div>
      </div>

      <div className="px-5 py-6 mt-6 bg-white rounded-2xl">
        <div className="flex justify-center text-center flex-col items-center">
          <DocumentFrameIcon className="w-5 h-5" aria-hidden="true" />
          <h4 className="text-5xl text-body">Add a Checklist</h4>
          <p className="font-normal text-base leading-6 text-body">
            Upload External Checklist
          </p>
        </div>
      </div>

      <div className="p-5 mt-6 bg-white rounded-2xl">
        <div className="flex w-full border-b pb-2 items-center gap-3">
          <Icon name="back" aria-hidden="true" />
          <h4 className="text-5xl font-semibold text-primary">
            Please fill out your Administrative RN Skills
          </h4>
        </div>
        <div className="flex mt-4 gap-8">
          <div className="flex flex-col gap-3">
            <button type="button" className="flex items-center gap-2">
              <span className="w-4 h-4 bg-red rounded-full"></span>
              <span className=" text-base font-medium text-body">
                No theory or experience
              </span>
            </button>
            <button type="button" className="flex items-center gap-2">
              <span className="w-4 h-4 bg-orange rounded-full"></span>
              <span className=" text-base font-medium text-body">
                Limited experience. Need training
              </span>
            </button>
          </div>
          <div className="flex flex-col gap-3">
            <button
              type="button"
              className="flex text-base font-medium text-body items-center gap-2"
            >
              <span className="w-4 h-4 bg-yellow rounded-full"></span>
              <span className="">
                Experienced. Able to perform under supervision
              </span>
            </button>
            <button
              type="button"
              className="flex text-base font-medium text-body items-center gap-2"
            >
              <span className="w-4 h-4 bg-green rounded-full"></span>
              <span className="">
                Proficient. Able to perform independently
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="p-5 border flex justify-start px-base py-3.5 rounded-3xl mt-6 bg-background w-full">
        <ProgressBar filled={30} />
      </div>

      <div className="p-5 mt-6 bg-white rounded-2xl">
        <div className="flex justify-between w-full pb-2 items-center border-b">
          <h4 className="text-5xl text-primary">Administrative Duties</h4>
          <Icon name="add" aria-hidden="true" filled />
        </div>

        {checkboxData?.map((group) => (
          <div
            key={group?.heading}
            className=" border-b py-4 flex justify-between items-center"
          >
            <div>
              <h4 className="text-base font-semibold text-body">
                {group?.heading}
              </h4>
            </div>
            <div className="flex gap-2">
              {group?.data?.map(({ id, name, checked }) => (
                <CustomCheckbox
                  key={id}
                  variant={name}
                  checked={checked}
                  onChange={() => handleCheckboxChange(group.id, id)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="p-5 mt-6 bg-white rounded-2xl">
        <div className="flex justify-between w-full pb-2 items-center border-b">
          <h4 className="text-5xl text-primary">Computer Skills</h4>
          <Icon name="add" aria-hidden="true" filled />
        </div>

        {computerData?.map((group) => (
          <div
            key={group?.heading}
            className=" border-b py-4 flex justify-between items-center"
          >
            <div>
              <h4 className="text-base font-semibold text-body mb-2">
                {group?.heading}
              </h4>
            </div>
            <div className="flex gap-2">
              {group?.data?.map(({ id, name, checked }) => (
                <CustomCheckbox
                  key={id}
                  variant={name}
                  checked={checked}
                  onChange={() => handleComputerCheckbox(group.id, id)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="p-5 mt-6 bg-white rounded-2xl">
        <div className="flex justify-between w-full pb-2 items-center border-b">
          <h4 className="text-5xl text-primary">Age-Specific Competencies</h4>
          <Icon name="add" aria-hidden="true" filled />
        </div>

        {ageSpecificData?.map((group) => (
          <div
            key={group?.heading}
            className=" border-b py-4 flex justify-between items-center"
          >
            <div>
              <h4 className="text-base font-semibold text-body">
                {group?.heading}
              </h4>
            </div>
            <div className="flex gap-2">
              {group?.data?.map(({ id, name, checked }) => (
                <CustomCheckbox
                  key={id}
                  variant={name}
                  checked={checked}
                  onChange={() => handleAgeSpecificChange(group.id, id)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
