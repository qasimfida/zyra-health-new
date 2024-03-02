"use client";

import React from "react";
import { Icon } from "@/svgs";

const Card = ({
  title = "",
  hasIcon = true,
  heading = "",
  icon = <Icon name="edit" className="h-8 w-8" aria-hidden="true" filled />,
  options = [],
}) => {
  return (
    <div className="p-5 mt-6 bg-white  rounded-2xl">
      <div className="flex justify-between  w-full h-10 border-b">
        <h4 className="text-[19px] font-semibold text-[#7070FF]">{title}</h4>
        {hasIcon && icon && <div>{icon}</div>}
      </div>
      <div className="pt-5">
        {heading && (
          <h4 className="text-[17px] font-semibold text-[#5E5E6F] mb-2">
            {heading}
          </h4>
        )}
        {options.map((option, index) => {
          return (
            <p
              className="text-base text-[#7F7F7F] font-medium mb-[10px]"
              key={`${title}-option-${index + 1}`}
            >
              <span className="text-[#5E5E6F]">{option.name}: </span>
              {option.value}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
