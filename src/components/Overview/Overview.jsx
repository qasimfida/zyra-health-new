"use client";

import { EditIconTransparent } from "@/svgs/icons";
import Card from "../Card/Card";
import { Icon } from "@/svgs";
import {
  contactInformationData,
  emergencyContactData,
  iconTypes,
  identityInfoData,
  languagesData,
  profileData,
  socialProfileData,
} from "@/utils/data";
import { renderValue } from "@/utils/helper";

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

      <div className="p-5 mt-6 bg-white  rounded-2xl">
        <div className="flex justify-between  w-full h-10 border-b">
          <div>
            <h4 className="text-5xl text-primary">Languages</h4>
          </div>
          <div className="flex align-start">
            <button type="button" className="text-white">
              <Icon
                name="edit"
                className="h-8 w-8 border border-primary   "
                aria-hidden="true"
                iconCls="stroke-primary"
              />
            </button>
          </div>
        </div>
        {languagesData.map((item) => {
          return (
            <div className="pt-5 border-b">
              <div className="flex justify-between items-center w-full h-10">
                <div>
                  <h4 className="text-4xl text-body mb-2">{item.language}</h4>
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
                <h4 className="text-4xl text-body mb-2">{item.heading}</h4>
                {item.data.map(({ name, value }) => {
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
                  {item.tags &&
                    item.tags.map(({ name, type }) => {
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
