"use client";

import {
  GlobeIcon,
  EditIconTransparent,
  TwitterIcon,
  LinkedInIcon,
} from "@/svgs/icons";
import Card from "../Card/Card";
import { Icon } from "@/svgs";

const Overview = () => {
  const profileData = [
    { name: "Discipline Type", value: "Nursing" },
    { name: "Clinician Type", value: "Registered Nurse (RN)" },
    {
      name: "Bio",
      value:
        "Committed and versatile healthcare professional with extensive experience across a variety of healthcare settings. Known for providing top-notch care and support, excelling in fast-paced environments, and adept at addressing diverse patient needs with empathy and proficiency. With a strong foundation in patient care principles, equipped to deliver exceptional service whether in direct patient care, administrative roles, or team collaboration. Driven by a passion for improving patient outcomes and enhancing the quality of healthcare delivery",
    },
  ];

  const contactInformationData = [
    { name: "Phone Number", value: "617-777-7788" },
    { name: "Email", value: "williamnash@gmail.com" },
  ];

  const emergencyContactData = [
    { name: "Relationship", value: "Mother" },
    { name: "Email", value: "meghan.roberts@yahoo.com" },
    { name: "Phone Number", value: "617-777-9090" },
  ];

  const socialProfileData = [
    { name: "Website", value: "www.example.com/username" },
    { name: "LinkedIn", value: "www.linkedin.com/in/username" },
    { name: "Twitter", value: "www.twitter.com/username" },
  ];

  const identityInfoData = [
    { name: "Pronouns", value: "He/Him" },
    { name: "Gender", value: "Man" },
    { name: "Ethnicity", value: "White" },
  ];

  const languagesData = [
    {
      language: "Balgarian",
      data: [
        { name: "Reading", value: "Beginner" },
        { name: "Writing", value: "Beginner" },
        { name: "Verbal", value: "Beginner" },
      ],
    },
    {
      language: "Spanish",
      data: [
        { name: "Reading", value: "Beginner" },
        { name: "Writing", value: "Beginner" },
        { name: "Verbal", value: "Beginner" },
      ],
    },
    {
      language: "Italian",
      data: [
        { name: "Reading", value: "Beginner" },
        { name: "Writing", value: "Beginner" },
        { name: "Verbal", value: "Beginner" },
      ],
    },
  ];

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
                {item.data.map(({ name, value }, index) => {
                  return (
                    <p
                      key={`${name}-value-${index + 1}`}
                      className="text-base text-secondary font-medium mb-2"
                    >
                      <span className="text-body">{name}: </span>
                      {value}
                    </p>
                  );
                })}
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
