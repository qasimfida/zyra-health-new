"use client";

import { EditIconTransparent, AddPlusIcon } from "@/svgs/icons";
import { Icon } from "@/svgs";
import Card from "../Card/Card";
import { searchPreferencesData, workplacePreferencesData } from "@/utils/data";
import ProfileCard from "@/utils/ProfileCard";

const Preferences = () => {
  return (
    <div>
      {/* <div className="p-5 mt-6 bg-white rounded-2xl">
        <div className="flex justify-between w-full h-10 border-b">
          <h4 className="text-5xl text-primary">Search Preferences</h4>
          <button type="button" className="text-white">
            <Icon name="edit" className="h-8 w-8" aria-hidden="true" filled />
          </button>
        </div>

        <div className="pt-5 border-b">
          <div className="mb-4">
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Job Type Preference:</span>
              Full-time
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Job Search Status:</span>
              Actively looking for new opportunities
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Start Date Availability: </span>
              Immediately
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Work Style Preference:</span>
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
      </div> */}

      <div className="p-5 mt-6 bg-white rounded-2xl">
        <div className="flex justify-between w-full h-10 border-b">
          <h4 className="text-5xl text-primary">Search Preferences</h4>
          <button type="button" className="text-white">
            <Icon name="edit" className="h-8 w-8" aria-hidden="true" filled />
          </button>
        </div>

        {searchPreferencesData.map((item) => (
          <ProfileCard key={item.country} data={item} />
        ))}
      </div>

      {/* <div className="p-5 mt-6 bg-white rounded-2xl">
        <div className="flex justify-between w-full h-10 border-b">
          <h4 className="text-5xl text-primary">Workplace Preferences</h4>
          <button type="button" className="text-white">
            <Icon name="edit" className="h-8 w-8" aria-hidden="true" filled />
          </button>
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
              <span className="text-[#5E5E6F]">Desired Salary Range:</span>
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
              <span className="text-[#5E5E6F]">Management Style:</span>
              Autonomous
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Team Environment:</span>
              Dynamic
            </p>
          </div>
        </div>
      </div> */}

      <div className="p-5 mt-6 bg-white rounded-2xl">
        <div className="flex justify-between w-full h-10 border-b">
          <h4 className="text-5xl text-primary">Workplace Preferences</h4>
          <button type="button" className="text-white">
            <Icon name="edit" className="h-8 w-8" aria-hidden="true" filled />
          </button>
        </div>

        {workplacePreferencesData.map((item) => (
          <ProfileCard key={item.country} data={item} />
        ))}
      </div>

      <Card
        title={"Add Employment Preferences"}
        subTitle={"Add Employment Preferences"}
        description={
          "Customize your job search by setting your employment preferences"
        }
      />

      {/* Continueing */}

      {/* <div className="p-5 mt-6 bg-white rounded-2xl">
        <div className="flex justify-between w-full h-10 border-b">
          <h4 className="text-5xl text-primary">Search Preferences</h4>
          <button type="button" className="text-white">
            <Icon name="edit" className="h-8 w-8" aria-hidden="true" filled />
          </button>
        </div>

        <div className="pt-5 border-b">
          <div className="mb-4">
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Job Type Preference:</span>
              Full-time
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Job Search Status:</span>
              Actively looking for new opportunities
            </p>

            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Start Date Availability:</span>
              Immediately
            </p>

            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Work Style Preference:</span>
              Remote
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">
                Willingness to Travel/Relocate:
              </span>
              Yes, I am willing to travel on
            </p>

            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Preferred Work Location:</span>
              Atlanta, GA
            </p>
          </div>
        </div>
      </div>

      <div className="p-5 mt-6 bg-white rounded-2xl">
        <div className="flex justify-between w-full h-10 border-b">
          <h4 className="text-5xl text-primary">Workplace Preferences</h4>
          <button type="button" className="text-white">
            <Icon name="edit" className="h-8 w-8" aria-hidden="true" filled />
          </button>
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
              <span className="text-[#5E5E6F]">Desired Salary Range:</span>
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
              <span className="text-[#5E5E6F]">Management Style:</span>
              Autonomous
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Team Environment:</span>
              Dynamic
            </p>
          </div>
        </div>
      </div>

      <div className="p-5 mt-6 bg-white rounded-2xl">
        <div className="flex justify-between w-full h-10 border-b">
          <h4 className="text-5xl text-primary">Employment Preferences</h4>
          <button type="button" className="text-white">
            <Icon name="edit" className="h-8 w-8" aria-hidden="true" filled />
          </button>
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
              <span className="text-[#5E5E6F]">Start Date Availability:</span>
              March 2024
            </p>

            <div className="flex flex-wrap w-full gap-1.5 mb-2">
              <p className="flex items-center text-[16px] text-[#7F7F7F] font-medium mr-2">
                <span className="text-[#5E5E6F]">
                  Preferred Work Location:{" "}
                </span>
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
              <span className="text-[#5E5E6F]">Desired Pay:</span>
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
              <span className="text-[#5E5E6F]">Start Date Availability:</span>
              March 2024
            </p>

            <div className="flex flex-wrap w-full gap-1.5 mb-2">
              <p className="flex items-center text-[16px] text-[#7F7F7F] font-medium mr-2">
                <span className="text-[#5E5E6F]">
                  Preferred Work Location:{" "}
                </span>
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
              <span className="text-[#5E5E6F]">Desired Pay:</span>
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
              <span className="text-[#5E5E6F]">Start Date Availability:</span>
              March 2024
            </p>

            <div className="flex flex-wrap w-full gap-1.5 mb-2">
              <p className="flex items-center text-[16px] text-[#7F7F7F] font-medium mr-2">
                <span className="text-[#5E5E6F]">
                  Preferred Work Location:{" "}
                </span>
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
              <span className="text-[#5E5E6F]">Desired Pay:</span>
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
      </div> */}
    </div>
  );
};

export default Preferences;
