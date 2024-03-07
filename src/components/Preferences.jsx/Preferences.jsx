"use client";

import { EditIconTransparent, AddPlusIcon } from "@/svgs/icons";
import { Icon } from "@/svgs";
import Card from "../Card/Card";
import { employemntData, preferencesData, searchData, searchPreferencesData, workplacePreferencesData } from "@/utils/data";
import ProfileCard from "@/utils/ProfileCard";

const Preferences = () => {
  return (
    <div>
      <div className="p-5 mt-6 bg-white rounded-2xl">
        <div className="flex justify-between w-full h-10 border-b">
          <h4 className="text-5xl text-primary">Search Preferences</h4>
          <button type="button" className="text-white">
            <Icon name="edit" className="h-8 w-8" aria-hidden="true" filled />
          </button>
        </div>

        {searchPreferencesData.map((item) => (
          <ProfileCard key={item.country} data={item} />
        ))}
      </div>

      <div className="p-5 mt-6 bg-white rounded-2xl">
        <div className="flex justify-between w-full h-10 border-b">
          <h4 className="text-5xl text-primary">Workplace Preferences</h4>
          <button type="button" className="text-white">
            <Icon name="edit" className="h-8 w-8" aria-hidden="true" filled />
          </button>
        </div>

        {workplacePreferencesData.map((item) => (
          <ProfileCard key={item.country} data={item} />
        ))}
      </div>

      <Card
        title={"Add Employment Preferences"}
        subTitle={"Add Employment Preferences"}
        description={
          "Customize your job search by setting your employment preferences"
        }
      />

      <div className="p-5 mt-6 bg-white rounded-2xl">
        <div className="flex justify-between w-full h-10 border-b">
          <h4 className="text-5xl text-primary">Search Preferences</h4>
          <button type="button" className="text-white">
            <Icon name="edit" className="h-8 w-8" aria-hidden="true" filled />
          </button>
        </div>

        {searchData?.map((item) => (
          <ProfileCard key={item.country} data={item} />
        ))}
      </div>

      <div className="p-5 mt-6 bg-white rounded-2xl">
        <div className="flex justify-between w-full h-10 border-b">
          <h4 className="text-5xl text-primary">Workplace Preferences</h4>
          <button type="button" className="text-white">
            <Icon name="edit" className="h-8 w-8" aria-hidden="true" filled />
          </button>
        </div>

        {preferencesData?.map((item) => (
          <ProfileCard key={item.country} data={item} />
        ))}
      </div>

      <div className="p-5 mt-6 bg-white rounded-2xl">
        <div className="flex justify-between w-full h-10 border-b">
          <h4 className="text-5xl text-primary">Workplace Preferences</h4>
          <button type="button" className="text-white">
            <Icon name="edit" className="h-8 w-8" aria-hidden="true" filled />
          </button>
        </div>

        {employemntData?.map((item) => (
          <ProfileCard key={item.country} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Preferences;
