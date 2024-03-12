"use client";

import { ImageIcon } from "@/svgs/icons";
import { Button, Tag } from "../Button/Button";

const RightBar = () => {
  return (
    <div className="flex flex-col min-h-[90vh] w-[calc(100%-3rem)] md:w-[calc(100%-19.5rem)] ml-auto lg:ml-0 mr-6 lg:mr-0 lg:w-[18.875rem] relative lg:top-[5rem] lg:sticky z-10">
      <div className="flex flex-col items-center w-full mb-5 text-center bg-white px-6 py-6 rounded-2xl gap-2">
        <div className="flex items-center flex-col w-full">
          <ImageIcon aria-hidden="true" />
        </div>
        <h4 className="text-4xl text-body">Your career belongs to you</h4>
        <p className="text-sm font-medium text-body">
          Fast track your way to a better, <br /> more fulfilling job.
        </p>

        <Button
          color="primary"
          variant="outlined"
          name="Find your Fit"
          size="xl"
        />
      </div>
      <h4 className="text-base font-semibold text-body mb-2">Featured Jobs</h4>

      <div className="flex justify-center w-full bg-white px-3 py-3.5 mb-5 rounded-2xl gap-2">
        <div className="flex justify-center min-w-14 h-14">
          <img src={"/images/frame.png"} alt="Career Image" layout="fill" />
        </div>
        <div className="flex flex-col gap-2">
          <div>
            <h4 className="text-base font-semibold text-body">
              Registered Nurse (RN)
            </h4>
            <p className="text-sm font-semibold text-secondary">
              Bayada Home Care
            </p>
            <p className="text-sm text-medium text-body">
              Home Health Care Agency <br /> Boston, MA (Field-Based)
            </p>
          </div>
          <div className="flex flex-wrap w-full gap-2">
            <Button variant="tagOutlined" name="Full Time" size="md" />
            <Button variant="tagOutlined" name="40 Hours / Week" size="md" />
            <Button variant="tagOutlined" name="$75,000-$120,000" size="md" />
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full bg-white px-3 py-3.5 mb-5 rounded-2xl gap-2">
        <div className="flex justify-center min-w-14 h-14">
          <img src={"/images/frame.png"} alt="Career Image" layout="fill" />
        </div>
        <div className="flex flex-col gap-2">
          <div>
            <h4 className="text-base font-semibold text-body">
              Registered Nurse (RN)
            </h4>
            <p className="text-sm font-semibold text-secondary">
              Bayada Home Care
            </p>
            <p className="text-sm text-medium text-body">
              Home Health Care Agency <br /> Boston, MA (Field-Based)
            </p>
          </div>
          <div className="flex flex-wrap w-full gap-2">
            <Button variant="tagOutlined" name="Full Time" size="md" />
            <Button variant="tagOutlined" name="40 Hours / Week" size="md" />
            <Button variant="tagOutlined" name="$75,000-$120,000" size="md" />
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full bg-white px-3 py-3.5 mb-5 rounded-2xl gap-2">
        <div className="flex justify-center min-w-14 h-14">
          <img src={"/images/frame.png"} alt="Career Image" layout="fill" />
        </div>
        <div className="flex flex-col gap-2">
          <div>
            <h4 className="text-base font-semibold text-body">
              Registered Nurse (RN)
            </h4>
            <p className="text-sm font-semibold text-secondary">
              Bayada Home Care
            </p>
            <p className="text-sm text-medium text-body">
              Home Health Care Agency <br /> Boston, MA (Field-Based)
            </p>
          </div>
          <div className="flex flex-wrap w-full gap-2">
            <Button variant="tagOutlined" name="Full Time" size="md" />
            <Button variant="tagOutlined" name="40 Hours / Week" size="md" />
            <Button variant="tagOutlined" name="$75,000-$120,000" size="md" />
          </div>
        </div>
      </div>
      <Button color="primary" variant="outlined" name="Show More" size="lg" />
    </div>
  );
};

export default RightBar;
