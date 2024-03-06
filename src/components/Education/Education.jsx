"use client";

import { EditIconTransparent } from "@/svgs/icons";
import { Icon } from "@/svgs";
import Card from "../Card/Card";
import { Button } from "../Button/Button";
import { renderValue } from "@/utils/helper";
import {
  continuingEducationData,
  educationData,
  iconTypes,
  trainingData,
} from "@/utils/data";

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
                  const cls = `text-base ${
                    name.toLocaleLowerCase().includes("email")
                      ? "text-primary"
                      : "text-secondary"
                  } font-medium mb-2 ${
                    Array.isArray(value) ? "flex items-center gap-2" : ""
                  }`;

                  return (
                    <p className={cls}>
                      <span className="text-body">{name}: </span>
                      {renderValue(value)}
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
                        icon={iconTypes[type]}
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
                  const cls = `text-base ${
                    name.toLocaleLowerCase().includes("email")
                      ? "text-primary"
                      : "text-secondary"
                  } font-medium mb-2 ${
                    Array.isArray(value) ? "flex items-center gap-2" : ""
                  }`;

                  return (
                    <p className={cls}>
                      <span className="text-body">{name}: </span>
                      {renderValue(value)}
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
                        icon={iconTypes[type]}
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
                  const cls = `text-base ${
                    name.toLocaleLowerCase().includes("email")
                      ? "text-primary"
                      : "text-secondary"
                  } font-medium mb-2 ${
                    Array.isArray(value) ? "flex items-center gap-2" : ""
                  }`;

                  return (
                    <p className={cls}>
                      <span className="text-body">{name}: </span>
                      {renderValue(value)}
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
                        icon={iconTypes[type]}
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
