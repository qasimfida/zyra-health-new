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
      <div className="flex justify-between w-full h-10 border-b">
        <h4 className="text-5xl text-primary">Licences</h4>
          <button type="button" className="text-white">
            <AddIconSmall className="w-5 h-5" aria-hidden="true" />
          </button>
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
      <div className="flex justify-between w-full h-10 border-b">
        <h4 className="text-5xl text-primary">Basic Certifications</h4>
          <button type="button" className="text-white">
            <AddIconSmall className="w-5 h-5" aria-hidden="true" />
          </button>
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
      <div className="flex justify-between w-full h-10 border-b">
        <h4 className="text-5xl text-primary">Speciality Certifications</h4>
          <button type="button" className="text-white">
            <AddIconSmall className="w-5 h-5" aria-hidden="true" />
          </button>
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
      <div className="flex justify-between w-full h-10 border-b">
        <h4 className="text-5xl text-primary">Other Certifications</h4>
          <button type="button" className="text-white">
            <AddIconSmall className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {otherCertificationsData.map((item) => (
          <ProfileCard key={item.country} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Credentials;
