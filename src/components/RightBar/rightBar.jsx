"use client";

import Image from "next/image";

const RightBar = () => {
  return (
        <div className="w-72 flex flex-col h-[80vh] justify-between fixed right-6 top-24 z-10">
      <div className="bg-white w-full h-96 mb-12 rounded-2xl">
        <div className="w-full h-fit">
        {/* <Image src={"/images/career.png"} alt="Career Image" fill /> */}

        </div>
      </div>
      <div className="bg-white w-full h-52 mb-6 rounded-2xl"></div>
      <div className="bg-white w-full h-52 mb-6 rounded-2xl"></div>
      <div className="bg-white w-full h-52 rounded-2xl"></div>
    </div>
  );
};

export default RightBar;
