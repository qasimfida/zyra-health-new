"use client";

import { AddIconSmall } from "@/svgs/icons";
import Card from "../Card/Card";
import {
  continuingEducationData,
  educationData,
  trainingData,
} from "@/utils/data";
import ProfileCard from "@/utils/ProfileCard";

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

      <div className="px-5 mt-6 bg-white rounded-2xl">
        <div className="flex justify-between items-center w-full min-h-[67px] border-b">
          <div>
            <h4 className="text-[19px] font-semibold text-[#7070FF]">
              education
            </h4>
          </div>
          <div className="flex items-center">
            <button type="button" className="text-white">
              <AddIconSmall className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
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

      <div className="px-5 mt-6 bg-white rounded-2xl">
        <div className="flex justify-between items-center w-full min-h-[67px] border-b">
          <div>
            <h4 className="text-[19px] font-semibold text-[#7070FF]">
              Continuing Education
            </h4>
          </div>
          <div className="flex items-center">
            <button type="button" className="text-white">
              <AddIconSmall className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
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

      <div className="px-5 mt-6 bg-white rounded-2xl">
        <div className="flex justify-between items-center w-full min-h-[67px] border-b">
          <div>
            <h4 className="text-[19px] font-semibold text-[#7070FF]">
              training
            </h4>
          </div>
          <div className="flex items-center">
            <button type="button" className="text-white">
              <AddIconSmall className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        {trainingData.map((item) => (
          <ProfileCard key={item.country} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Education;
