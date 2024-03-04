"use client";

import {
  EditIconTransparent,
  DocumentTagIcon,
  TimeTagIcon,
  WarningTagIcon,
} from "@/svgs/icons";
import { Icon } from "@/svgs";
import Card from "../Card/Card";
import { VerifiedIcon } from "@/svgs/VerifiedIcon";

const Credentials = () => {

  const licensesData = [
    {
      country: "Registered Nurse License (RN)",
      data: [
        { name: "Issuing Institution", value: "North Carolina Board of Nursing" },
        { name: "License State", value: "Compact License" },
        { name: "License Number", value: "XYZ23091234" },
        { name: "Expiry Date", value: "October 2024" },],
      tags: [
        {
          name: "Name of Document",
          type: "document"
        },
        {
          name: "Licence not verified",
          type: "unverified"
        },
        {
          name: "Expires in 30 days",
          type: "warning"
        }
      ]
    },
    {
      country: "Registered Nurse License (RN)",
      data: [
        { name: "Issuing Institution", value: "North Carolina Board of Nursing" },
        { name: "License State", value: "Compact License" },
        { name: "License Number", value: "XYZ23091234" },
        { name: "Expiry Date", value: "October 2024" },],
      tags: [
        {
          name: "Name of Document",
          type: "document"
        },
        {
          name: "licence Verified",
          type: "verified"
        },
        {
          name: "Expires in 30 days",
          type: "unverified"
        }
      ]
    },
  ];

  const basicCertificationsData = [
    {
      country: "Advanced Cardiovascular Life Support (ACLS)",
      data: [
        { name: "Expiry Date", value: "September 2025" },],
      tags: [
        {
          name: "Name of Document",
          type: "document"
        },
        {
          name: "Expires in 30 days",
          type: "warning"
        }
      ]
    },
    {
      country: "Basic Life Support (BLS)",
      data: [
        { name: "Expiry Date", value: "August 2024" },],
      tags: [
        {
          name: "Name of Document",
          type: "document"
        },
        {
          name: "Expires in 30 days",
          type: "warning"
        },
        {
          name: "Expired",
          type: "expired"
        },
      ]
    },
  ];

  const specialityCertificationsData = [
    {
      country: "Cardiac Medicine Certification",
      data: [
        { name: "Issuing Institution", value: "American Association of Critical Care Nurses (AACN)" },
        { name: "Expiry Date", value: "April 2027" },
      ],
      tags: [
        {
          name: "Name of Document",
          type: "document"
        },
      ]
    },
    {
      country: "Trauma Certified Registered Nurse (TCRN)",
      data: [
        { name: "Issuing Institution", value: "American Association of Critical Care Nurses (AACN)" },
        { name: "Expiry Date", value: "April 2027" },],
      tags: [
        {
          name: "Name of Document",
          type: "document"
        },
      ]
    },
  ];

  const otherCertificationsData = [
    {
      country: "Test Certification",
      data: [
        { name: "Issuing Institution", value: "American Association of Critical Care Nurses (AACN)" },
        { name: "Expiry Date", value: "April 2027" },
      ],
      tags: []
    },
  ];
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

      <div className="p-5 mt-6 bg-white rounded-2xl">
        <div className="flex justify-between w-full border-b pb-3">
          <div>
            <h4 className="text-5xl text-primary">
              Licenses
            </h4>
          </div>
          <div className="flex items-center">
            <button type="button" className="text-white">
              <Icon name="edit" className="h-8 w-8" aria-hidden="true" filled />
            </button>
          </div>
        </div>

        {licensesData.map((licence) => {
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

      <Card
        isEmpty={true}
        title={"Basic Certifications"}
        subTitle={"Add Basic Certifications"}
        description={
          "List basic certifications you have earned to demonstrate proficiency and attract employers"
        }

      />

      <div className="p-5 mt-6 bg-white rounded-2xl">
        <div className="flex justify-between w-full border-b pb-3">
          <div>
            <h4 className="text-5xl text-primary">
              Basic Certifications
            </h4>
          </div>
          <div className="flex items-center">
            <button type="button" className="text-white">
              <Icon name="edit" className="h-8 w-8" aria-hidden="true" filled />
            </button>
          </div>
        </div>

        {basicCertificationsData.map((licence) => {
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

      <Card
        isEmpty={true}
        title={"Speciality Certifications"}
        subTitle={"Add Speciality Certifications"}
        description={
          "Adding specialty certifications is important to validate your expertise and professional readiness"
        }

      />

      <div className="p-5 mt-6 bg-white rounded-2xl">
        <div className="flex justify-between w-full border-b pb-3">
          <div>
            <h4 className="text-5xl text-primary">
              Specialty Certifications
            </h4>
          </div>
          <div className="flex items-center">
            <button type="button" className="text-white">
              <Icon name="edit" className="h-8 w-8" aria-hidden="true" filled />
            </button>
          </div>
        </div>

        {specialityCertificationsData.map((licence) => {
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

      <Card
        isEmpty={true}
        title={"Other Certifications"}
        subTitle={"Add Other Certifications"}
        description={
          "Include other certifications you have earned to boost your professional standing"
        }

      />

      <div className="p-5 mt-6 bg-white rounded-2xl">
        <div className="flex justify-between w-full border-b pb-3">
          <div>
            <h4 className="text-5xl text-primary">
              Other Certifications
            </h4>
          </div>
          <div className="flex items-center">
            <button type="button" className="text-white">
              <Icon name="edit" className="h-8 w-8" aria-hidden="true" filled />
            </button>
          </div>
        </div>

        {otherCertificationsData.map((licence) => {
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
    </div>
  );
};

export default Credentials;
