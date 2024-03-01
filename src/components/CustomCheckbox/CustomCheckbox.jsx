import React, { useState } from 'react';

function CustomCheckbox({ variant = "red", checkedDefault = false }) {
  const [checked, setChecked] = useState(checkedDefault);

  let colorStyle;

  switch (variant) {
    case "orange":
      colorStyle = checked
        ? "w-6 h-6 bg-[#FE9B26] rounded-full"
        : "w-6 h-6 bg-white border-2 border-[#FE9B26] rounded-full";
      break;
    case "green":
      colorStyle = checked
        ? "w-6 h-6 bg-[#00DF59] rounded-full"
        : "w-6 h-6 bg-white border-2 border-[#00DF59] rounded-full";
      break;
    case "yellow":
      colorStyle = checked
        ? "w-6 h-6 bg-[#FFC75A] rounded-full"
        : "w-6 h-6 bg-white border-2 border-[#FFC75A] rounded-full";
      break;
    default:
      colorStyle = checked
        ? "w-6 h-6 bg-[#FF5858] rounded-full"
        : "w-6 h-6 bg-white border-2 border-[#FF5858] rounded-full";
  }

  return (
    <div
      className={colorStyle}
      onClick={() => setChecked(!checked)}
    ></div>
  );
}

export default CustomCheckbox;
