import { Icon } from "@/svgs";
import { iconTypes } from "@/utils/data";
import { Button } from "../Button/Button";

export const Checkbox = ({ heading, data, percentage }) => {
  return (
    <div className="p-5 border flex justify-between px-base py-[14px] items-center rounded-3xl mt-6">
      <div>
        <h4 className="text-[17px] font-semibold text-[#5E5E6F] mb-2">
          {heading}
        </h4>
        <p className="text-base text-[#7F7F7F] font-medium mb-2">
          <span className="text-[#5E5E6F]">data.name: </span>
          {data.value}
        </p>
      </div>
      <Button
        color={percentage.type}
        variant="tag"
        name={percentage.name}
        size="md"
        icon={iconTypes[percentage.type]}
      />
      <Icon name="edit" aria-hidden="true" />
    </div>
  );
};
