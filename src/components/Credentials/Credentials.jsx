"use client";

import {
  EditIconTransparent,
  DocumentTagIcon,
  TimeTagIcon,
  WarningTagIcon,
} from "@/svgs/icons";
import { Icon } from "@/svgs";
import Card from "../Card/Card";

const Credentials = () => {
  return (
    <div>
      <Card
        isEmpty={true}
        title={"Licenses"}
        subTitle={"Add Licenses"}
        description={
          "Adding your current licenses is critical to ensure eligibility for matching job offers"
        }

      />

      {/* Licences Component start */}
      <div className="px-5 mt-6 bg-white rounded-2xl">
        <div className="flex justify-between items-center w-full min-h-[67px] border-b">
          <div>
            <h4 className="text-[19px] font-semibold text-[#7070FF]">
              Licenses
            </h4>
          </div>
          <div className="flex items-center">
            <button type="button" className="text-white">
              <Icon name="edit" className="h-8 w-8" aria-hidden="true" filled />
            </button>
          </div>
        </div>

        <div className="pt-5 border-b">
          <div className="flex justify-between items-center w-full min-h-[40px]">
            <div>
              <h4 className="text-[17px] font-semibold text-[#5E5E6F] mb-2">
                Balgarian
              </h4>
            </div>
            <div className="flex items-center mr-[12px]">
              <button type="button" className="text-white">
                <EditIconTransparent className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          </div>
          <div className="mb-4">
            <h4 className="text-[17px] font-semibold text-[#5E5E6F] mb-2">
              Registered Nurse License (RN)
            </h4>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Issuing Institution: </span>North
              Carolina Board of Nursing
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">License State: </span>Compact
              License
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">License Number: </span>
              XYZ23091234
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Expiry Date: </span>October 2024
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
              <button
                type="button"
                className="rounded-3xl border border-[#299DCF] flex items-center text-[14px] font-medium text-[#299DCF] h-[30px] py-[5px] px-[10px]"
              >
                <span className="mr-2">
                <DocumentTagIcon className="w-5 h-5" aria-hidden="true" />
                </span>
                Name of Document
              </button>

              <button
                type="button"
                className="rounded-3xl border border-[#299DCF] flex items-center text-[14px] font-medium text-[#299DCF] h-[30px] py-[5px] px-[10px]"
              >
                <span className="mr-2">
                <DocumentTagIcon className="w-5 h-5" aria-hidden="true" />
                </span>
                Name of Document
              </button>
              <button
                type="button"
                className="rounded-3xl border border-[#FF6B2C] flex items-center text-[14px] font-medium text-[#FF6B2C] h-[30px] py-[5px] px-[10px]"
              >
                <span className="mr-2">
                <WarningTagIcon className="w-5 h-5" aria-hidden="true" />
                </span>
                License Not Verified
              </button>
              <button
                type="button"
                className="rounded-3xl border border-[#FF6B2C] flex items-center text-[14px] font-medium text-[#FF6B2C] h-[30px] py-[5px] px-[10px]"
              >
                <span className="mr-2">
                <TimeTagIcon className="w-5 h-5" aria-hidden="true" />
                </span>
                Expires in 30 days
              </button>
            </div>
          </div>
        </div>

        <div className="pt-5 border-b">
          <div className="flex justify-between items-center w-full min-h-[40px]">
            <div>
              <h4 className="text-[17px] font-semibold text-[#5E5E6F] mb-2">
                Balgarian
              </h4>
            </div>
            <div className="flex items-center mr-[12px]">
              <button type="button" className="text-white">
                <EditIconTransparent className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          </div>
          <div className="mb-4">
            <h4 className="text-[17px] font-semibold text-[#5E5E6F] mb-2">
              Registered Nurse License (RN)
            </h4>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Issuing Institution: </span>North
              Carolina Board of Nursing
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">License State: </span>Compact
              License
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">License Number: </span>
              XYZ23091234
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Expiry Date: </span>October 2024
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
              <button
                type="button"
                className="rounded-3xl border border-[#299DCF] flex items-center text-[14px] font-medium text-[#299DCF] h-[30px] py-[5px] px-[10px]"
              >
                <span className="mr-2">
                <DocumentTagIcon className="w-5 h-5" aria-hidden="true" />
                </span>
                Name of Document
              </button>

              <button
                type="button"
                className="rounded-3xl border border-[#299DCF] flex items-center text-[14px] font-medium text-[#299DCF] h-[30px] py-[5px] px-[10px]"
              >
                <span className="mr-2">
                <DocumentTagIcon className="w-5 h-5" aria-hidden="true" />
                </span>
                Name of Document
              </button>
              <button
                type="button"
                className="rounded-3xl border border-[#FF6B2C] flex items-center text-[14px] font-medium text-[#FF6B2C] h-[30px] py-[5px] px-[10px]"
              >
                <span className="mr-2">
                <WarningTagIcon className="w-5 h-5" aria-hidden="true" />
                </span>
                License Not Verified
              </button>
              <button
                type="button"
                className="rounded-3xl border border-[#FF6B2C] flex items-center text-[14px] font-medium text-[#FF6B2C] h-[30px] py-[5px] px-[10px]"
              >
                <span className="mr-2">
                <TimeTagIcon className="w-5 h-5" aria-hidden="true" />
                </span>
                Expires in 30 days
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Licences Component End */}

       <Card
        isEmpty={true}
        title={"Basic Certifications"}
        subTitle={"Add Basic Certifications"}
        description={
          "List basic certifications you have earned to demonstrate proficiency and attract employers"
        }

      />

      {/* Basic Certifications Component start */}
      <div className="px-5 mt-6 bg-white rounded-2xl">
        <div className="flex justify-between items-center w-full min-h-[67px] border-b">
          <div>
            <h4 className="text-[19px] font-semibold text-[#7070FF]">
              Basic Certifications
            </h4>
          </div>
          <div className="flex items-center">
            <button type="button" className="text-white">
              <Icon name="edit" className="h-8 w-8" aria-hidden="true" filled />
            </button>
          </div>
        </div>

        <div className="pt-5 border-b">
          <div className="flex justify-between items-center w-full min-h-[40px]">
            <div>
              <h4 className="text-[17px] font-semibold text-[#5E5E6F] mb-2">
                Advanced Cardiovascular Life Support (ACLS)
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
              <span className="text-[#5E5E6F]">Expiry Date: </span>September
              2025
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
              <button
                type="button"
                className="rounded-3xl border border-[#299DCF] flex items-center text-[14px] font-medium text-[#299DCF] h-[30px] py-[5px] px-[10px]"
              >
                <span className="mr-2">
                  <DocumentTagIcon className="w-5 h-5" aria-hidden="true" />
                </span>
                Expires in 30 Days
              </button>
            </div>
          </div>
        </div>

        <div className="pt-5 border-b">
          <div className="flex justify-between items-center w-full min-h-[40px]">
            <div>
              <h4 className="text-[17px] font-semibold text-[#5E5E6F] mb-2">
                Advanced Cardiovascular Life Support (ACLS)
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
              <span className="text-[#5E5E6F]">Expiry Date: </span>September
              2025
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
              <button
                type="button"
                className="rounded-3xl border border-[#299DCF] flex items-center text-[14px] font-medium text-[#299DCF] h-[30px] py-[5px] px-[10px]"
              >
                <span className="mr-2">
                  <DocumentTagIcon className="w-5 h-5" aria-hidden="true" />
                </span>
                Expires in 30 Days
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Basic Certifications Component End */}

      <Card
        isEmpty={true}
        title={"Speciality Certifications"}
        subTitle={"Add Speciality Certifications"}
        description={
          "Adding specialty certifications is important to validate your expertise and professional readiness"
        }

      />

      {/* Speciality Certifications Component start */}
      <div className="px-5 mt-6 bg-white rounded-2xl">
        <div className="flex justify-between items-center w-full min-h-[67px] border-b">
          <div>
            <h4 className="text-[19px] font-semibold text-[#7070FF]">
              Specialty Certifications
            </h4>
          </div>
          <div className="flex items-center">
            <button type="button" className="text-white">
              <Icon name="edit" className="h-8 w-8" aria-hidden="true" filled />
            </button>
          </div>
        </div>

        <div className="pt-5 border-b">
          <div className="flex justify-between items-center w-full min-h-[40px]">
            <div>
              <h4 className="text-[17px] font-semibold text-[#5E5E6F] mb-2">
                Cardiac Medicine Certification
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
              <span className="text-[#5E5E6F]">Issuing Institution: </span>
              American Association of Critical Care Nurses (AACN)
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Expiry Date: </span>April 2027
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

        <div className="pt-5 border-b">
          <div className="flex justify-between items-center w-full min-h-[40px]">
            <div>
              <h4 className="text-[17px] font-semibold text-[#5E5E6F] mb-2">
                Trauma Certified Registered Nurse (TCRN)
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
              <span className="text-[#5E5E6F]">Issuing Institution: </span>
              American Board of Neuroscience Nursing (ABNN)
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Expiry Date: </span>May 2025
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
      {/* Speciality Certifications Component End */}

      <Card
        isEmpty={true}
        title={"Other Certifications"}
        subTitle={"Add Other Certifications"}
        description={
          "Include other certifications you have earned to boost your professional standing"
        }

      />

      {/* Other Certifications Component start */}
      <div className="px-5 mt-6 bg-white rounded-2xl">
        <div className="flex justify-between items-center w-full min-h-[67px] border-b">
          <div>
            <h4 className="text-[19px] font-semibold text-[#7070FF]">
              Other Certifications
            </h4>
          </div>
          <div className="flex items-center">
            <button type="button" className="text-white">
              <Icon name="edit" className="h-8 w-8" aria-hidden="true" filled />
            </button>
          </div>
        </div>

        <div className="pt-5 border-b">
          <div className="flex justify-between items-center w-full min-h-[40px]">
            <div>
              <h4 className="text-[17px] font-semibold text-[#5E5E6F] mb-2">
                Test Certification
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
              <span className="text-[#5E5E6F]">Issuing Institution: </span>Test
              Institution of Massachusetts
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Expiry Date: </span>September
              2025
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
      {/* other Certifications Component End */}
    </div>
  );
};

export default Credentials;
