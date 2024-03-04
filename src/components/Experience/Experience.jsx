"use client";

import {
  EditIconTransparent,
  AddIconSmall,
  PhoneDisconnectIcon,
  DocumentTagIcon,
  PhoneIcon,
  AddPlusIcon,
} from "@/svgs/icons";
import { Icon } from "@/svgs";
import Card from "../Card/Card";

const Experience = () => {
  return (
    <div>

      {/* Experience Summary Component start */}
      <div className="px-5 mt-6 bg-white rounded-2xl">
        <div className="flex justify-between items-center w-full min-h-[67px] border-b">
          <div>
            <h4 className="text-[19px] font-semibold text-[#7070FF]">
              Experience Summary
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
                Authorized to work in the US
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
              <span className="text-[#5E5E6F]">
                Sponsorship for Employment:{" "}
              </span>
              YES
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">
                Total Years of Work Experience:{" "}
              </span>
              5 years
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Specialties: </span>
              “Acute Care”,“Cancer Care”, “Ambulatory Care”.
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">
                End/Experience with Each Specialty:{" "}
              </span>
              1 Year, 2 Years, 2 Years
            </p>
          </div>
        </div>
      </div>
      {/* Experience Summary Component End */}

      <Card
        isEmpty={true}
        title={"Work Experience"}
        subTitle={"Add Work Experience"}
        description={
          "Find the right job by adding past and current work experience on your profile"
        }

      />

      {/* Work Experience Component start */}
      <div className="px-5 mt-6 bg-white rounded-2xl">
        <div className="flex justify-between items-center w-full min-h-[67px] border-b">
          <div>
            <h4 className="text-[19px] font-semibold text-[#7070FF]">
              Work Experience
            </h4>
          </div>
          <div className="flex items-center">
            <button type="button" className="text-white">
              <AddIconSmall className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="pt-5 border-b">
          <div className="flex justify-between items-center w-full min-h-[40px]">
            <div>
              <h4 className="text-[17px] font-semibold text-[#5E5E6F] mb-2">
                Clinical Nurse Specialist (CNS) – Oncology
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
              <span className="text-[#5E5E6F]">Company Name: </span>City Health
              Oncology Center
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Company Location: </span>Chicago,
              IL
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Employment Type: </span>
              Full-Time
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Job Setting: </span>Oncology
              Department
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Workplace Type: </span>Onsite
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Company Type: </span>Specialty
              Hospital
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Start Date: </span>January 2022
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">End Date: </span>Current
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Description of Duties: </span>
              Emergency Care Techniques, Trauma Patient Management, Emergency
              Pharmacology, Cardiac and Respiratory Emergency, ER Nursing
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
                Patient Assessment
              </button>
              <button
                type="button"
                className="rounded-3xl bg-[#E8E6FF] flex items-center text-[14px] font-medium text-[#7F7F7F] h-[30px] py-[5px] px-[7px]"
              >
                <span className="mr-2">
                  <DocumentTagIcon className="w-5 h-5" aria-hidden="true" />
                </span>
                Care Planning
              </button>
              <button
                type="button"
                className="rounded-3xl bg-[#E8E6FF] flex items-center text-[14px] font-medium text-[#7F7F7F] h-[30px] py-[5px] px-[7px]"
              >
                <span className="mr-2">
                  <DocumentTagIcon className="w-5 h-5" aria-hidden="true" />
                </span>
                Patient Education
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
              <span className="text-[#5E5E6F]">Position Discipline: </span>
              Registered Nurse (RN)
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Position Specialty: </span>
              Oncology
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Shift: </span>Flex Shift
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Compensation: </span>$20/hour
            </p>
          </div>
        </div>

        <div className="pt-5 border-b">
          <div className="flex justify-between items-center w-full min-h-[40px]">
            <div>
              <h4 className="text-[17px] font-semibold text-[#5E5E6F] mb-2">
                Charge Nurse – Pediatric Unit
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
              <span className="text-[#5E5E6F]">Company Name: </span>Riverside
              Children’s Hospital
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Company Location: </span>Boston,
              MA
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Employment Type: </span>
              Part-Time
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Job Setting: </span>Pediatric
              Unit (PICU)
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Workplace Type: </span>Onsite
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Company Type: </span>General
              Hospital
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Start Date: </span>January 2020
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">End Date: </span>December 2021
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Description of Duties: </span>
              As a Charge Nurse in a Pediatric Unit, my primary responsibility
              is to oversee the nursing staff and ensure the delivery of optimal
              patient care within the unit. This involves managing the
              day-to-day operations of the unit, including scheduling and
              staffing to maintain appropriate nurse-to-patient ratios. I also
              serve as a key point of contact for the nursing team, offering
              guidance, support, and mentorship to less experienced nurses.
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
                Crisis Management
              </button>
              <button
                type="button"
                className="rounded-3xl bg-[#E8E6FF] flex items-center text-[14px] font-medium text-[#7F7F7F] h-[30px] py-[5px] px-[7px]"
              >
                <span className="mr-2">
                  <DocumentTagIcon className="w-5 h-5" aria-hidden="true" />
                </span>
                Nursing Staff Training
              </button>
              <button
                type="button"
                className="rounded-3xl bg-[#E8E6FF] flex items-center text-[14px] font-medium text-[#7F7F7F] h-[30px] py-[5px] px-[7px]"
              >
                <span className="mr-2">
                  <DocumentTagIcon className="w-5 h-5" aria-hidden="true" />
                </span>
                Nursing Leadership
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
              <span className="text-[#5E5E6F]">Position Discipline: </span>
              Registered Nurse (RN)
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Position Specialty: </span>
              Pediatric Unit
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Shift: </span>Flex Shift
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Compensation: </span>
              $75,000-90,000/year
            </p>
          </div>
        </div>

        <div className="pt-5 border-b">
          <div className="flex justify-between items-center w-full min-h-[40px]">
            <div>
              <h4 className="text-[17px] font-semibold text-[#5E5E6F] mb-2">
                Infection Control Nurse
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
              <span className="text-[#5E5E6F]">Company Name: </span>Metropolitan
              General Hospital
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Company Location: </span>New
              York, NY
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Employment Type: </span>Contract{" "}
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Job Setting: </span>Various
              Departments
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Workplace Type: </span>Onsite
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Company Type: </span>General
              Hospital
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Start Date: </span>March 2018
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">End Date: </span>July 2020
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Description of Duties: </span>
              Monitor and investigate infection outbreaks in the facility.
              Develop and implement infection control policies and procedures.
              Train healthcare staff on infection prevention practices.
              Collaborate with other departments to reduce infection risks.
              Compile and analyze data on infection control for quality
              improvement.
            </p>
            <div className="flex flex-wrap w-full gap-1.5 mb-2">
              <p className="flex items-center text-[16px] text-[#7F7F7F] font-medium mr-2">
                <span className="text-[#5E5E6F]">Skills: </span>
              </p>
              <button
                type="button"
                className="rounded-3xl bg-[#E8E6FF] flex items-center text-[14px] font-medium text-[#7F7F7F] h-[30px] py-[5px] px-[7px]"
              >
                <span className="mr-2">
                  <DocumentTagIcon className="w-5 h-5" aria-hidden="true" />
                </span>
                Surveillance and Reporting
              </button>
              <button
                type="button"
                className="rounded-3xl bg-[#E8E6FF] flex items-center text-[14px] font-medium text-[#7F7F7F] h-[30px] py-[5px] px-[7px]"
              >
                <span className="mr-2">
                  <DocumentTagIcon className="w-5 h-5" aria-hidden="true" />
                </span>
                Data Analysis
              </button>
              <button
                type="button"
                className="rounded-3xl bg-[#E8E6FF] flex items-center text-[14px] font-medium text-[#7F7F7F] h-[30px] py-[5px] px-[7px]"
              >
                <span className="mr-2">
                  <DocumentTagIcon className="w-5 h-5" aria-hidden="true" />
                </span>
                Nursing Leadership
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
              <span className="text-[#5E5E6F]">Position Discipline: </span>
              Registered Nurse (RN)
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Position Specialty: </span>
              Various Departments
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Shift: </span>Day Shift
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Compensation: </span>
              $3,000/week
            </p>
          </div>
        </div>

        <div className="pt-5 border-b">
          <div className="flex justify-between items-center w-full min-h-[40px]">
            <div>
              <h4 className="text-[17px] font-semibold text-[#5E5E6F] mb-2">
                Quality Improvement Coordinator
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
              <span className="text-[#5E5E6F]">Company Name: </span>Sunset Home
              Health Agency
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Company Location: </span>Houston,
              TX
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Employment Type: </span>Per-Diem
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Job Setting: </span>Home
              Healthcare
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Workplace Type: </span>Hybrid
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Company Type: </span>Long Term
              Care Facility
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Start Date: </span>March 2018
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">End Date: </span>July 2020
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Description of Duties: </span>
              In my role as a Quality Improvement Coordinator, I assess and
              analyze current nursing practices, develop strategies for
              improving the quality of patient care, lead quality improvement
              projects, and educate staff on new protocols. Monitoring and
              reporting on the progress of quality improvement efforts is a
              crucial part of my duties.
            </p>
            <div className="flex flex-wrap w-full gap-1.5 mb-2">
              <p className="flex items-center text-[16px] text-[#7F7F7F] font-medium mr-2">
                <span className="text-[#5E5E6F]">Skills: </span>
              </p>
              <button
                type="button"
                className="rounded-3xl bg-[#E8E6FF] flex items-center text-[14px] font-medium text-[#7F7F7F] h-[30px] py-[5px] px-[7px]"
              >
                <span className="mr-2">
                  <DocumentTagIcon className="w-5 h-5" aria-hidden="true" />
                </span>
                Quality Assessment
              </button>
              <button
                type="button"
                className="rounded-3xl bg-[#E8E6FF] flex items-center text-[14px] font-medium text-[#7F7F7F] h-[30px] py-[5px] px-[7px]"
              >
                <span className="mr-2">
                  <DocumentTagIcon className="w-5 h-5" aria-hidden="true" />
                </span>
                Project Coordination
              </button>
              <button
                type="button"
                className="rounded-3xl bg-[#E8E6FF] flex items-center text-[14px] font-medium text-[#7F7F7F] h-[30px] py-[5px] px-[7px]"
              >
                <span className="mr-2">
                  <DocumentTagIcon className="w-5 h-5" aria-hidden="true" />
                </span>
                Problem-Solving
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
              <span className="text-[#5E5E6F]">Position Discipline: </span>
              Licensed Practical Nurse
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Position Specialty: </span>
              Administrative
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Shift: </span>Day Shift
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Compensation: </span>
              <span>$40/hour</span>
            </p>
          </div>
        </div>
      </div>
      {/* Work Experience Component End */}

       <Card
        isEmpty={true}
        title={"Professional Activities"}
        subTitle={"Add Professional Activities"}
        description={
          "Attract employers by adding professional activities on your profile"
        }

      />

      {/* Professional Activities Component start */}
      <div className="px-5 mt-6 bg-white rounded-2xl">
        <div className="flex justify-between items-center w-full min-h-[67px] border-b">
          <div>
            <h4 className="text-[19px] font-semibold text-[#7070FF]">
              Professional Activities
            </h4>
          </div>
          <div className="flex items-center">
            <button type="button" className="text-white">
              <AddIconSmall className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="pt-5 border-b">
          <div className="flex justify-between items-center w-full min-h-[40px]">
            <div>
              <h4 className="text-[17px] font-semibold text-[#5E5E6F] mb-2">
                Workshop Leader at Nursing Skills Fair
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
              <span className="text-[#5E5E6F]">Institution Name: </span>Metro
              Health Hospital
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Activity Type: </span>Workshop
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Role/Position: </span>
              Workshop Facilitator
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Start Date: </span>August 2020
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">End Date: </span>August 2020
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">End/Expected Date: </span>May
              2023
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Start Date: </span>January 2022
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">End Date: </span>Current
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Description: </span>
              Led a workshop titled &#39;Advanced Wound Care Techniques&#39; for
              a group of 40 nursing professionals. The session included hands-on
              training on the latest wound dressing techniques and infection
              prevention strategies. Also facilitated a Q&amp;A segment for
              in-depth discussion
            </p>
            <div className="flex flex-wrap w-full gap-1.5 mb-2">
              <p className="flex items-center text-[16px] text-[#7F7F7F] font-medium mr-2">
                <span className="text-[#5E5E6F]">Skills: </span>
              </p>
              <button
                type="button"
                className="rounded-3xl bg-[#E8E6FF] flex items-center text-[14px] font-medium text-[#7F7F7F] h-[30px] py-[5px] px-[7px]"
              >
                <span className="mr-2">
                  <DocumentTagIcon className="w-5 h-5" aria-hidden="true" />
                </span>
                Clinical Skills
              </button>
              <button
                type="button"
                className="rounded-3xl bg-[#E8E6FF] flex items-center text-[14px] font-medium text-[#7F7F7F] h-[30px] py-[5px] px-[7px]"
              >
                <span className="mr-2">
                  <DocumentTagIcon className="w-5 h-5" aria-hidden="true" />
                </span>
                Patient Education
              </button>
              <button
                type="button"
                className="rounded-3xl bg-[#E8E6FF] flex items-center text-[14px] font-medium text-[#7F7F7F] h-[30px] py-[5px] px-[7px]"
              >
                <span className="mr-2">
                  <DocumentTagIcon className="w-5 h-5" aria-hidden="true" />
                </span>
                Public Speaking
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
                Workshop Leader at Nursing Skills Fair
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
              <span className="text-[#5E5E6F]">Institution Name: </span>Metro
              Health Hospital
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Activity Type: </span>Workshop
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Role/Position: </span>
              Workshop Facilitator
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Start Date: </span>August 2020
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">End Date: </span>August 2020
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">End/Expected Date: </span>May
              2023
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Start Date: </span>January 2022
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">End Date: </span>Current
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Description: </span>
              Led a workshop titled &#39;Advanced Wound Care Techniques&#39; for
              a group of 40 nursing professionals. The session included hands-on
              training on the latest wound dressing techniques and infection
              prevention strategies. Also facilitated a Q&amp;A segment for
              in-depth discussion
            </p>
            <div className="flex flex-wrap w-full gap-1.5 mb-2">
              <p className="flex items-center text-[16px] text-[#7F7F7F] font-medium mr-2">
                <span className="text-[#5E5E6F]">Skills: </span>
              </p>
              <button
                type="button"
                className="rounded-3xl bg-[#E8E6FF] flex items-center text-[14px] font-medium text-[#7F7F7F] h-[30px] py-[5px] px-[7px]"
              >
                <span className="mr-2">
                  <DocumentTagIcon className="w-5 h-5" aria-hidden="true" />
                </span>
                Clinical Skills
              </button>
              <button
                type="button"
                className="rounded-3xl bg-[#E8E6FF] flex items-center text-[14px] font-medium text-[#7F7F7F] h-[30px] py-[5px] px-[7px]"
              >
                <span className="mr-2">
                  <DocumentTagIcon className="w-5 h-5" aria-hidden="true" />
                </span>
                Patient Education
              </button>
              <button
                type="button"
                className="rounded-3xl bg-[#E8E6FF] flex items-center text-[14px] font-medium text-[#7F7F7F] h-[30px] py-[5px] px-[7px]"
              >
                <span className="mr-2">
                  <DocumentTagIcon className="w-5 h-5" aria-hidden="true" />
                </span>
                Public Speaking
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
                Workshop Leader at Nursing Skills Fair
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
              <span className="text-[#5E5E6F]">Institution Name: </span>Metro
              Health Hospital
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Activity Type: </span>Workshop
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Role/Position: </span>
              Workshop Facilitator
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Start Date: </span>August 2020
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">End Date: </span>August 2020
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">End/Expected Date: </span>May
              2023
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Start Date: </span>January 2022
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">End Date: </span>Current
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Description: </span>
              Led a workshop titled &#39;Advanced Wound Care Techniques&#39; for
              a group of 40 nursing professionals. The session included hands-on
              training on the latest wound dressing techniques and infection
              prevention strategies. Also facilitated a Q&amp;A segment for
              in-depth discussion
            </p>
            <div className="flex flex-wrap w-full gap-1.5 mb-2">
              <p className="flex items-center text-[16px] text-[#7F7F7F] font-medium mr-2">
                <span className="text-[#5E5E6F]">Skills: </span>
              </p>
              <button
                type="button"
                className="rounded-3xl bg-[#E8E6FF] flex items-center text-[14px] font-medium text-[#7F7F7F] h-[30px] py-[5px] px-[7px]"
              >
                <span className="mr-2">
                  <DocumentTagIcon className="w-5 h-5" aria-hidden="true" />
                </span>
                Clinical Skills
              </button>
              <button
                type="button"
                className="rounded-3xl bg-[#E8E6FF] flex items-center text-[14px] font-medium text-[#7F7F7F] h-[30px] py-[5px] px-[7px]"
              >
                <span className="mr-2">
                  <DocumentTagIcon className="w-5 h-5" aria-hidden="true" />
                </span>
                Patient Education
              </button>
              <button
                type="button"
                className="rounded-3xl bg-[#E8E6FF] flex items-center text-[14px] font-medium text-[#7F7F7F] h-[30px] py-[5px] px-[7px]"
              >
                <span className="mr-2">
                  <DocumentTagIcon className="w-5 h-5" aria-hidden="true" />
                </span>
                Public Speaking
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
      {/* Professional Activities Component End */}

      <Card
        isEmpty={true}
        title={"References"}
        subTitle={"Add References"}
        description={
          "Boost your credibility with employers by adding references to your profile."
        }

      />

      {/* Add References Component start */}
      <div className="px-5 mt-6 bg-white rounded-2xl">
        <div className="flex justify-between items-center w-full min-h-[67px] border-b">
          <div>
            <h4 className="text-[19px] font-semibold text-[#7070FF]">
              References
            </h4>
          </div>
          <div className="flex items-center">
            <button type="button" className="text-white">
              <AddIconSmall className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="pt-5 border-b">
          <div className="flex justify-between items-center w-full min-h-[40px]">
            <div>
              <h4 className="text-[17px] font-semibold text-[#5E5E6F] mb-2">
                Kimberly Green
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
              <span className="text-[#5E5E6F]">Reference Type: </span>Manager
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">For: </span>Clinical Nurse
              Specialist (CNS) – Oncology
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Reference Title: </span>
              Director, Operating Room
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Years Known: </span>3 years
            </p>
            <p className="text-[16px] text-[#7070FF] font-medium mb-2">
              <span className="text-[#5E5E6F]">
                Reference Work Email Address:{" "}
              </span>
              Kimberly.green@cityhealth.com
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Reference Phone Number: </span>
              617-777-9090
            </p>

            <div className="flex flex-wrap w-full gap-1.5">
              <button
                type="button"
                className="rounded-3xl border border-[#1ECA63] flex items-center text-[14px] font-medium text-[#1ECA63] h-[30px] py-[5px] px-[10px]"
              >
                <span className="mr-2">
                  <PhoneIcon className="w-5 h-5" aria-hidden="true" />
                </span>
                Consent to Reach Out
              </button>
            </div>
          </div>
        </div>

        <div className="pt-5 border-b">
          <div className="flex justify-between items-center w-full min-h-[40px]">
            <div>
              <h4 className="text-[17px] font-semibold text-[#5E5E6F] mb-2">
                Kimberly Green
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
              <span className="text-[#5E5E6F]">Reference Type: </span>Manager
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">For: </span>Clinical Nurse
              Specialist (CNS) – Oncology
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Reference Title: </span>
              Director, Operating Room
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Years Known: </span>3 years
            </p>
            <p className="text-[16px] text-[#7070FF] font-medium mb-2">
              <span className="text-[#5E5E6F]">
                Reference Work Email Address:{" "}
              </span>
              Kimberly.green@cityhealth.com
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Reference Phone Number: </span>
              617-777-9090
            </p>

            <div className="flex flex-wrap w-full gap-1.5">
              <button
                type="button"
                className="rounded-3xl border border-[#FF6B2C] flex items-center text-[14px] font-medium text-[#FF6B2C] h-[30px] py-[5px] px-[10px]"
              >
                <span className="mr-2">
                  <PhoneDisconnectIcon className="w-5 h-5" aria-hidden="true" />
                </span>
                Consent to Reach Out
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Add References Component End */}

      <Card
        isEmpty={true}
        title={"Tech Proficiency"}
        subTitle={"Add Tech Proficiency"}
        description={
          "Enhance your profile by listing tools and apps you have used in past roles."
        }

      />

      {/* Add Tech Proficiency Component start */}
      <div className="px-5 mt-6 bg-white rounded-2xl">
        <div className="flex justify-between items-center w-full min-h-[67px] border-b">
          <div>
            <h4 className="text-[19px] font-semibold text-[#7070FF]">
              Tech Proficiency
            </h4>
          </div>
          <div className="flex items-center">
            <button type="button" className="text-white">
              <AddIconSmall className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="pt-5 border-b">
          <div className="flex justify-between items-center w-full min-h-[40px]">
            <div>
              <h4 className="text-[17px] font-semibold text-[#5E5E6F] mb-2">
                Electronic Health Records
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
              <span className="text-[#5E5E6F]">Application Name: </span>
              Allscripts
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Proficiency Level: </span>
              Intermediate
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Years of Experience: </span>5
              years
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
                className="rounded-3xl border border-[#1ECA63] flex items-center text-[14px] font-medium text-[#1ECA63] h-[30px] py-[5px] px-[10px]"
              >
                <span className="mr-2">
                  <PhoneIcon className="w-5 h-5" aria-hidden="true" />
                </span>
                Consent to Reach Out
              </button>
            </div>
          </div>
        </div>

        <div className="pt-5 border-b">
          <div className="flex justify-between items-center w-full min-h-[40px]">
            <div>
              <h4 className="text-[17px] font-semibold text-[#5E5E6F] mb-2">
                Kimberly Green
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
              <span className="text-[#5E5E6F]">Reference Type: </span>Manager
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">For: </span>Clinical Nurse
              Specialist (CNS) – Oncology
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Reference Title: </span>
              Director, Operating Room
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Years Known: </span>3 years
            </p>
            <p className="text-[16px] text-[#7070FF] font-medium mb-2">
              <span className="text-[#5E5E6F]">
                Reference Work Email Address:{" "}
              </span>
              Kimberly.green@cityhealth.com
            </p>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Reference Phone Number: </span>
              617-777-9090
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
                className="rounded-3xl border border-[#FF6B2C] flex items-center text-[14px] font-medium text-[#FF6B2C] h-[30px] py-[5px] px-[10px]"
              >
                <span className="mr-2">
                  <PhoneDisconnectIcon className="w-5 h-5" aria-hidden="true" />
                </span>
                Consent to Reach Out
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Add Tech Proficiency Component End */}
    </div>
  );
};

export default Experience;
