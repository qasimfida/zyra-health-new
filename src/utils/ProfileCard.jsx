import React from "react";
import { Button } from "@/components/Button/Button";
import { EditIconTransparent } from "@/svgs/icons";
import { renderValue } from "./helper";
import { iconTypes } from "./data";
import { Icon } from "@/svgs";

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
    <div className="py-4 border-b  flex flex-col gap-2.5">
      {data.country && (
        <div className="flex justify-between items-center w-full">
          <h4 className="text-4xl text-body">{data.country}</h4>
          <Icon name="edit" aria-hidden="true" />
        </div>
      )}
      <div>
        <h4 className="text-4xl text-body">{data.heading}</h4>
        {data?.data?.map(({ name, value }) => {
          const cls = `text-base ${
            name.toLocaleLowerCase().includes("email")
              ? "text-primary"
              : "text-secondary"
          } font-medium mb-2.5 ${
            Array.isArray(value) ? "flex items-center gap-2" : ""
          }`;

          return (
            <p className={cls}>
              <span className="text-body">{name}: </span>
              {renderValue(value)}
            </p>
          );
        })}
        <div className="flex flex-wrap w-full gap-2">
          {data.tags && renderTagsWithIcons(data.tags)}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
