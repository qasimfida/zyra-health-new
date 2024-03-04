"use client";

import {
  GlobeIcon,
  EditIconTransparent,
  TwitterIcon,
  LinkedInIcon,
} from "@/svgs/icons";
import AddCardComponent from "../AddCardComponent/AddCardComponent";
import Card from "../Card/Card";
import { Icon } from "@/svgs";
import { DocumentMagnify, DocumentsMinus, Education, Breifcase, Documents, Award, Settings } from "@/svgs/icons";

const Overview = () => {
  const profileData = [
    { name: "Discipline Type", value: "Nursing" },
    { name: "Clinician Type", value: "Registered Nurse (RN)" },
    { name: "Bio", value: "Committed and versatile healthcare professional with extensive experience across a variety of healthcare settings. Known for providing top-notch care and support, excelling in fast-paced environments, and adept at addressing diverse patient needs with empathy and proficiency. With a strong foundation in patient care principles, equipped to deliver exceptional service whether in direct patient care, administrative roles, or team collaboration. Driven by a passion for improving patient outcomes and enhancing the quality of healthcare delivery" }
  ];

  const contactInformationData = [
    { name: "Phone Number", value: "617-777-7788" },
    { name: "Email", value: "williamnash@gmail.com" },
  ];

  return (
    <div className="w-[calc(100%-3rem)] md:w-[calc(100%-19.5rem)] lg:w-[calc(100%-40rem)] flex flex-col justify-between sm:auto relative">
      <div className="bg-white rounded-2xl">
        <div className="sm:hidden">
          <select
            id="tabs"
            className=" border text-body text-sm block w-full p-2.5 rounded-xl"
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
          <ul className="text-sm font-medium text-center text-gray-500 sm:flex overflow-hidden hidden">
            <li className="flex items-center w-full py-6 focus-within:z-10">
              <a
                href="#"
                className="flex items-center justify-center w-full border-r text-primary rounded-s-2xl"
              >
                <button type="button" className="mr-1">
                  <DocumentMagnify
                    className="w-5 h-5"
                    aria-hidden="true"
                  />
                </button>

                <p lassname="text-slate-500 font-medium">Overview</p>
              </a>
            </li>
            <li className="flex items-center w-full py-6 focus-within:z-10">
              <a
                href="#"
                className="flex text-body items-center justify-center w-full border-r hover:text-primary"
              >
                <button type="button" className="mr-1">
                  <DocumentsMinus
                    className="w-5 h-5"
                    aria-hidden="true"
                  />

                </button>
                <p lassname="text-slate-500 font-medium">Credentials</p>
              </a>
            </li>
            <li className="flex items-center w-full py-6 focus-within:z-10">
              <a
                href="#"
                className="flex items-center justify-center w-full text-body border-r hover:text-primary"
              >
                <button type="button" className="mr-1">
                  <Education
                    className="w-5 h-5"
                    aria-hidden="true"
                  />
                </button>
                <p lassname="text-slate-500 font-medium">Education</p>
              </a>
            </li>
            <li className="flex items-center w-full py-6 focus-within:z-10">
              <a
                href="#"
                className="flex items-center justify-center w-full text-body border-r hover:text-primary"
              >
                <button type="button" className="mr-1">
                  <Breifcase
                    className="w-5 h-5"
                    aria-hidden="true"
                  />
                </button>
                <p lassname="text-slate-500 font-medium">Experience</p>
              </a>
            </li>
            <li className="flex items-center w-full py-6 focus-within:z-10">
              <a
                href="#"
                className="flex items-center justify-center  w-full text-body border-r hover:text-primary"
              >
                <button type="button" className="mr-1">
                  <Documents className="w-6 h-6" aria-hidden="true" />
                </button>
                <p lassname="text-slate-500 font-medium">Documents</p>
              </a>
            </li>
            <li className="flex items-center w-full py-6 focus-within:z-10">
              <a
                href="#"
                className="flex items-center justify-center  w-full text-body border-r hover:text-primary"
              >
                <button type="button" className="mr-1">
                  <Award className="w-6 h-6" aria-hidden="true" />
                </button>
                <p lassname="text-slate-500 font-medium">Skills</p>
              </a>
            </li>
            <li className="flex items-center w-full py-6 focus-within:z-10">
              <a
                href="#"
                className="flex items-center justify-center  w-full text-body hover:text-primary rounded-e-2xl"
              >
                <button type="button" className="mr-1">
                  <Settings className="w-6 h-6" aria-hidden="true" />
                </button>
                <p lassname="text-slate-500 font-medium">Preferences</p>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <Card
        title="Personal Information"
        heading="William Brute Nash"
        options={profileData}
        icon={<Icon name="edit" className="h-8 w-8" aria-hidden="true" filled />}
      />

      <Card
        title="Contact Information"
        heading="Currently located in Charlotte, NC"
        options={contactInformationData}
      />

      <AddCardComponent
        title={"Languages"}
        subTitle={"Add Languages"}
        description={
          "Attract more employers by adding the languages you speak on your profile"
        }
      />

      <div className="p-5 mt-6 bg-white  rounded-2xl">
        <div className="flex justify-between  w-full h-10 border-b">
          <div>
            <h4 className="text-5xl text-primary">
              Languages
            </h4>
          </div>
          <div className="flex align-start">
            <button type="button" className="text-white">
            <Icon name="edit" className="h-8 w-8" aria-hidden="true" filled />
            </button>
          </div>
        </div>
        <div className="pt-5 border-b">
          <div className="flex justify-between items-center w-full h-10">
            <div>
              <h4 className="text-4xl text-body mb-2">
                Balgarian
              </h4>
            </div>
            <div className="flex items-center mr-3">
              <button type="button" className="text-white">
                <EditIconTransparent className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          </div>
          <div className="mb-4">
            <p className="text-base text-secondary font-medium mb-2">
              <span className="text-body mr-2">Reading: </span>Beginner
            </p>
            <p className="text-base text-secondary font-medium mb-2">
              <span className="text-body mr-2">Writing: </span>Beginner
            </p>
            <p className="text-base text-secondary font-medium mb-2">
              <span className="text-body mr-2">Verbal: </span>Beginner
            </p>
          </div>
        </div>
        <div className="pt-5 border-b">
          <div className="flex justify-between items-center w-full h-10">
            <div>
              <h4 className="text-4xl text-body mb-2">
                Spanish
              </h4>
            </div>
            <div className="flex items-center mr-3">
              <button type="button" className="text-white">
                <EditIconTransparent className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          </div>
          <div className="mb-4">
            <p className="text-base text-secondary font-medium mb-2">
              <span className="text-body mr-2">Reading: </span>Beginner
            </p>
            <p className="text-base text-secondary font-medium mb-2">
              <span className="text-body mr-2">Writing: </span>Beginner
            </p>
            <p className="text-base text-secondary font-medium mb-2">
              <span className="text-body mr-2">Verbal: </span>Beginner
            </p>
          </div>
        </div>
        <div className="pt-5 border-b">
          <div className="flex justify-between items-center w-full h-10">
            <div>
              <h4 className="text-4xl text-body mb-2">
                Italian
              </h4>
            </div>
            <div className="flex items-center mr-3">
              <button type="button" className="text-white">
                <EditIconTransparent className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          </div>
          <div className="mb-4">
            <p className="text-base text-secondary font-medium mb-2">
              <span className="text-body mr-2">Reading: </span>Beginner
            </p>
            <p className="text-base text-secondary font-medium mb-2">
              <span className="text-body mr-2">Writing: </span>Beginner
            </p>
            <p className="text-base text-secondary font-medium mb-2">
              <span className="text-body mr-2">Verbal: </span>Beginner
            </p>
          </div>
        </div>
      </div>

      <AddCardComponent
        title={"Emergency Contacts"}
        subTitle={"Add Emergency Contacts"}
        description={
          "Add an emergency contact to increase profile completeness"
        }
      />

      <div className="p-5 mt-6 bg-white  rounded-2xl">
        <div className="flex justify-between  w-full h-10 border-b">
          <div>
            <h4 className="text-[19px] font-semibold text-primary">
              Emergency Contacts
            </h4>
          </div>
          <div className="flex items-end">
            <button type="button" className="text-white">
              <Icon name="edit" className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>
        <div className="pt-5 border-b">
          <div className="flex justify-between items-center w-full h-10">
            <div>
              <h4 className="text-4xl text-body mb-2">
                Meghan Roberts
              </h4>
            </div>
          </div>
          <div className="mb-4">
            <p className="text-base text-secondary font-medium mb-2">
              <span className="text-body  mr-2">Relationship: </span>Mother
            </p>
            <p className="text-base text-secondary font-medium mb-2">
              <span className="text-body  mr-2">Email:</span>
              meghan.roberts@yahoo.com
            </p>
            <p className="text-base text-secondary font-medium mb-2">
              <span className="text-body  mr-2">Phone Number: </span>
              617-777-9090
            </p>
          </div>
        </div>
      </div>

      <AddCardComponent
        title={"Social Profile"}
        subTitle={"Add Social Profile"}
        description={
          "Add your social media or other online accounts to enhance your profile"
        }
      />

      <div className="p-5 mt-6 bg-white  rounded-2xl">
        <div className="flex justify-between  w-full h-10 border-b">
          <div>
            <h4 className="text-[19px] font-semibold text-primary">
              Social Profile
            </h4>
          </div>
          <div className="flex items-end">
            <button type="button" className="text-white">
              <Icon name="edit" className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>
        <div className="pt-5 border-b">
          <div className="mb-4">
            <p className="text-base text-secondary font-medium mb-2 flex">
              <span className="text-body flex mr-2">
                <span className="mr-2">
                  <GlobeIcon className="w-5 h-5" aria-hidden="true" />
                </span>
                Website:{" "}
              </span>
              www.example.com/username
            </p>
            <p className="text-base text-secondary font-medium mb-2 flex">
              <span className="text-body flex mr-2">
                <span className="mr-2">
                  <LinkedInIcon className="w-5 h-5" aria-hidden="true" />
                </span>
                LinkedIn:{" "}
              </span>
              www.linkedin.com/in/username
            </p>
            <p className="text-base text-secondary font-medium mb-2 flex">
              <span className="text-body flex mr-2">
                <span className="mr-2">
                  <TwitterIcon className="w-5 h-5" aria-hidden="true" />
                </span>
                Twitter:{" "}
              </span>
              www.twitter.com/username
            </p>
          </div>
        </div>
      </div>

      <AddCardComponent
        title={"Identity Information"}
        subTitle={"Add Identity Information"}
        description={
          "Questions or feedback? We are all ears and ready to help!"
        }
      />

      <div className="p-5 mt-6 bg-white  rounded-2xl">
        <div className="flex justify-between  w-full h-10 border-b">
          <div>
            <h4 className="text-[19px] font-semibold text-primary">
              Identity Information
            </h4>
          </div>
          <div className="flex items-end">
            <button type="button" className="text-white">
              <Icon name="edit" className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>
        <div className="pt-5 border-b">
          <div className="mb-4">
            <p className="text-base text-secondary font-medium mb-2">
              <span className="text-body  mr-2">Pronouns: </span>He/Him
            </p>
            <p className="text-base text-secondary font-medium mb-2">
              <span className="text-body  mr-2">Gender:</span>Man
            </p>
            <p className="text-base text-secondary font-medium mb-2">
              <span className="text-body  mr-2">Ethnicity: </span>White
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
