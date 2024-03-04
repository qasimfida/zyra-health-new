"use client";

import {
  EditIconTransparent,
  DocumentTagIcon,
  CertifiedIcon,
  AddPlusIcon,
} from "@/svgs/icons";
import { Icon } from "@/svgs";
import Card from "../Card/Card";

const educationData = [
  {
    country: "Bachelor of Science in Nursing (BSN)",
    data: [
      { name: "Institution Name", value: "Washington University in St. Louis" },
      { name: "Field of Study", value: "Compact License" },
      { name: "Start Date", value: "October 2024" },
      { name: "End/Expected", value: "October 2024" },
      { name: "GPA", value: "October 2024" },
      { name: "Honors and Awards", value: "October 2024" },
    ],
    tags: [
      {
        name: "Name of Document",
        type: "document"
      },
    ]
  },
];

const Education = () => {
  
  return (
    <div>
      <Card
        isEmpty={true}
        title={"Education"}
        subTitle={"Add Education"}
        description={
          "Unlock job opportunities by adding education details to your profile"
        }

      />

      <div className="p-5 mt-6 bg-white rounded-2xl">
        <div className="flex justify-between w-full border-b pb-3">
          <div>
            <h4 className="text-5xl text-primary">
              Education
            </h4>
          </div>
          <div className="flex items-center">
            <button type="button" className="text-white">
              <Icon name="edit" className="h-8 w-8" aria-hidden="true" filled />
            </button>
          </div>
        </div>

        {educationData.map((licence) => {
          return (
            <div className="pt-5 border-b">
              <div className="flex justify-between items-center w-full h-10">
                <div>
                  <h4 className="text-4xl text-body mb-2">
                    {licence.country}
                  </h4>
                </div>
                <div className="flex items-center">
                  <button type="button" className="text-white">
                    <EditIconTransparent className="w-5 h-5" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div className="mb-4">
                <h4 className="text-4xl text-body mb-2">
                  {licence.heading}
                </h4>
                {licence.data.map(({ name, value }) => {
                  return (
                    <p className="text-base text-secondary font-medium mb-2">
                      <span className="text-body">{name}: </span>{value}
                    </p>
                  )
                })}
                <div className="flex flex-wrap w-full gap-1.5">
                  {licence.tags.map(({ name, type }) => {
                    const tagClass = type === "document" ? "border-documentBorder text-documentBorder" : type === "verified" ? "border-verified text-verified" : "border-unverifiedBorder text-unverifiedBorder";
                    return (
                      <button
                        type="button"
                        className={`rounded-3xl border  flex items-center text-sm font-medium  py-1 px-2 ${tagClass}`}
                      >
                        <span className="mr-2">
                          {type === "document" ? <DocumentTagIcon className="w-5 h-5" aria-hidden="true" /> : type === "unverified" ? <WarningTagIcon className="w-5 h-5" aria-hidden="true" /> : type === "verified" ? <VerifiedIcon className="w-5 h-5" aria-hidden="true" /> : <TimeTagIcon className="w-5 h-5" aria-hidden="true" />}
                        </span>
                        {name}
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>
          )
        })}
      </div>
{/* TODO Continuing */}
      <Card
        isEmpty={true}
        title={"Continuing Education"}
        subTitle={"Add Continuing Education"}
        description={
          "Add continuing education credits earned to enhance your profile"
        }

      />

      {/* Continuing Education Component start */}
      <div className="p-5 mt-6 bg-white rounded-2xl">
        <div className="flex justify-between w-full border-b pb-3">
          <div>
            <h4 className="text-5xl text-primary">
              Continuing Education
            </h4>
          </div>
          <div className="flex items-center">
            <button type="button" className="text-white">
              <Icon name="edit" className="h-8 w-8" aria-hidden="true" filled />
            </button>
          </div>
        </div>

        <div className="pt-5 border-b">
          <div className="flex justify-between items-center w-full h-10">
            <div>
              <h4 className="text-4xl text-body mb-2">
                Advanced Pediatric Care Techniques:
              </h4>
            </div>
            <div className="flex items-center">
              <button type="button" className="text-white">
                <EditIconTransparent className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          </div>
          <div className="mb-4">
            <p className="text-base text-secondary font-medium mb-2">
              <span className="text-body">Institution Name: </span>
              Riverside Health Sciences Institute - Center for Nursing
              Excellence
            </p>
            <p className="text-base text-secondary font-medium mb-2">
              <span className="text-body">Course Type: </span>Seminar
            </p>
            <p className="text-base text-secondary font-medium mb-2">
              <span className="text-body">Field of Study: </span>Geriatric
              Nursing
            </p>
            <p className="text-base text-secondary font-medium mb-2">
              <span className="text-body">Start Date: </span>
              September 2020
            </p>
            <p className="text-base text-secondary font-medium mb-2">
              <span className="text-body">End/Expected Date: </span>October
              2024
            </p>
            <div className="flex flex-wrap w-full gap-1.5 mb-2">
              <p className="flex items-center text-base text-secondary font-medium mr-2">
                <span className="text-body">Skills Acquired: </span>
              </p>
              <button
                type="button"
                className="rounded-3xl bg-genericTag flex items-center text-sm font-medium text-secondary py-1 px-2"
              >
                <span className="mr-2">
                  <DocumentTagIcon className="w-5 h-5" aria-hidden="true" />
                </span>
                Elderly Population
              </button>
              <button
                type="button"
                className="rounded-3xl bg-genericTag flex items-center text-sm font-medium text-secondary py-1 px-2"
              >
                <span className="mr-2">
                  <DocumentTagIcon className="w-5 h-5" aria-hidden="true" />
                </span>
                Geriatrics
              </button>
              <button
                type="button"
                className="rounded-3xl flex items-center text-base font-medium text-primary py-1 px-2"
              >
                <span>
                  <AddPlusIcon className="w-5 h-5" aria-hidden="true" />
                </span>
                View More
              </button>
            </div>

            <p className="text-base text-secondary font-medium mb-2">
              <span className="text-body">CEUs Earned: </span>10 CEUs
            </p>
          </div>
        </div>
        <div className="pt-5 border-b">
          <div className="flex justify-between items-center w-full h-10">
            <div>
              <h4 className="text-4xl text-body mb-2">
                Advanced Pediatric Care Techniques:
              </h4>
            </div>
            <div className="flex items-center">
              <button type="button" className="text-white">
                <EditIconTransparent className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          </div>
          <div className="mb-4">
            <p className="text-base text-secondary font-medium mb-2">
              <span className="text-body">Institution Name: </span>
              Riverside Health Sciences Institute - Center for Nursing
              Excellence
            </p>
            <p className="text-base text-secondary font-medium mb-2">
              <span className="text-body">Course Type: </span>Seminar
            </p>
            <p className="text-base text-secondary font-medium mb-2">
              <span className="text-body">Field of Study: </span>Geriatric
              Nursing
            </p>
            <p className="text-base text-secondary font-medium mb-2">
              <span className="text-body">Start Date: </span>
              September 2020
            </p>
            <p className="text-base text-secondary font-medium mb-2">
              <span className="text-body">End/Expected Date: </span>October
              2024
            </p>
            <div className="flex flex-wrap w-full gap-1.5 mb-2">
              <p className="flex items-center text-base text-secondary font-medium mr-2">
                <span className="text-body">Skills Acquired: </span>
              </p>
              <button
                type="button"
                className="rounded-3xl bg-genericTag flex items-center text-sm font-medium text-secondary py-1 px-2"
              >
                <span className="mr-2">
                  <DocumentTagIcon className="w-5 h-5" aria-hidden="true" />
                </span>
                Elderly Population
              </button>
              <button
                type="button"
                className="rounded-3xl bg-genericTag flex items-center text-sm font-medium text-secondary py-1 px-2"
              >
                <span className="mr-2">
                  <DocumentTagIcon className="w-5 h-5" aria-hidden="true" />
                </span>
                Geriatrics
              </button>
              <button
                type="button"
                className="rounded-3xl flex items-center text-base font-medium text-primary py-1 px-2"
              >
                <span>
                  <AddPlusIcon className="w-5 h-5" aria-hidden="true" />
                </span>
                View More
              </button>
            </div>

            <p className="text-base text-secondary font-medium mb-2">
              <span className="text-body">CEUs Earned: </span>10 CEUs
            </p>
          </div>
        </div>
        <div className="pt-5 border-b">
          <div className="flex justify-between items-center w-full h-10">
            <div>
              <h4 className="text-4xl text-body mb-2">
                Advanced Pediatric Care Techniques:
              </h4>
            </div>
            <div className="flex items-center">
              <button type="button" className="text-white">
                <EditIconTransparent className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          </div>
          <div className="mb-4">
            <p className="text-base text-secondary font-medium mb-2">
              <span className="text-body">Institution Name: </span>
              Riverside Health Sciences Institute - Center for Nursing
              Excellence
            </p>
            <p className="text-base text-secondary font-medium mb-2">
              <span className="text-body">Course Type: </span>Seminar
            </p>
            <p className="text-base text-secondary font-medium mb-2">
              <span className="text-body">Field of Study: </span>Geriatric
              Nursing
            </p>
            <p className="text-base text-secondary font-medium mb-2">
              <span className="text-body">Start Date: </span>
              September 2020
            </p>
            <p className="text-base text-secondary font-medium mb-2">
              <span className="text-body">End/Expected Date: </span>October
              2024
            </p>
            <div className="flex flex-wrap w-full gap-1.5 mb-2">
              <p className="flex items-center text-base text-secondary font-medium mr-2">
                <span className="text-body">Skills Acquired: </span>
              </p>
              <button
                type="button"
                className="rounded-3xl bg-genericTag flex items-center text-sm font-medium text-secondary py-1 px-2"
              >
                <span className="mr-2">
                  <DocumentTagIcon className="w-5 h-5" aria-hidden="true" />
                </span>
                Elderly Population
              </button>
              <button
                type="button"
                className="rounded-3xl bg-genericTag flex items-center text-sm font-medium text-secondary py-1 px-2"
              >
                <span className="mr-2">
                  <DocumentTagIcon className="w-5 h-5" aria-hidden="true" />
                </span>
                Geriatrics
              </button>
              <button
                type="button"
                className="rounded-3xl flex items-center text-base font-medium text-primary py-1 px-2"
              >
                <span>
                  <AddPlusIcon className="w-5 h-5" aria-hidden="true" />
                </span>
                View More
              </button>
            </div>

            <p className="text-base text-secondary font-medium mb-2">
              <span className="text-body">CEUs Earned: </span>10 CEUs
            </p>
            <div className="flex flex-wrap w-full gap-1.5">
              <button
                type="button"
                className="rounded-3xl border border-verified flex items-center text-sm font-medium text-verified py-1 px-2"
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

      <Card
        isEmpty={true}
        title={"Training"}
        subTitle={"Add Training"}
        description={
          "Add trainings attended to demonstrate your professional development"
        }

      />

      {/* Training Certifications Component start */}
      <div className="p-5 mt-6 bg-white rounded-2xl">
        <div className="flex justify-between w-full border-b pb-3">
          <h4 className="text-5xl text-primary">Training</h4>
        </div>

        <div className="pt-5 border-b">
          <div className="flex justify-between items-center w-full h-10">
            <div>
              <h4 className="text-4xl text-body mb-2">
                Training
              </h4>
            </div>
            <div className="flex items-center">
              <button type="button" className="text-white">
                <EditIconTransparent className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          </div>
          <div className="pt-5 border-b">
            <div className="flex justify-between items-center w-full h-10">
              <div>
                <h4 className="text-4xl text-body mb-2">
                  Advanced Pediatric Care Techniques:
                </h4>
                <h4 className="text-4xl text-body mb-2">
                  Enhancing Skills and Knowledge for Modern Nursing
                </h4>
              </div>
              <div className="flex items-center">
                <button type="button" className="text-white">
                  <EditIconTransparent className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>
            </div>
            <div className="mb-4">
              <p className="text-base text-secondary font-medium mb-2">
                <span className="text-body">Institution Name: </span>
                Riverside Health Sciences Institute - Center for Nursing
                Excellence
              </p>
              <p className="text-base text-secondary font-medium mb-2">
                <span className="text-body">Course Type: </span>Seminar
              </p>
              <p className="text-base text-secondary font-medium mb-2">
                <span className="text-body">Field of Study: </span>
                Geriatric Nursing
              </p>
              <p className="text-base text-secondary font-medium mb-2">
                <span className="text-body">Start Date: </span>
                September 2020
              </p>
              <p className="text-base text-secondary font-medium mb-2">
                <span className="text-body">End/Expected Date: </span>
                October 2024
              </p>
              <div className="flex flex-wrap w-full gap-1.5 mb-2">
                <p className="flex items-center text-base text-secondary font-medium mr-2">
                  <span className="text-body">Skills Acquired: </span>
                </p>
                <button
                  type="button"
                  className="rounded-3xl bg-genericTag flex items-center text-sm font-medium text-secondary py-1 px-2"
                >
                  <span className="mr-2">
                    <DocumentTagIcon className="w-5 h-5" aria-hidden="true" />
                  </span>
                  Elderly Population
                </button>
                <button
                  type="button"
                  className="rounded-3xl bg-genericTag flex items-center text-sm font-medium text-secondary py-1 px-2"
                >
                  <span className="mr-2">
                    <DocumentTagIcon className="w-5 h-5" aria-hidden="true" />
                  </span>
                  Geriatrics
                </button>
                <button
                  type="button"
                  className="rounded-3xl flex items-center text-base font-medium text-primary py-1 px-2"
                >
                  <span>
                    <AddPlusIcon className="w-5 h-5" aria-hidden="true" />
                  </span>
                  View More
                </button>
              </div>

              <p className="text-base text-secondary font-medium mb-2">
                <span className="text-body">CEUs Earned: </span>10 CEUs
              </p>
              <div className="flex flex-wrap w-full gap-1.5">
                <button
                  type="button"
                  className="rounded-3xl border border-verified flex items-center text-sm font-medium text-verified py-1 px-2"
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
            <div className="flex justify-between items-center w-full h-10">
              <div>
                <h4 className="text-4xl text-body mb-2">
                  Advanced Pediatric Care Techniques:
                </h4>
                <h4 className="text-4xl text-body mb-2">
                  Enhancing Skills and Knowledge for Modern Nursing
                </h4>
              </div>
              <div className="flex items-center">
                <button type="button" className="text-white">
                  <EditIconTransparent className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>
            </div>
            <div className="mb-4">
              <p className="text-base text-secondary font-medium mb-2">
                <span className="text-body">Institution Name: </span>
                Riverside Health Sciences Institute - Center for Nursing
                Excellence
              </p>
              <p className="text-base text-secondary font-medium mb-2">
                <span className="text-body">Course Type: </span>Seminar
              </p>
              <p className="text-base text-secondary font-medium mb-2">
                <span className="text-body">Field of Study: </span>
                Geriatric Nursing
              </p>
              <p className="text-base text-secondary font-medium mb-2">
                <span className="text-body">Start Date: </span>
                September 2020
              </p>
              <p className="text-base text-secondary font-medium mb-2">
                <span className="text-body">End/Expected Date: </span>
                October 2024
              </p>
              <div className="flex flex-wrap w-full gap-1.5 mb-2">
                <p className="flex items-center text-base text-secondary font-medium mr-2">
                  <span className="text-body">Skills Acquired: </span>
                </p>
                <button
                  type="button"
                  className="rounded-3xl bg-genericTag flex items-center text-sm font-medium text-secondary py-1 px-2"
                >
                  <span className="mr-2">
                    <DocumentTagIcon className="w-5 h-5" aria-hidden="true" />
                  </span>
                  Elderly Population
                </button>
                <button
                  type="button"
                  className="rounded-3xl bg-genericTag flex items-center text-sm font-medium text-secondary py-1 px-2"
                >
                  <span className="mr-2">
                    <DocumentTagIcon className="w-5 h-5" aria-hidden="true" />
                  </span>
                  Geriatrics
                </button>
                <button
                  type="button"
                  className="rounded-3xl flex items-center text-base font-medium text-primary py-1 px-2"
                >
                  <span>
                    <AddPlusIcon className="w-5 h-5" aria-hidden="true" />
                  </span>
                  View More
                </button>
              </div>

              <p className="text-base text-secondary font-medium mb-2">
                <span className="text-body">CEUs Earned: </span>10 CEUs
              </p>
              <div className="flex flex-wrap w-full gap-1.5">
                <button
                  type="button"
                  className="rounded-3xl border border-verified flex items-center text-sm font-medium text-verified py-1 px-2"
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
          <div className="flex justify-between items-center w-full h-10">
            <div>
              <h4 className="text-4xl text-body mb-2">
                Advanced Pediatric Care Techniques:
              </h4>
              <h4 className="text-4xl text-body mb-2">
                Enhancing Skills and Knowledge for Modern Nursing
              </h4>
            </div>
            <div className="flex items-center">
              <button type="button" className="text-white">
                <EditIconTransparent className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          </div>
          <div className="mb-4">
            <p className="text-base text-secondary font-medium mb-2">
              <span className="text-body">Institution Name: </span>
              Riverside Health Sciences Institute - Center for Nursing
              Excellence
            </p>
            <p className="text-base text-secondary font-medium mb-2">
              <span className="text-body">Course Type: </span>Seminar
            </p>
            <p className="text-base text-secondary font-medium mb-2">
              <span className="text-body">Field of Study: </span>Geriatric
              Nursing
            </p>
            <p className="text-base text-secondary font-medium mb-2">
              <span className="text-body">Start Date: </span>
              September 2020
            </p>
            <p className="text-base text-secondary font-medium mb-2">
              <span className="text-body">End/Expected Date: </span>October
              2024
            </p>
            <div className="flex flex-wrap w-full gap-1.5 mb-2">
              <p className="flex items-center text-base text-secondary font-medium mr-2">
                <span className="text-body">Skills Acquired: </span>
              </p>
              <button
                type="button"
                className="rounded-3xl bg-genericTag flex items-center text-sm font-medium text-secondary py-1 px-2"
              >
                <span className="mr-2">
                  <DocumentTagIcon className="w-5 h-5" aria-hidden="true" />
                </span>
                Elderly Population
              </button>
              <button
                type="button"
                className="rounded-3xl bg-genericTag flex items-center text-sm font-medium text-secondary py-1 px-2"
              >
                <span className="mr-2">
                  <DocumentTagIcon className="w-5 h-5" aria-hidden="true" />
                </span>
                Geriatrics
              </button>
              <button
                type="button"
                className="rounded-3xl flex items-center text-base font-medium text-primary py-1 px-2"
              >
                <span>
                  <AddPlusIcon className="w-5 h-5" aria-hidden="true" />
                </span>
                View More
              </button>
            </div>

            <p className="text-base text-secondary font-medium mb-2">
              <span className="text-body">CEUs Earned: </span>10 CEUs
            </p>
            <div className="flex flex-wrap w-full gap-1.5">
              <button
                type="button"
                className="rounded-3xl border border-verified flex items-center text-sm font-medium text-verified py-1 px-2"
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
