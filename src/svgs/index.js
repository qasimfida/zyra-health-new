import { AddIcon, BackButton, DeleteIcon, Edit } from "./icons";

const icons = {
  edit: (props) => <Edit {...props} />,
  add: (props) => <AddIcon {...props} />,
  delete: (props) => <DeleteIcon {...props} />,
  back: (props) => <BackButton {...props} />,
};

export const Icon = ({
  name,
  filled = false,
  className = "",
  iconCls = "",
}) => {
  
  const Icon = icons[name];

  if (filled) {
    return (
      <button
        type="button"
        className={`flex items-center justify-center rounded-full text-white bg-primary w-10 h-10 hover:bg-primaryLight ${className}`}
      >
        <Icon iconCls={iconCls} />
      </button>
    );
  } else {
    return (
      <button
        type="button"
        className={`flex items-center justify-center h-10 w-10 rounded-full border-2 text-body border-buttonBorder hover:bg-primary hover:text-white ${className}`}
      >
        <Icon iconCls={iconCls} />
      </button>
    );
  }
  
};
