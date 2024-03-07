"use client";

import { AddIconSmall } from "@/svgs/icons";
import Card from "../Card/Card";
import {
  continuingEducationData,
  educationData,
  trainingData,
} from "@/utils/data";
import ProfileCard from "@/utils/ProfileCard";
import { Icon } from "@/svgs";

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
        <div className="flex justify-between w-full border-b pb-2 items-center">
          <h4 className="text-5xl text-primary">Education</h4>
          <Icon name="add" aria-hidden="true" filled />
        </div>

        {educationData.map((item) => (
          <ProfileCard key={item.country} data={item} />
        ))}
      </div>

      <Card
        title={"Continuing Education"}
        subTitle={"Add Continuing Education"}
        description={
          "Add continuing education credits earned to enhance your profile"
        }
      />

      <div className="p-5 mt-6 bg-white rounded-2xl">
        <div className="flex justify-between w-full border-b pb-2 items-center">
          <h4 className="text-5xl text-primary">Continuing Education</h4>
          <Icon name="add" aria-hidden="true" filled />
        </div>

        {continuingEducationData.map((item) => (
          <ProfileCard key={item.country} data={item} />
        ))}
      </div>

      <Card
        title={"Training"}
        subTitle={"Add Training"}
        description={
          "Add trainings attended to demonstrate your professional development"
        }
      />

      <div className="p-5 mt-6 bg-white rounded-2xl">
        <div className="flex justify-between w-full border-b pb-2 items-center">
          <h4 className="text-5xl text-primary">Training</h4>
            <Icon name="add" aria-hidden="true" filled />
        </div>

        {trainingData.map((item) => (
          <ProfileCard key={item.country} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Education;
