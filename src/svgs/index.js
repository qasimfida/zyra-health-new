import { Breifcase, DocumentMagnify, DocumentsMinus, Edit, Education, Documents, Award, Settings, DocumentTagIcon, WarningTagIcon, TimeTagIcon } from "./icons";

export const Icon = ({ name, filled, className }) => {
  const icons = {
    award: <Award />,
    edit: <Edit />,
    breifcase: <Breifcase />,
    education: <Education />,
    documentsMinus: <DocumentsMinus />,
    documentMagnify: <DocumentMagnify />,
    documents: <Documents />,
    settings: <Settings />,
    documentTagIcon: <DocumentTagIcon />,
    warningTagIcon: <WarningTagIcon />,
    timeTagIcon: <TimeTagIcon />
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
