import { Edit } from "./icons";

export const Icon = ({ name, filled, className }) => {
  const icons = {
    edit: <Edit />,
  };

  if (filled) {
    return (
      <button
        type="button"
        className={`flex items-center justify-center h-10 w-10 rounded-full bg-[#7070FF] hover:bg-white ${className}`}
      >
        {icons[name]}
      </button>
    );
  }
  return (
    <button
      type="button"
      className={`flex items-center justify-center h-10 w-10  rounded-full ${className}`}
    >
      {icons[name]}
    </button>
  );
};
