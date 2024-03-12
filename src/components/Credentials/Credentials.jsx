"use client";

import { AddIconSmall } from "@/svgs/icons";
import Card from "../Card/Card";
import {
  basicCertificationsData,
  licensesData,
  otherCertificationsData,
  specialityCertificationsData,
} from "@/utils/data";
import ProfileCard from "@/utils/ProfileCard";
import { Icon } from "@/svgs";

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
        <div className="flex justify-between w-full border-b pb-2 items-center">
          <h4 className="text-5xl text-primary-default">Licences</h4>
          <Icon name="add" className="w-8 h-8" aria-hidden="true" filled />
        </div>

        {licensesData.map((item) => (
          <ProfileCard key={item.country} data={item} />
        ))}
      </div>

      <Card
        title={"Basic Certifications"}
        subTitle={"Add Basic Certifications"}
        description={
          "List basic certifications you have earned to demonstrate proficiency and attract employers"
        }
      />

      <div className="p-5 mt-6 bg-white rounded-2xl">
        <div className="flex justify-between w-full border-b pb-2 items-center">
          <h4 className="text-5xl text-primary-default">Basic Certifications</h4>
          <Icon name="add" className="w-8 h-8" aria-hidden="true" filled />
        </div>

        {basicCertificationsData.map((item) => (
          <ProfileCard key={item.country} data={item} />
        ))}
      </div>

      <Card
        title={"Speciality Certifications"}
        subTitle={"Add Speciality Certifications"}
        description={
          "Adding specialty certifications is important to validate your expertise and professional readiness"
        }
      />

      <div className="p-5 mt-6 bg-white rounded-2xl">
        <div className="flex justify-between w-full border-b pb-2 items-center">
          <h4 className="text-5xl text-primary-default">Speciality Certifications</h4>
          <Icon name="add" className="w-8 h-8" aria-hidden="true" filled />
        </div>

        {specialityCertificationsData.map((item) => (
          <ProfileCard key={item.country} data={item} />
        ))}
      </div>

      <Card
        title={"Other Certifications"}
        subTitle={"Add Other Certifications"}
        description={
          "Include other certifications you have earned to boost your professional standing"
        }
      />

      <div className="p-5 mt-6 bg-white rounded-2xl">
        <div className="flex justify-between w-full border-b pb-2 items-center">
          <h4 className="text-5xl text-primary-default">Other Certifications</h4>
          <Icon name="add" className="w-8 h-8" aria-hidden="true" filled />
        </div>

        {otherCertificationsData.map((item) => (
          <ProfileCard key={item.country} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Credentials;
