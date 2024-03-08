"use client";

import React from "react";
import { Icon } from "@/svgs";
import { AddIcon } from "@/svgs/icons";

const Card = ({
  title = "",
  hasIcon = true,
  heading = "",
  icon = <Icon name="edit" className="w-8 h-8" aria-hidden="true" filled />,
  options = [],
  subTitle = "Add Subtitle",
  description = "",
}) => {
  if (description) {
    return (
      <div className="p-5 mt-6 bg-white rounded-2xl">
        <div className="flex justify-between w-full border-b pb-2.5 items-center">
          <h4 className="text-5xl text-primary">{title}</h4>
          <div></div>
        </div>
        <div className="flex justify-center py-3">
          <Icon name="add" className="w-10 h-10" aria-hidden="true" filled />
        </div>
        <div className="flex flex-col items-center justify-center gap-2 pb-2.5">
          <h4 className="text-4xl text-body">{subTitle}</h4>

          <p className="text-base text-body font-medium">{description}</p>
        </div>
      </div>
    );
  }
  return (
    <div className="p-5 mt-6 bg-white rounded-2xl flex flex-col gap-2.5">
      <div className="flex justify-between w-full border-b pb-2.5 items-center">
        <h4 className="text-5xl text-primary">{title}</h4>
        {hasIcon && icon && <>{icon}</>}
      </div>
      <div>
      {heading && <h4 className="text-4xl text-body pb-2">{heading}</h4>}
      {options.map((option, index) => {
        return (
          <p
            className="text-base text-secondary font-medium pb-2.5"
            key={`${title}-option-${index + 1}`}
          >
            <span className="text-body">{option.name}: </span>
            {option.value}
          </p>
        );
      })}
      </div>
    </div>
  );
};

export default Card;
