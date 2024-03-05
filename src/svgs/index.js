import { Edit } from "./icons";

export const Icon = ({ name, filled = false, className = "", iconCls = "" }) => {
  const icons = {
    edit: (props) => <Edit {...props} />,
  };
  const Icon = icons[name]

  if (filled) {
    return (
      <button
        type="button"
        className={`flex items-center justify-center h-10 w-10 rounded-full bg-[#7070FF] hover:bg-white ${className}`}
      >
        <Icon iconCls={iconCls} />
      </button>
    );
  }
  return (
    <Icon iconCls={iconCls} />
  );
};
