import { Button } from "@/components/Button/Button";
import { AddPlusIcon } from "@/svgs/icons";

export const renderValue = (value) => {
  if (Array.isArray(value)) {
    return (
      <>
        {value.map(({ name, type }) =>
          type === "text" ? (
            <p className="text-[16px] text-[#7F7F7F] font-medium">{name}</p>
          ) : (
            <Button color={type} variant="tagFilled" name={name} size="md" />
          )
        )}
        <button
          type="button"
          className="rounded-3xl flex items-center text-base font-medium text-primary-default py-1 px-2"
        >
          <span>
            <AddPlusIcon className="w-5 h-5" aria-hidden="true" />
          </span>
          View More
        </button>
      </>
    );
  } else {
    return value;
  }
};
