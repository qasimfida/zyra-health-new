"use client";

import React from "react";
import { Icon } from "@/svgs";
import { AddIcon } from "@/svgs/icons";

const Card = ({
  title = "",
  hasIcon = true,
  heading = "",
  icon = <Icon name="edit" className="h-8 w-8" aria-hidden="true" filled />,
  options = [],
  subTitle = "Add Subtitle",
  description = "",
}) => {
  if (description) {
    return (
      <div className="p-5 mt-6 bg-white rounded-2xl">
      <div className="flex justify-between w-full h-10 border-b">
        <h4 className="text-5xl text-primary">
              {title}
            </h4>
          <div></div>
        </div>
        <div className="flex justify-center pt-5">
          <button type="button" className="text-white">
            <AddIcon className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h4 className="text-4xl text-body mb-2 mt-4">
            {subTitle}
          </h4>

          <p className="text-base text-body font-medium mb-8">
            {description}
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className="p-5 mt-6 bg-white rounded-2xl">
      <div className="flex justify-between w-full h-10 border-b">
        <h4 className="text-5xl text-primary">{title}</h4>
        {hasIcon && icon && <div>{icon}</div>}
      </div>
      <div className="pt-5">
        {heading && <h4 className="text-4xl text-body mb-2">{heading}</h4>}
        {options.map((option, index) => {
          return (
            <p
              className="text-base text-secondary font-medium mb-2.5"
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
