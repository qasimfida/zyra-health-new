"use client";

import Card from "../Card/Card";
import { Icon } from "@/svgs";
import { AddIconSmall } from "@/svgs/icons";
import ProfileCard from "@/utils/ProfileCard";
import {
  contactInformationData,
  emergencyContactData,
  identityInfoData,
  languagesData,
  profileData,
  socialProfileData,
} from "@/utils/data";

const Overview = () => {
  return (
    <div>
      <Card
        title="Personal Information"
        heading="William Brute Nash"
        options={profileData}
        icon={
          <Icon name="edit" className="h-8 w-8" aria-hidden="true" filled />
        }
      />

      <Card
        title="Contact Information"
        heading="Currently located in Charlotte, NC"
        options={contactInformationData}
      />

      <Card
        title={"Languages"}
        subTitle={"Add Languages"}
        description={
          "Attract more employers by adding the languages you speak on your profile"
        }
      />

      <div className="px-5 mt-6 bg-white rounded-2xl">
        <div className="flex justify-between items-center w-full min-h-[67px] border-b">
          <div>
            <h4 className="text-[19px] font-semibold text-[#7070FF]">
              Languages
            </h4>
          </div>
          <div className="flex items-center">
            <button type="button" className="text-white">
              <AddIconSmall className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        {languagesData.map((item) => (
          <ProfileCard key={item.country} data={item} />
        ))}
      </div>

      <Card
        title={"Emergency Contacts"}
        subTitle={"Add Emergency Contacts"}
        description={
          "Add an emergency contact to increase profile completeness"
        }
      />

      <Card
        title="Emergency Contacts"
        heading="Meghan Roberts"
        options={emergencyContactData}
        hasIcon={false}
      />

      <Card
        title={"Social Profile"}
        subTitle={"Add Social Profile"}
        description={
          "Add your social media or other online accounts to enhance your profile"
        }
      />

      <Card
        title="Social Profile"
        options={socialProfileData}
        hasIcon={false}
      />

      <Card
        title={"Identity Information"}
        subTitle={"Add Identity Information"}
        description={
          "Questions or feedback? We are all ears and ready to help!"
        }
      />

      <Card
        title="Identity Information"
        options={identityInfoData}
        hasIcon={false}
      />
    </div>
  );
};

export default Overview;
