import { BellIcon } from "./BellIcon";
import {
  AddIcon,
  BackButton,
  DeleteIcon,
  Edit,
  InfoIcon,
  MessageIcon,
} from "./icons";

const icons = {
  edit: (props) => <Edit {...props} />,
  add: (props) => <AddIcon {...props} />,
  delete: (props) => <DeleteIcon {...props} />,
  back: (props) => <BackButton {...props} />,
  message: (props) => <MessageIcon {...props} />,
  info: (props) => <InfoIcon {...props} />,
  bell: (props) => <BellIcon {...props} />,
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
        className={`flex items-center justify-center rounded-full text-white bg-primary-default w-10 h-10 hover:bg-primary-light ${className}`}
      >
        <Icon iconCls={iconCls} />
      </button>
    );
  } else {
    return (
      <button
        type="button"
        className={`flex items-center justify-center h-10 w-10 rounded-full border-2 text-body border-buttonBorder hover:text-primary-default ${className}`}
      >
        <Icon iconCls={iconCls} />
      </button>
    );
  }
};
