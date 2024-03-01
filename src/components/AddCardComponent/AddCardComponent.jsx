import React from 'react'
import { AddIcon } from "@/svgs";

const AddCardComponent = ({ title="Add Title", subTitle="Add Subtitle", description="Please Add Description!"}) => {
  return (
    <div className="px-5 pb-2 mt-6 bg-white rounded-2xl">
        <div className="flex justify-between items-center w-full h-[67px] border-b">
          <div>
            <h4 className="text-[19px] font-semibold text-[#7070FF]">
              {title}
            </h4>
          </div>
          <div>
          </div>
        </div>
        <div className="flex justify-center pt-5">
          <button
            type="button"
            className="text-white"
          >
            <AddIcon className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h4 className="text-[17px] font-semibold text-[#5E5E6F] mb-2 mt-4">
            {subTitle}  
          </h4>

          <p className="text-[16px] text-[#5E5E6F] font-medium mb-8">
            {description}
          </p>
        </div>
      </div>  
  )
}

export default AddCardComponent