"use client";

import { DownloadIcon } from "@/svgs/icons";
import { Icon } from "@/svgs";
import Card from "../Card/Card";
import {
  agreementData,
  disclousureData,
  healthScreeningData,
  identificationData,
  legalData,
  liabilityInsuranceData,
  resumeData,
} from "@/utils/data";
import ProfileCard from "@/utils/ProfileCard";

const Documents = () => {
  return (
    <div>
      <Card
        title={"Resume"}
        subTitle={"Upload Resume Now"}
        description={
          "Upload your most up to date resume to help us find you the next best opportunity."
        }
      />

      <div className="p-5 mt-6 bg-white rounded-2xl">
        <div className="flex justify-between w-full border-b pb-2 items-center">
          <h4 className="text-5xl text-primary-default">Resume</h4>
          <Icon name="edit" className="w-8 h-8" aria-hidden="true" filled />
        </div>

        {resumeData?.map((item) => (
          <ProfileCard key={item.country} data={item} />
        ))}
      </div>

      <Card
        title={"Identification"}
        subTitle={"Upload  ID to Verify  Identity"}
        description={
          "Get success to get started. We respect your privacy and never sell or share your information with others."
        }
      />

      <div className="p-5 mt-6 bg-white rounded-2xl">
        <div className="flex justify-between w-full border-b pb-2 items-center">
          <h4 className="text-5xl text-primary-default">Identification</h4>
          <Icon name="add" className="w-8 h-8" aria-hidden="true" filled />
        </div>

        {identificationData.map((item) => (
          <ProfileCard key={item.country} data={item} />
        ))}
      </div>

      <Card
        title={"Health Screening"}
        subTitle={"Complete Health Screening"}
        description={
          "We require health screening submissions to ensure safely performance of duties."
        }
      />

      <div className="p-5 mt-6 bg-white rounded-2xl">
        <div className="flex justify-between w-full border-b pb-2 items-center">
          <h4 className="text-5xl text-primary-default">Health Screening</h4>
          <Icon name="add" className="w-8 h-8" aria-hidden="true" filled />
        </div>

        {healthScreeningData.map((item) => (
          <ProfileCard key={item.country} data={item} />
        ))}
      </div>

      <Card
        title={"Immunization"}
        subTitle={"Submit  Immunization Records"}
        description={
          "We require immunization records from applicants as part of the application process."
        }
      />

      <div className="p-5 mt-6 bg-white rounded-2xl">
        <div className="flex justify-between w-full border-b pb-2 items-center">
          <h4 className="text-5xl text-primary-default">Immunization</h4>
          <Icon name="add" className="w-8 h-8" aria-hidden="true" filled />
        </div>

        {healthScreeningData.map((item) => (
          <ProfileCard key={item.country} data={item} />
        ))}
      </div>

      <Card
        title={"Liability Insurance"}
        subTitle={"Upload  Liability Insurance"}
        description={
          "Clinicians engaged in contract work must upload liability insurance for continued protection."
        }
      />

      <div className="p-5 mt-6 bg-white rounded-2xl">
        <div className="flex justify-between w-full border-b pb-2 items-center">
          <h4 className="text-5xl text-primary-default">Liability Insurance</h4>
          <Icon name="edit" className="w-8 h-8" aria-hidden="true" filled />
        </div>

        {liabilityInsuranceData.map((item) => (
          <ProfileCard key={item.country} data={item} />
        ))}
      </div>

      {/* Libility Insurance */}
      <div className="p-5 mt-6 bg-white rounded-2xl">
        <div className="flex justify-between w-full border-b pb-2 items-center">
          <h4 className="text-5xl text-primary-default">Liability Insurance</h4>
          <Icon name="edit" className="w-8 h-8" aria-hidden="true" filled />
        </div>
        <div className="flex mt-6">
          <button
            type="button"
            className="flex text-base font-medium text-body mb-4 items-center"
          >
            <input
              id="inline-checkbox"
              type="checkbox"
              value=""
              class="w-5 h-5 text-success bg-white border-2 border-success focus:ring-[none] rounded"
            />
            <span className="ml-2">
              I do not have an active liability insurance
            </span>
          </button>
        </div>
      </div>

      {/* Legal and Consents */}
      <div className="p-5 mt-6 bg-white rounded-2xl">
        <div className="flex justify-between w-full border-b pb-2 items-center">
          <h4 className="text-5xl text-primary-default">Legal and Consents</h4>
        </div>
        <div className="flex justify-between mt-4 mb-4">
          <div>
            <h4 className="text-4xl font-semibold text-body mb-2 mt-4">
              Privacy Policy and Terms of Use
            </h4>
            <p className="text-base text-secondary font-medium mb-2">
              <span className="text-body">Signed Nov: </span>December 23, 2024
            </p>
          </div>
          <div className="flex items-center">
            <button
              type="button"
              className="rounded-3xl border-2 border-primary-default flex items-center text-base font-medium text-primary-default px-5 py-2.5"
            >
              View
            </button>
          </div>
        </div>
      </div>

      <div className="p-5 mt-6 bg-white rounded-2xl">
        <div className="flex justify-between w-full border-b pb-2 items-center">
          <h4 className="text-5xl text-primary-default">Liability Insurance</h4>
          <Icon name="edit" className="w-8 h-8" aria-hidden="true" filled />
        </div>

        {legalData.map(({ country, data }) => (
          <div className="flex justify-between mt-4 mb-4">
            <div>
              <h4 className="text-4xl font-semibold text-body mb-2 mt-4">
                {country}
              </h4>
              <p className="text-base text-secondary font-medium mb-2">
                <span className="text-body">{data.name}: </span>
                {data.value}
              </p>
            </div>
            <div className="flex items-center">
              <button
                type="button"
                className="rounded-3xl border-2 border-primary-default flex items-center text-base font-medium text-primary-default px-5 py-2.5"
              >
                View
              </button>
            </div>
          </div>
        ))}
      </div>

      <Card
        title={"Participation Agreement"}
        subTitle={"Sign the Participation Agreement"}
        description={
          "Review and sign the participation agreement to confirm your understanding and acceptance of the terms."
        }
      />

      {/* Participation Agreement */}
      <div className="mt-6">
        <div className="p-5 mt-6 bg-white rounded-2xl">
          <div className="flex justify-between w-full border-b pb-2 items-center">
            <div className="flex items-center gap-3">
              <Icon name="back" className="w-10 h-10" aria-hidden="true" />
              <h4 className="text-5xl text-primary-default">Participation Agreement</h4>
            </div>
            <div className="flex items-center">
              <DownloadIcon className="w-5 h-5" aria-hidden="true" />
            </div>
          </div>

          {agreementData.map((data) => {
            return (
              <div className="mt-4 mb-4">
                <h4 className="text-base font-bold text-primary-default leading-6 mb-2 mt-4">
                  {data.heading}
                </h4>
                <p className="mb-2">
                  <span className="text-body text-base font-medium leading-6 ">
                    {data.paragraph}
                  </span>
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-6 rounded-2xl">
          <div>
            <div className="flex mt-6">
              <button
                type="button"
                className="flex text-base font-medium text-body mb-4 items-center"
              >
                <input
                  id="inline-checkbox"
                  type="checkbox"
                  value=""
                  class="w-5 h-5 text-success bg-white border-2 border-success focus:ring-[none] rounded"
                />
                <span className="ml-2">
                  I have read and understand the Participation Agreement and
                  agree to all terms
                </span>
              </button>
            </div>
            <h4 className="text-[14px] font-medium text-primary-default leading-5 mb-2 mt-4">
              Signature
            </h4>
          </div>
          <div className="flex gap-3 mt-4">
            <input
              type="text"
              name="price"
              id="price"
              className="block rounded-full border-0 py-1.5 pl-7 pr-20 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6 bg-white w-full"
              placeholder="Enter Full Name here"
            />
            <button
              type="button"
              className="rounded-3xl bg-primary-default flex items-center text-base font-medium text-white h-[45px] py-[10px] px-[60px] leading-6"
            >
              Sign
            </button>
          </div>
        </div>
      </div>

      <Card
        title={"Background Check Consent Form"}
        subTitle={"Background Check Consent Form  "}
        description={
          "We require your approval for the background check to maintain safety and compliance standards."
        }
      />

      {/* Participation Agreement */}
      <div className="mt-6">
        <div className="p-5 bg-white rounded-2xl pb-4">
          <div className="flex justify-between w-full border-b pb-2 items-center">
            <div className="flex items-center gap-3">
              <Icon name="back" className="w-10 h-10" aria-hidden="true" />
              <h4 className="text-5xl text-primary-default">Participation Agreement</h4>
            </div>
            <div className="flex items-center">
              <DownloadIcon className="w-5 h-5" aria-hidden="true" />
            </div>
          </div>
          <div className="mt-4 mb-4">
            <p className="mb-2">
              <span className="text-body text-base font-medium leading-6 ">
                Please check this box if you would like to receive a copy of an
                investigative consumer report or consumer credit report at no
                charge if one is obtained by the Company whenever you have a
                right to receive such a copy under California law.
              </span>
            </p>
            <h4 className="text-base font-bold text-primary-default leading-6 mb-4 mt-4">
              Receive Report?
            </h4>
            <div className="flex items-center mb-4">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 mr-2 text-base font-medium rounded focus:ring-[none]"
              />
              <h4 className="text-base font-medium text-body leading-6 mr-4">
                yes
              </h4>
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 mr-2 text-base font-medium rounded focus:ring-[none]"
              />
              <h4 className="text-base font-medium text-body leading-6 ">No</h4>
            </div>

            {disclousureData.map((data) => {
              return (
                <p className="mb-2">
              <span className="text-body text-base font-medium leading-6 ">
                {data.paragraph}
              </span>
            </p>
              )
            })}
          </div>
        </div>

        <div className="mt-6 rounded-2xl">
          <div className="flex gap-3 mt-4">
            <input
              type="text"
              name="price"
              id="price"
              className="block rounded-full border-0 py-1.5 px-4 py-3 text-sm text-body placeholder:text-body sm:text-sm sm:leading-6 bg-white w-full"
              placeholder="Signature For Background Check Release"
            />
            <input
              type="text"
              name="price"
              id="price"
              className="block rounded-full border-0 py-1.5 px-4 py-3 text-sm text-body placeholder:text-body sm:text-sm sm:leading-6 bg-white w-full"
              placeholder="Signature For Disclosure"
            />
            <button
              type="button"
              className="rounded-3xl bg-primary-default flex items-center text-base font-medium text-white px-16 py-2.5 leading-6"
            >
              Sign
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documents;
