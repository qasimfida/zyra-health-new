import React from "react";

function ProgressBar({ filled = 0 }) {
  const progressStyle = {
    width: `${filled}%`,
    background: "#1ECA63",
  };

  return (
    <div className="flex justify-between ">
      <div className="w-[94%] h-full">
        <div>
          <h4 className="text-[17px] font-semibold text-[#5E5E6F] mb-2">
            You have completed {filled}% of Administrative Duties Checklist
          </h4>
        </div>
        <div className="relative w-full h-[10px] rounded-3xl bg-[#9CD2B2]">
          <div
            className="absolute top-0 left-0 h-full rounded-3xl"
            style={progressStyle}
          ></div>
        </div>
      </div>
      <div className="h-full w-[4%] pt-[28px]">
        <div className="h-full flex items-end pr-2">
          <span className="text-[14px] font-medium text-[#5E5E6F]">
            {filled}%
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
