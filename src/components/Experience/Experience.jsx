"use client";

import { Icon } from "@/svgs";
import Card from "../Card/Card";
import { continuingEducationData, referencesData } from "@/utils/data";
import ProfileCard from "@/utils/ProfileCard";

const Experience = () => {
  return (
    <div>
      <div className="p-5 mt-6 bg-white rounded-2xl">
        <div className="flex justify-between w-full border-b pb-2 items-center">
          <h4 className="text-5xl text-primary-default">Experience Summary</h4>
          <Icon name="add" className="w-8 h-8" aria-hidden="true" filled />
        </div>

        <div className="pt-5 border-b">
          <div className="flex justify-between items-center w-full">
              <h4 className="text-4xl text-body mb-2">
                Authorized to work in the US
              </h4>
            <Icon name="edit" className="w-8 h-8" aria-hidden="true" />
          </div>
          <div className="mb-4">
            <p className="text-base text-secondary font-medium mb-2">
              <span className="text-body">
                Sponsorship for Employment:{" "}
              </span>
              YES
            </p>
            <p className="text-base text-secondary font-medium mb-2">
              <span className="text-body">
                Total Years of Work Experience:{" "}
              </span>
              5 years
            </p>
            <p className="text-base text-secondary font-medium mb-2">
              <span className="text-body">Specialties: </span>
              “Acute Care”,“Cancer Care”, “Ambulatory Care”.
            </p>
            <p className="text-base text-secondary font-medium mb-2">
              <span className="text-body">
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

      <div className="p-5 mt-6 bg-white rounded-2xl">
        <div className="flex justify-between w-full pb-2 items-center border-b">
          <h4 className="text-5xl text-primary-default">Work Experience</h4>
          <Icon name="add" className="w-8 h-8" aria-hidden="true" filled />
        </div>

        {continuingEducationData.map((item) => (
          <ProfileCard key={item.country} data={item} />
        ))}
      </div>

      <Card
        title={"Professional Activities"}
        subTitle={"Add Professional Activities"}
        description={
          "Attract employers by adding professional activities on your profile"
        }
      />

      <div className="p-5 mt-6 bg-white rounded-2xl">
        <div className="flex justify-between w-full pb-2 items-center border-b">
          <h4 className="text-5xl text-primary-default">Professional Activities</h4>
          <Icon name="add" className="w-8 h-8" aria-hidden="true" filled />
        </div>

        {continuingEducationData.map((item) => (
          <ProfileCard key={item.country} data={item} />
        ))}
      </div>

      <Card
        title={"References"}
        subTitle={"Add References"}
        description={
          "Boost your credibility with employers by adding references to your profile."
        }
      />

      <div className="p-5 mt-6 bg-white rounded-2xl">
        <div className="flex justify-between w-full pb-2 items-center border-b">
          <h4 className="text-5xl text-primary-default">References</h4>
          <Icon name="add" className="w-8 h-8" aria-hidden="true" filled />
        </div>

        {referencesData.map((item) => (
          <ProfileCard key={item.country} data={item} />
        ))}
      </div>

      <Card
        title={"Tech Proficiency"}
        subTitle={"Add Tech Proficiency"}
        description={
          "Enhance your profile by listing tools and apps you have used in past roles."
        }
      />

      <div className="p-5 mt-6 bg-white rounded-2xl">
        <div className="flex justify-between w-full pb-2 items-center border-b">
          <h4 className="text-5xl text-primary-default">Tech Proficiancy</h4>
          <Icon name="add" className="w-8 h-8" aria-hidden="true" filled />
        </div>

        {continuingEducationData.map((item) => (
          <ProfileCard key={item.country} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
