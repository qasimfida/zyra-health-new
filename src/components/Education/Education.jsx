"use client";

import {
  EditIconTransparent,
  DocumentTagIcon,
  CertifiedIcon,
  AddPlusIcon,
  TimeTagIcon,
  WarningTagIcon,
} from "@/svgs/icons";
import { Icon } from "@/svgs";
import Card from "../Card/Card";
import { VerifiedIcon } from "@/svgs/VerifiedIcon";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Button } from "../Button/Button";

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
        type: "info",
      },
    ],
  },
];

const continuingEducationData = [
  {
    country: "Certified Emergency Nurse (CEN) Preparation Course",
    data: [
      {
        name: "Institution Name",
        value: "Emergency Nurses Association",
      },
      { name: "Field of Study", value: "Compact License" },
      { name: "Course Type", value: "October 2024" },
      { name: "End/Expected", value: "October 2024" },
      { name: "GPA", value: "October 2024" },
      { name: "Honors and Awards", value: "October 2024" },
      {
        name: "Skills Acquired",
        value: [
          {
            name: "Elderly Population",
            type: "tag",
          },
        ],
      },
      { name: "CEUs Earned:", value: "Not Applicable" },
    ],
    tags: [
      {
        name: "Name of Document",
        type: "info",
      },
    ],
  },
  {
    country: "Certified Emergency Nurse (CEN) Preparation Course",
    data: [
      {
        name: "Institution Name",
        value: "Emergency Nurses Association",
      },
      { name: "Field of Study", value: "Compact License" },
      { name: "Course Type", value: "October 2024" },
      { name: "End/Expected", value: "October 2024" },
      { name: "GPA", value: "October 2024" },
      { name: "Honors and Awards", value: "October 2024" },
      {
        name: "Skills Acquired",
        value: [
          {
            name: "Elderly Population",
            type: "tag",
          },
          {
            name: "Elderly Population",
            type: "tag",
          },
        ],
      },
      { name: "CEUs Earned:", value: "Not Applicable" },
    ],
    tags: [
      {
        name: "Name of Document",
        type: "info",
      },
      {
        name: "Verified",
        type: "success",
      },
      {
        name: "Expires in 30 days",
        type: "warning",
      },
      {
        name: "Expired",
        type: "danger",
      },
    ],
  },
];

const trainingData = [
  {
    country: "Certified Emergency Nurse (CEN) Preparation Course",
    data: [
      {
        name: "Institution Name",
        value: "Emergency Nurses Association",
      },
      { name: "Field of Study", value: "Compact License" },
      { name: "Course Type", value: "October 2024" },
      { name: "End/Expected", value: "October 2024" },
      { name: "GPA", value: "October 2024" },
      { name: "Honors and Awards", value: "October 2024" },
      {
        name: "Skills Acquired",
        value: [
          {
            name: "Elderly Population",
            type: "tag",
          },
          {
            name: "Elderly Population",
            type: "tag",
          },
          {
            name: "Elderly Population",
            type: "tag",
          },
          {
            name: "Elderly Population",
            type: "tag",
          },
        ],
      },
      { name: "CEUs Earned:", value: "Not Applicable" },
    ],
    tags: [
      {
        name: "Name of Document",
        type: "info",
      },
      {
        name: "Verified",
        type: "success",
      },
      {
        name: "Expires in 30 days",
        type: "warning",
      },
      {
        name: "Expired",
        type: "danger",
      },
    ],
  },
];

const renderTags = (tagsData) => {
  return tagsData.map(({ name, type }) => {
    return <Button color={type} variant="tagFilled" name={name} size="md" />;
  });
};

const Education = () => {
  return (
    <div>
      <Card
        title={"Education"}
        subTitle={"Add Education"}
        description={
          "Unlock job opportunities by adding education details to your profile"
        }
      />

      <div className="p-5 mt-6 bg-white rounded-2xl">
        <div className="flex justify-between w-full border-b pb-3">
          <div>
            <h4 className="text-5xl text-primary">Education</h4>
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
                  <h4 className="text-4xl text-body mb-2">{licence.country}</h4>
                </div>
                <div className="flex items-center">
                  <button type="button" className="text-white">
                    <EditIconTransparent
                      className="w-5 h-5"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </div>
              <div className="mb-4">
                <h4 className="text-4xl text-body mb-2">{licence.heading}</h4>
                {licence.data.map(({ name, value }) => {
                  return (
                    <p className="text-base text-secondary font-medium mb-2">
                      <span className="text-body">{name}: </span>
                      {value}
                    </p>
                  );
                })}
                <div className="flex flex-wrap w-full gap-1.5">
                  {licence.tags.map(({ name, type }) => {
                    return (
                      <Button
                        color={type}
                        variant="tag"
                        name={name}
                        size="md"
                        icon={
                          type === "info" ? (
                            <DocumentTagIcon
                              className="w-5 h-5"
                              aria-hidden="true"
                            />
                          ) : type === "success" ? (
                            <VerifiedIcon
                              className="w-5 h-5"
                              aria-hidden="true"
                            />
                          ) : type === "warning" ? (
                            <WarningTagIcon
                              className="w-5 h-5"
                              aria-hidden="true"
                            />
                          ) : type === "danger" ? (
                            <TimeTagIcon
                              className="w-5 h-5"
                              aria-hidden="true"
                            />
                          ) : (
                            <ArrowRightIcon
                              className="w-5 h-5"
                              aria-hidden="true"
                            />
                          )
                        }
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Card
        title={"Continuing Education"}
        subTitle={"Add Continuing Education"}
        description={
          "Add continuing education credits earned to enhance your profile"
        }
      />

      <div className="p-5 mt-6 bg-white rounded-2xl">
        <div className="flex justify-between w-full border-b pb-3">
          <div>
            <h4 className="text-5xl text-primary">Continuing Education</h4>
          </div>
          <div className="flex items-center">
            <button type="button" className="text-white">
              <Icon name="edit" className="h-8 w-8" aria-hidden="true" filled />
            </button>
          </div>
        </div>

        {continuingEducationData.map((licence) => {
          return (
            <div className="pt-5 border-b">
              <div className="flex justify-between items-center w-full h-10">
                <div>
                  <h4 className="text-4xl text-body mb-2">{licence.country}</h4>
                </div>
                <div className="flex items-center">
                  <button type="button" className="text-white">
                    <EditIconTransparent
                      className="w-5 h-5"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </div>
              <div className="mb-4">
                <h4 className="text-4xl text-body mb-2">{licence.heading}</h4>
                {licence.data.map(({ name, value }) => {
                  const cls = Array.isArray(value)
                  ? "text-base text-secondary font-medium mb-2 flex items-center gap-2"
                  : "text-base text-secondary font-medium mb-2";
                  return (
                    <p
                      className={cls}
                    >
                      <span className="text-body">{name}: </span>
                      {Array.isArray(value) ? (
                        <>
                          {value.map(({ name, type }) => (
                            <Button
                              color={type}
                              variant="tagFilled"
                              name={name}
                              size="md"
                            />
                          ))}
                          <button
                            type="button"
                            className="rounded-3xl flex items-center text-base font-medium text-primary py-1 px-2"
                          >
                            <span>
                              <AddPlusIcon
                                className="w-5 h-5"
                                aria-hidden="true"
                              />
                            </span>
                            View More
                          </button>
                        </>
                      ) : (
                        value
                      )}
                    </p>
                  );
                })}
                <div className="flex flex-wrap w-full gap-1.5">
                  {licence.tags.map(({ name, type }) => {
                    return (
                      <Button
                        color={type}
                        variant="tag"
                        name={name}
                        size="md"
                        icon={
                          type === "info" ? (
                            <DocumentTagIcon
                              className="w-5 h-5"
                              aria-hidden="true"
                            />
                          ) : type === "success" ? (
                            <VerifiedIcon
                              className="w-5 h-5"
                              aria-hidden="true"
                            />
                          ) : type === "warning" ? (
                            <WarningTagIcon
                              className="w-5 h-5"
                              aria-hidden="true"
                            />
                          ) : type === "danger" ? (
                            <TimeTagIcon
                              className="w-5 h-5"
                              aria-hidden="true"
                            />
                          ) : (
                            <ArrowRightIcon
                              className="w-5 h-5"
                              aria-hidden="true"
                            />
                          )
                        }
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <Card
        title={"Training"}
        subTitle={"Add Training"}
        description={
          "Add trainings attended to demonstrate your professional development"
        }
      />

      <div className="p-5 mt-6 bg-white rounded-2xl">
        <div className="flex justify-between w-full border-b pb-3">
          <div>
            <h4 className="text-5xl text-primary">Training</h4>
          </div>
          <div className="flex items-center">
            <button type="button" className="text-white">
              <Icon name="edit" className="h-8 w-8" aria-hidden="true" filled />
            </button>
          </div>
        </div>

        {trainingData.map((licence) => {
          return (
            <div className="pt-5 border-b">
              <div className="flex justify-between items-center w-full h-10">
                <div>
                  <h4 className="text-4xl text-body mb-2">{licence.country}</h4>
                </div>
                <div className="flex items-center">
                  <button type="button" className="text-white">
                    <EditIconTransparent
                      className="w-5 h-5"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </div>
              <div className="mb-4">
                <h4 className="text-4xl text-body mb-2">{licence.heading}</h4>
                {licence.data.map(({ name, value }) => {
                  return (
                    <p
                      className={
                        Array.isArray(value)
                          ? "text-base text-secondary font-medium mb-2 flex items-center gap-2"
                          : "text-base text-secondary font-medium mb-2"
                      }
                    >
                      <span className="text-body">{name}: </span>
                      {Array.isArray(value) ? (
                        <>
                          {value.map(({ name, type }) => {
                            return (
                              <Button
                                color={type}
                                variant="tagFilled"
                                name={name}
                                size="md"
                              />
                            );
                          })}
                          <button
                            type="button"
                            className="rounded-3xl flex items-center text-base font-medium text-primary py-1 px-2"
                          >
                            <span>
                              <AddPlusIcon
                                className="w-5 h-5"
                                aria-hidden="true"
                              />
                            </span>
                            View More
                          </button>
                        </>
                      ) : (
                        value
                      )}
                    </p>
                  );
                })}
                <div className="flex flex-wrap w-full gap-1.5">
                  {licence.tags.map(({ name, type }) => {
                    return (
                      <Button
                        color={type}
                        variant="tag"
                        name={name}
                        size="md"
                        icon={
                          type === "info" ? (
                            <DocumentTagIcon
                              className="w-5 h-5"
                              aria-hidden="true"
                            />
                          ) : type === "success" ? (
                            <VerifiedIcon
                              className="w-5 h-5"
                              aria-hidden="true"
                            />
                          ) : type === "warning" ? (
                            <WarningTagIcon
                              className="w-5 h-5"
                              aria-hidden="true"
                            />
                          ) : type === "danger" ? (
                            <TimeTagIcon
                              className="w-5 h-5"
                              aria-hidden="true"
                            />
                          ) : (
                            <ArrowRightIcon
                              className="w-5 h-5"
                              aria-hidden="true"
                            />
                          )
                        }
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Education;
