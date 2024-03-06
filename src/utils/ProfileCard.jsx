import React from "react";
import { Button } from "@/components/Button/Button";
import { EditIconTransparent } from "@/svgs/icons";
import { renderValue } from "./helper";
import { iconTypes } from "./data";

const ProfileCard = ({ data }) => {
  const renderTagsWithIcons = (tags) => {
    return tags.map(({ name, type }) => (
      <Button
        color={type}
        variant="tag"
        name={name}
        size="md"
        icon={iconTypes[type]}
      />
    ));
  };

  return (
    <div className="pt-5 border-b">
      <div className="flex justify-between items-center w-full h-10">
        <div>
          <h4 className="text-4xl text-body mb-2">{data.country}</h4>
        </div>
        <div className="flex items-center">
          <button type="button" className="text-white">
            <EditIconTransparent className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>
      </div>
      <div className="mb-4">
        <h4 className="text-4xl text-body mb-2">{data.heading}</h4>
        {data.data.map(({ name, value }) => {
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
          {data.tags && renderTagsWithIcons(data.tags)}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
