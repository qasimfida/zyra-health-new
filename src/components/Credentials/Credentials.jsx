"use client";

import { EditIconTransparent } from "@/svgs/icons";
import { Icon } from "@/svgs";
import Card from "../Card/Card";
import { Button } from "../Button/Button";
import { renderValue } from "@/utils/helper";
import {
  basicCertificationsData,
  iconTypes,
  licensesData,
  otherCertificationsData,
  specialityCertificationsData,
} from "@/utils/data";

const Credentials = () => {
  return (
    <div>
      <Card
        title={"Licenses"}
        subTitle={"Add Licenses"}
        description={
          "Adding your current licenses is critical to ensure eligibility for matching job offers"
        }
      />

      <div className="p-5 mt-6 bg-white rounded-2xl">
        <div className="flex justify-between w-full border-b pb-3">
          <div>
            <h4 className="text-5xl text-primary">Licenses</h4>
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
        title={"Basic Certifications"}
        subTitle={"Add Basic Certifications"}
        description={
          "List basic certifications you have earned to demonstrate proficiency and attract employers"
        }
      />

      <div className="p-5 mt-6 bg-white rounded-2xl">
        <div className="flex justify-between w-full border-b pb-3">
          <div>
            <h4 className="text-5xl text-primary">Basic Certifications</h4>
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
        title={"Speciality Certifications"}
        subTitle={"Add Speciality Certifications"}
        description={
          "Adding specialty certifications is important to validate your expertise and professional readiness"
        }
      />

      <div className="p-5 mt-6 bg-white rounded-2xl">
        <div className="flex justify-between w-full border-b pb-3">
          <div>
            <h4 className="text-5xl text-primary">Specialty Certifications</h4>
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
        title={"Other Certifications"}
        subTitle={"Add Other Certifications"}
        description={
          "Include other certifications you have earned to boost your professional standing"
        }
      />

      <div className="p-5 mt-6 bg-white rounded-2xl">
        <div className="flex justify-between w-full border-b pb-3">
          <div>
            <h4 className="text-5xl text-primary">Other Certifications</h4>
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

export default Credentials;
