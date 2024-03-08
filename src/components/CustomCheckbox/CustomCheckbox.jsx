import React, { useState } from "react";

function CustomCheckbox({ checked, onChange, variant = "red" }) {
  let colorStyle;

  switch (variant) {
    case "orange":
      colorStyle = checked
        ? "w-4 h-4 bg-[#FE9B26] rounded-full"
        : "w-4 h-4 bg-white border-2 border-[#FE9B26] rounded-full";
      break;
    case "green":
      colorStyle = checked
        ? "w-4 h-4 bg-[#00DF59] rounded-full"
        : "w-4 h-4 bg-white border-2 border-[#00DF59] rounded-full";
      break;
    case "yellow":
      colorStyle = checked
        ? "w-4 h-4 bg-[#FFC75A] rounded-full"
        : "w-4 h-4 bg-white border-2 border-[#FFC75A] rounded-full";
      break;
    default:
      colorStyle = checked
        ? "w-4 h-4 bg-[#FF5858] rounded-full"
        : "w-4 h-4 bg-white border-2 border-[#FF5858] rounded-full";
  }

  return <div className={colorStyle} onClick={onChange}></div>;
}

export default CustomCheckbox;
