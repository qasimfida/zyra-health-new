"use client";

import { EditIconTransparent, AddIconSmall } from "@/svgs/icons";
import { Icon } from "@/svgs";
import Card from "../Card/Card";
import { continuingEducationData, referencesData } from "@/utils/data";
import ProfileCard from "@/utils/ProfileCard";

const Experience = () => {
  return (
    <div>
      <div className="p-5 mt-6 bg-white rounded-2xl">
        <div className="flex justify-between w-full h-10 border-b">
          <h4 className="text-5xl text-primary">Experience Summary</h4>

          <button type="button" className="text-white">
            <Icon name="edit" className="h-8 w-8" aria-hidden="true" filled />
          </button>
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

      <div className="p-5 mt-6 bg-white rounded-2xl">
        <div className="flex justify-between w-full h-10 border-b">
          <h4 className="text-5xl text-primary">Work Experience</h4>
          <button type="button" className="text-white">
            <AddIconSmall className="w-5 h-5" aria-hidden="true" />
          </button>
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
        <div className="flex justify-between w-full h-10 border-b">
          <h4 className="text-5xl text-primary">Professional Activities</h4>
          <button type="button" className="text-white">
            <AddIconSmall className="w-5 h-5" aria-hidden="true" />
          </button>
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
        <div className="flex justify-between w-full h-10 border-b">
          <h4 className="text-5xl text-primary">References</h4>
          <button type="button" className="text-white">
            <AddIconSmall className="w-5 h-5" aria-hidden="true" />
          </button>
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
        <div className="flex justify-between w-full h-10 border-b">
          <h4 className="text-5xl text-primary">Tech Proficiancy</h4>
          <button type="button" className="text-white">
            <AddIconSmall className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {continuingEducationData.map((item) => (
          <ProfileCard key={item.country} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
