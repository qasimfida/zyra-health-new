import { ArrowRightIcon } from "@heroicons/react/24/outline";

export const tags = {
  INFO: "info",
  TAG: "tag",
  SUCCESS: "success",
  PRIMARY: "primary",
  WARNING: "warning",
  DANGER: "danger",
};
const COLORS = {
  success: "border-success text-success",
  info: "border-info text-info",
  tag: "text-body",
  primary: "border-primaryLight text-primary",
  warning: "border-warning text-warning",
  danger: "border-danger text-danger",
};
const VARIANTS = {
  outlined: "border-2 hover:bg-primary hover:text-white hover:border-0",
  tag: "border",
  tagOutlined: "bg-light",
  tagFilled: "bg-tagFilled",
  filled: "text-primary bg-light",
  contained: "bg-primary",
  text: "border-0",
};
const SIZES = {
  xs: "h-5 p-2",
  sm: "h-8 px-9 font-normal text-xs",
  md: "h-8 text-sm font-normal px-2",
  xl: "h-10 px-6 text-base font-semibold",
  lg: "w-full h-10 text-base font-semibold justify-center",
};

export const Button = ({
  color = "primary",
  variant = "contained",
  size = "md",
  name = "",
  icon = <ArrowRightIcon className="w-5 h-5 ml-1.5" aria-hidden="true" />,
}) => {
  let cls = `${SIZES[size]} ${COLORS[color] || COLORS["primary"]} ${
    VARIANTS[variant]
  }`;

  return (
    <button
      type="button"
      className={`rounded-3xl flex items-center  ${cls} ${
        variant === tags.TAG ? "gap-2" : ""
      }`}
    >
      {variant === tags.TAG &&
        variant !== "tagFilled" &&
        variant !== "tagOutlined" &&
        icon}
      {name}
      {variant !== tags.TAG &&
        variant !== "tagFilled" &&
        variant !== "tagOutlined" &&
        icon}
    </button>
  );
};
