"use client";

import { EditIconTransparent, AddIconSmall } from "@/svgs/icons";
import { Icon } from "@/svgs";
import Card from "../Card/Card";
import { Button } from "../Button/Button";
import { renderValue } from "@/utils/helper";
import {
  continuingEducationData,
  educationIcons,
  iconTypes,
  referencesData,
} from "@/utils/data";

const Experience = () => {
  return (
    <div>
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

      <Card
        title={"Work Experience"}
        subTitle={"Add Work Experience"}
        description={
          "Find the right job by adding past and current work experience on your profile"
        }
      />

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
        title={"Professional Activities"}
        subTitle={"Add Professional Activities"}
        description={
          "Attract employers by adding professional activities on your profile"
        }
      />

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
        title={"References"}
        subTitle={"Add References"}
        description={
          "Boost your credibility with employers by adding references to your profile."
        }
      />

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

        {referencesData.map((licence) => {
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
                        icon={educationIcons[type]}
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
        title={"Tech Proficiency"}
        subTitle={"Add Tech Proficiency"}
        description={
          "Enhance your profile by listing tools and apps you have used in past roles."
        }
      />

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
    </div>
  );
};

export default Experience;
