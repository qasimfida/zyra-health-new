"use client";

import {
  BackIcon,
  AddIconSmall,
  DownloadIcon,
} from "@/svgs/icons";
import { Icon } from "@/svgs";
import Card from "../Card/Card";
import {
  healthScreeningData,
  identificationData,
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
        <div className="flex justify-between w-full h-10 border-b">
          <h4 className="text-5xl text-primary">Resume</h4>
          <button type="button" className="text-white">
            <Icon name="edit" className="h-8 w-8" aria-hidden="true" filled />
          </button>
        </div>

        {resumeData.map((item) => (
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
        <div className="flex justify-between w-full h-10 border-b">
          <h4 className="text-5xl text-primary">Identification</h4>
          <button type="button" className="text-white">
            <AddIconSmall className="w-5 h-5" aria-hidden="true" />
          </button>
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
        <div className="flex justify-between w-full h-10 border-b">
          <h4 className="text-5xl text-primary">Health Screening</h4>
          <button type="button" className="text-white">
            <AddIconSmall className="w-5 h-5" aria-hidden="true" />
          </button>
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
        <div className="flex justify-between w-full h-10 border-b">
          <h4 className="text-5xl text-primary">Immunization</h4>
          <button type="button" className="text-white">
            <AddIconSmall className="w-5 h-5" aria-hidden="true" />
          </button>
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
        <div className="flex justify-between w-full h-10 border-b">
          <h4 className="text-5xl text-primary">Liability Insurance</h4>
          <button type="button" className="text-white">
            <AddIconSmall className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {liabilityInsuranceData.map((item) => (
          <ProfileCard key={item.country} data={item} />
        ))}
      </div>

      {/* Libility Insurance */}
      <div className="px-5 mt-6 bg-white rounded-2xl">
        <div className="flex justify-between items-center w-full min-h-[67px] border-b">
          <div>
            <h4 className="text-[19px] font-semibold text-[#7070FF]">
              Liability Insurance
            </h4>
          </div>
          <div className="flex items-center">
            <button type="button" className="text-white">
              <Icon name="edit" className="h-8 w-8" aria-hidden="true" filled />
            </button>
          </div>
        </div>
        <div className="flex mt-6">
          <button
            type="button"
            className="flex text-[16px] font-medium text-[#5E5E6F] mb-4 items-center"
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
      <div className="px-5 mt-6 bg-white rounded-2xl">
        <div className="flex justify-between items-center w-full min-h-[67px] border-b">
          <h4 className="text-[19px] font-semibold text-[#7070FF]">
            Legal and Consents
          </h4>
        </div>
        <div className="flex justify-between mt-4 mb-4">
          <div>
            <h4 className="text-[17px] font-semibold text-[#5E5E6F] mb-2 mt-4">
              Privacy Policy and Terms of Use
            </h4>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Signed Nov: </span>December 23,
              2024
            </p>
          </div>
          <div className="flex items-center">
            <button
              type="button"
              className="rounded-3xl border-2 border-[#7070FF] flex items-center text-[16px] font-medium text-[#7070FF] h-[45px] py-[5px] px-[14px]"
            >
              View
            </button>
          </div>
        </div>
      </div>

      {/* Legal and Consents */}
      <div className="px-5 mt-6 bg-white rounded-2xl">
        <div className="flex justify-between items-center w-full min-h-[67px] border-b">
          <h4 className="text-[19px] font-semibold text-[#7070FF]">
            Legal and Consents
          </h4>
        </div>
        <div className="flex justify-between mt-4 mb-4">
          <div>
            <h4 className="text-[17px] font-semibold text-[#5E5E6F] mb-2 mt-4">
              Privacy Policy and Terms of Use
            </h4>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Issue Date: </span>November 2023
            </p>
          </div>
          <div className="flex items-center">
            <button
              type="button"
              className="rounded-3xl border-2 border-[#7070FF] flex items-center text-[16px] font-medium text-[#7070FF] h-[45px] py-[5px] px-[14px]"
            >
              View
            </button>
          </div>
        </div>
        <div className="flex justify-between mt-4 mb-4">
          <div>
            <h4 className="text-[17px] font-semibold text-[#5E5E6F] mb-2 mt-4">
              Privacy Policy and Terms of Use
            </h4>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Issue Date: </span>November 2023
            </p>
          </div>
          <div className="flex items-center">
            <button
              type="button"
              className="rounded-3xl border-2 border-[#7070FF] flex items-center text-[16px] font-medium text-[#7070FF] h-[45px] py-[5px] px-[14px]"
            >
              View
            </button>
          </div>
        </div>
        <div className="flex justify-between mt-4 mb-4">
          <div>
            <h4 className="text-[17px] font-semibold text-[#5E5E6F] mb-2 mt-4">
              Privacy Policy and Terms of Use
            </h4>
            <p className="text-[16px] text-[#7F7F7F] font-medium mb-2">
              <span className="text-[#5E5E6F]">Issue Date: </span>November 2023
            </p>
          </div>
          <div className="flex items-center">
            <button
              type="button"
              className="rounded-3xl border-2 border-[#7070FF] flex items-center text-[16px] font-medium text-[#7070FF] h-[45px] py-[5px] px-[14px]"
            >
              View
            </button>
          </div>
        </div>
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
        <div className="px-5 bg-white rounded-2xl">
          <div className="flex justify-between items-center w-full min-h-[67px] border-b">
            <div className="flex items-center">
              <button type="button" className="mr-4 text-white">
                <BackIcon className="w-5 h-5" aria-hidden="true" />
              </button>
              <h4 className="text-[19px] font-semibold text-[#7070FF]">
                Participation Agreement
              </h4>
            </div>
            <div className="flex items-center">
              <button type="button" className="text-white">
                <DownloadIcon className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          </div>
          <div className="mt-4 mb-4">
            <h4 className="text-[16px] font-bold text-[#7070FF] leading-6 mb-2 mt-4">
              ZyraHealth Participation Agreement
            </h4>
            <p className="mb-2">
              <span className="text-[#5E5E6F] text-[16px] font-medium leading-6 ">
                This ZyraHealth Participation Agreement (this
                &quot;Agreement&quot;) is made effective on the date you execute
                this Agreement (such date referred to herein as the
                &quot;Effective Date&quot;). The parties to this Agreement are:
                (i) You, and (ii) ZyraHealth, Inc., a Delaware corporation, with
                principal offices located at 999 Peachtree Street NE, Suite
                2750, Atlanta, GA 30309 (hereafter referred to as
                &quot;ZyraHealth&quot;). You and ZyraHealth are individually
                referred to herein as a &quot;Party&quot; and collectively
                referred to herein as &quot;Parties&quot;. ZyraHealth is in the
                business of providing tech-based staffing solutions to hospitals
                and other healthcare entities (such hospitals and other
                healthcare entities referred to herein as &quot;Participating
                Organizations&quot;) that need efficient and quick access to
                healthcare providers (&quot;Clinicians&quot;) wanting to fill
                available assignments, positions, and shifts. ZyraHealth
                provides technical applications and platforms for use by
                Participating Organizations and Clinicians in order to optimize
                the staffing experience for all involved. Such technical
                applications and platforms are referred to herein individually
                and collectively as the &quot;ZyraHealth Application&quot;. By
                executing this Agreement in the space provided below, you are
                indicating your willingness to participate in the ZyraHealth
                Application and your agreement to all of the terms and
                conditions of this Agreement. In consideration of the mutual
                promises herein, and for other good and valuable consideration,
                the receipt and sufficiency of which are hereby acknowledged,
                the Parties, intending to be legally bound, hereby agree as
                follows:
              </span>
            </p>
          </div>
          <div className="mt-4 mb-4">
            <h4 className="text-[16px] font-bold text-[#7070FF] leading-6 mb-2 mt-4">
              Section 1 Clinician Duties, Obligations, and Representations.
            </h4>
            <p className="mb-2">
              <span className="text-[#5E5E6F] text-[16px] font-medium leading-6 ">
                1.1 Credentialing and Onboarding. In order to participate in the
                ZyraHealth Application, you must provide the required
                information in our credentialing platform or as otherwise
                requested. This information may be used by Participating
                Organizations to choose healthcare services providers to fill
                their staffing needs and to gather information needed for the
                Participating Organizations to make placement and assignment
                decisions. You agree to provide accurate and complete
                information to ZyraHealth, and you also agree to supplement and
                make corrections to your information as your circumstances
                change to ensure that the information on file remains accurate
                and complete at all times during your participation in the
                ZyraHealth Application. Any falsification of information will
                result in immediate termination of your employment with
                ZyraHealth, your permission to use the ZyraHealth Application,
                and your eligibility to be placed on assignment with
                Participating Organizations. We also may report you to the
                appropriate licensing boards. You are responsible for
                maintaining your credentials and not allowing them to expire or
                lapse, and any employment with ZyraHealth, permission to use the
                ZyraHealth Application, and eligibility to be placed on
                assignment with Participating Organizations may be terminated if
                your credentials expire or lapse.
              </span>
            </p>
            <p className="mb-2">
              <span className="text-[#5E5E6F] text-[16px] font-medium leading-6 ">
                In addition, any employment with ZyraHealth and placement on
                assignment with a Participating Organization is contingent upon,
                and may not commence until, the successful completion of
                ZyraHealth onboarding that may include providing legal proof of
                your identity, verifying your authorization to work in the
                United States, meeting background check and drug screening
                requirements, license verification, and the successful
                completion of certification specific skills checklists and
                competency assessments. Unless otherwise outlined in a COA or
                shift request, or required under applicable law, you will not
                receive compensation for the time you spend completing the
                on-boarding process or waiting for ZyraHealth to complete the
                on-boarding process; your employment with ZyraHealth does not
                begin until the full on-boarding process has been completed and
                your assignment has commenced. If a Participating Organization
                requires orientation or training, you will be responsible to
                participate in the orientation in accordance with the
                Participating Organization’s requirements. You may be required
                to complete additional facility specific documents and/or
                training depending on the assignment, position, or shift.
              </span>
            </p>
            <p className="mb-2">
              <span className="text-[#5E5E6F] text-[16px] font-medium leading-6 ">
                1.2 Acceptance of Staffing Opportunities. You are under no
                obligation to accept an offered assignment or shift with a
                Participating Organization. If, however, you choose to accept an
                offered assignment- or shift, you agree to use your best efforts
                to comply fully with the policies and rules of such
                Participating organizations and ZyraHealth, as well as
                applicable laws and regulations. Failure to properly comply with
                such policies, rules, laws and regulations may result in your
                removal by ZyraHealth, in its sole discretion, as a participant
                in the ZyraHealth Application or as a ZyraHealth employee
                eligible for placement with a Participating Organization, and/or
                your removal by a Participating Organization from an assignment.
              </span>
            </p>
            <p className="mb-2">
              <span className="text-[#5E5E6F] text-[16px] font-medium leading-6 ">
                1.3 Ratings. Representatives of Participating Organizations at
                which you have performed services may be given the opportunity
                to rate your performance. By executing this Agreement, you
                acknowledge and agree that such ratings will be added to your
                profile on the ZyraHealth Application, and may be made available
                to Participating Organizations. You further acknowledge that
                such ratings may impact your future placement opportunities.
                Since the ratings are not given by ZyraHealth, you hereby waive
                any and all past, present, and future claims and causes of
                action of any type, whether known or unknown, against
                ZyraHealth, directly or indirectly, arising out of or relating
                to each rating provided by a Participating Organization and the
                publishing of any such rating on the ZyraHealth Application.
              </span>
            </p>
            <p className="mb-2">
              <span className="text-[#5E5E6F] text-[16px] font-medium leading-6 ">
                1.4 Performance Compliance. In the performance of your duties on
                behalf of Participating Organizations, you agree to
                substantially comply with all federal, state, and local laws,
                rules, and regulations. You also agree to comply with all
                applicable standards of care required of you during your
                performance of services for Participating Organizations.
              </span>
            </p>
            <p className="mb-2">
              <span className="text-[#5E5E6F] text-[16px] font-medium leading-6 ">
                1.5 No Conflict with Other Agreements. You hereby acknowledge
                and agree that your participation in the ZyraHealth Application
                and your services for any Participating Organization will not
                conflict with nor result in a breach of any other agreement to
                which you are a party or any policies of employment or retention
                by which you are bound. In the event of a third-party claim
                against ZyraHealth or any Participating Organization due to such
                a conflict or breach, you hereby agree to indemnify ZyraHealth
                and/or the Participating Organization for damages arising out of
                any such alleged conflict or breach, including payment of
                reasonable attorneys’ fees incurred by ZyraHealth or a
                Participating Organization.
              </span>
            </p>
            <p className="mb-2">
              <span className="text-[#5E5E6F] text-[16px] font-medium leading-6 ">
                1.6 Representation and Covenant. You hereby warrant and
                represent that you will not accept or perform services for any
                Participating Organization unless you are properly qualified and
                licensed for the applicable assignments, positions and/or
                shifts. You warrant and represent that, to the extent your
                assignment, position or shift requires you to be licensed, you
                will hold and maintain an active, unrestricted license. If any
                such license is terminated, suspended, limited, conditioned,
                restricted or revoked in any way, you agree to immediately
                notify ZyraHealth and any Participating Organization for which
                you are providing services. This Agreement may be terminated at
                the discretion of ZyraHealth without regard to whether such
                termination, suspension, limitation, condition, restriction or
                revocation has been finally adjudicated. You also acknowledge
                and agree that by accepting and commencing your work on an
                assignment, position, or shift, you are representing that you
                are in a physical and mental state that, with or without
                reasonable accommodation, renders you able to perform the duties
                and responsibilities assigned.
              </span>
            </p>
          </div>
          <div className="mt-4 mb-4">
            <h4 className="text-[16px] font-bold text-[#7070FF] leading-6 mb-2 mt-4">
              Section 2 Payment and Other Rights and Opportunities
            </h4>
            <p className="mb-2">
              <span className="text-[#5E5E6F] text-[16px] font-medium leading-6 ">
                2.1 Payment for Services. Unless other payment arrangements are
                made, you will receive payment from ZyraHealth for the
                professional services you provide to Participating Organizations
                using the ZyraHealth Application. Your payment will vary for
                services to Participating Organizations in accordance with the
                terms and conditions outlined for each assignment, position, or
                shift, whether in the Confirmation of Assignment
                (&quot;COA&quot;) or the shift request. Payment will be based
                upon hours worked as reported to ZyraHealth by the clinician
                along with supporting documentation from the Participating
                Organization, and all payments will be made to you in accordance
                with ZyraHealth’s standard schedule and may be dependent upon
                additional documentation of worked hours as confirmed by a
                Participating Organization. You may also have the option to
                elect to receive same-day payment (&quot;Paymint&quot;), through
                the ZyraHealth Application. Use of the Paymint feature of the
                ZyraHealth Application is a privilege that may be revoked at any
                time for any reason by ZyraHealth in its sole discretion.
                Inaccurate reporting of hours worked, whether intentional or
                not, along with other occurrences, may result in suspension of
                Paymint privileges. The timing and delivery of any payment
                through Paymint shall be subject to ZyraHealth’s receipt of
                required documentation to verify your worked hours with
                Participating Organizations.
              </span>
            </p>
            <p className="mb-2">
              <span className="text-[#5E5E6F] text-[16px] font-medium leading-6 ">
                2.2 Mandatory Use of Application. In order to be placed and
                remain on an assignment, position, or shift with a Participating
                Organization, you must have a mobile device and agree to use the
                ZyraHealth Mobile application to clock in and clock out of each
                shift, including for meal and rest breaks or other breaks from
                your duties and responsibilities. When using the ZyraHealth
                Mobile application to clock in and clock out of a shift, you
                must have geolocation enabled. By signing this Participation
                Agreement, you agree to utilize the ZyraHealth Mobile
                application as required and to permit ZyraHealth to access data
                related to your exact location when you clock in to your shift
                and when you clock out.
              </span>
            </p>
            <p className="mb-2">
              <span className="text-[#5E5E6F] text-[16px] font-medium leading-6 ">
                2.3 Stipends. For certain assignments, positions, and shifts,
                you will be provided with a stipend. The terms and conditions
                for payment of stipends will typically be outlined in your COA
                or shift request but in certain circumstances may be
                communicated through different means and will be in accordance
                with applicable federal, state, and local law.
              </span>
            </p>
            <p className="mb-2">
              <span className="text-[#5E5E6F] text-[16px] font-medium leading-6 ">
                2.4 State- and Local-Specific Rules. Certain jurisdictions have
                requirements with regard to terms and conditions of employment,
                including, but not limited to, wage payment, hours worked, and
                breaks. In the event that you are placed on an assignment,
                position or shift in one of these jurisdictions, you agree to
                provide any information requested of you in a complete and
                accurate manner in order for ZyraHealth to ensure it meets these
                requirements. 2.5 Published Qualifications. ZyraHealth will make
                your information and qualifications available as part of the
                ZyraHealth Application to Participating Organizations. When
                using the ZyraHealth Application to help meet staffing needs,
                Participating Organizations will provide qualification
                parameters in the ZyraHealth Application. Should your
                qualifications meet those requested of a Participating
                Organization, your name and personal information will be
                provided to the requesting Participating Organization. Your
                performance ratings as provided by representatives of prior
                Participating Organizations may be available as part of the
                ZyraHealth Application.
              </span>
            </p>
            <p className="mb-2">
              <span className="text-[#5E5E6F] text-[16px] font-medium leading-6 ">
                2.6 Other Opportunities. As a participant in the ZyraHealth
                Application, you may receive additional opportunities and
                benefits made available to other ZyraHealth participants where
                your qualifications are appropriate.
              </span>
            </p>
            <p className="mb-2">
              <span className="text-[#5E5E6F] text-[16px] font-medium leading-6 ">
                2.7 Review Opportunities. You will be given the opportunity to
                review information available in the ZyraHealth Application. In
                the event that any of your information is incorrect, you agree
                to inform us of the inaccuracies or omissions in your
                information so that we may correct it.
              </span>
            </p>
          </div>
          <div className="mt-4 mb-4">
            <h4 className="text-[16px] font-bold text-[#7070FF] leading-6 mb-2 mt-4">
              Section 3 ZyraHealth Duties and Obligations
            </h4>
            <p className="mb-2">
              <span className="text-[#5E5E6F] text-[16px] font-medium leading-6 ">
                3.1 Accurate Information. ZyraHealth agrees to accurately convey
                your information in the ZyraHealth Application as such
                information was provided by you. In the event that you believe
                any information to be inaccurate, you agree to inform us so that
                we may correct it. 3.2 Additional Rights and Opportunities.
                ZyraHealth agrees to provide additional opportunities from time
                to time to qualified individuals participating in the ZyraHealth
                Application. All such additional opportunities will be
                communicated to you via the mailing address or email address we
                have on file, or via text messages or phone call to the phone
                number we have on file. By signing this Participation Agreement,
                you agree to receive calls, emails, and text messages conveying
                information relating to ZyraHealth and opportunities with
                Participating Organizations. You agree to notify ZyraHealth of
                any change in your mailing address, email address, or telephone
                number immediately.
              </span>
            </p>
          </div>
          <div className="mt-4 mb-4">
            <h4 className="text-[16px] font-bold text-[#7070FF] leading-6 mb-2 mt-4">
              Section 4 Termination.
            </h4>
            <p className="mb-2">
              <span className="text-[#5E5E6F] text-[16px] font-medium leading-6 ">
                4.1 Termination. Any Party may terminate this Agreement for any
                reason whatsoever by giving the other Party notice of the intent
                to terminate. The termination will be effective immediately upon
                the provision of such notice. 4.2 No Guarantee of Placement or
                Employment. This Agreement governs your participation in the
                ZyraHealth Application. Your participation in and access to the
                ZyraHealth Application does not guarantee that you will be
                placed in any position or that you will be employed by
                ZyraHealth. In the event that you are placed on assignment with
                a Participating Organization, the terms and conditions of your
                employment will be governed by the COA or the information
                provided through the ZyraHealth Application. Any employment with
                ZyraHealth, participation in the ZyraHealth Application, and/or
                assignment with a Participating Organization by you is
                &quot;at-will&quot;, meaning that you, ZyraHealth, and any
                Participating Organization at which you are placed may terminate
                your permission to participate in the ZyraHealth Application,
                your employment with ZyraHealth, or your assignment, position,
                or shift, for any lawful reason at any time, or for no reason at
                all, with or without notice.
              </span>
            </p>
          </div>
          <div className="mt-4 mb-4">
            <h4 className="text-[16px] font-bold text-[#7070FF] leading-6 mb-2 mt-4">
              Section 5 Miscellaneous Provisions.
            </h4>
            <p className="mb-2">
              <span className="text-[#5E5E6F] text-[16px] font-medium leading-6 ">
                5.1 Dispute Resolution. The Parties agree that, due to the high
                costs of litigation and delays in resolution of claims in state
                and federal court systems, any dispute relating to or arising
                out of this Agreement and any employment relationship should be
                resolved by binding arbitration, without resort to state and
                federal courts. You, on behalf of yourself and all heirs,
                successors, and assigns, agree to resolve any and all disputes
                or claims related in any manner whatsoever to your participation
                in the ZyraHealth Application and/or your employment and
                potential employment with ZyraHealth, including, but not limited
                to, any claims against ZyraHealth, its officers, shareholders,
                employees, agents, affiliates, subsidiaries, parents, or
                successors (together, the &quot;Company&quot;), by binding
                arbitration before a neutral third party in accordance with the
                applicable rules of the American Arbitration Association
                (&quot;AAA&quot;).
              </span>
            </p>
            <p className="mb-2">
              <span className="text-[#5E5E6F] text-[16px] font-medium leading-6 ">
                Disputes or claims related to the ZyraHealth Application,
                employment and potential employment include, but are not limited
                to, causes of action, allegations, claims or charges based upon
                federal or state statutes or laws, including, but not limited
                to, any federal or state civil rights or human rights law,
                federal or state wage and hour law, federal or state family,
                personal, or medical leave law, federal or state laws relating
                to benefits, tort or contract laws, or any other federal, state,
                or local law affecting employment in any manner whatsoever. You
                agree to pursue any disputes or claims on an individual basis in
                arbitration. Specifically, you agree not to pursue, or allow
                anyone to pursue on your behalf, any claims on a class or
                collective basis in arbitration or otherwise. Judgment on the
                award rendered by the arbitrator may be entered in any court
                having jurisdiction thereof. The arbitrator shall be agreed upon
                by both sides unless unable to agree, in which case the
                arbitrator shall be selected in accordance with the normal
                procedures of the AAA. The parties agree that the Federal
                Arbitration Act governs the enforceability of this agreement to
                arbitrate.
              </span>
            </p>
            <p className="mb-2">
              <span className="text-[#5E5E6F] text-[16px] font-medium leading-6 ">
                5.2 Governing Law and Severability. This Agreement and any
                dispute arising hereunder shall be governed by the substantive
                laws of the State of Georgia, without regard to its conflicts of
                law rules. In the event that any provision in this Agreement is
                deemed unenforceable or unlawful by any statute, rule, or
                decision of any court of competent jurisdiction, the remaining
                provisions in this Agreement shall remain valid and enforceable.
              </span>
            </p>
            <p className="mb-2">
              <span className="text-[#5E5E6F] text-[16px] font-medium leading-6 ">
                5.3 Notices. Notices required or permitted to be given by either
                Party to the other may be given by personal delivery in writing
                or by email properly addressed to the other Party. Notices to
                ZyraHealth shall be given to ZyraHealth at 999 Peachtree Street
                NE, Suite 2750, Atlanta, GA 30309, Attn: Rob Edmund or via email
                at legal@ZyraHealth.com. Notices to you shall be addressed to
                the address or email address on file that you provide. Each
                Party shall notify the other Party of any change to their
                contact information in writing.
              </span>
            </p>
            <p className="mb-2">
              <span className="text-[#5E5E6F] text-[16px] font-medium leading-6 ">
                The Parties individually and by their respective appointed
                representatives do hereby execute this Agreement acknowledging
                full agreement with all terms and provisions herein.
              </span>
            </p>
            <p className="mb-2">
              <span className="text-[#5E5E6F] text-[16px] font-medium leading-6 ">
                Checkbox: I acknowledge that as of the date hereof, this
                Agreement supersedes and replaces all previous verbal or written
                agreements, memoranda, correspondence or other communications
                between the parties hereto relating to the subject matter
                hereof.
              </span>
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-2xl">
          <div>
            <button
              type="button"
              className="flex text-[16px] font-medium text-[#5E5E6F] mb-4 items-center"
            >
              {/* <CheckboxIcon className="w-5 h-5 mr-2" aria-hidden="true" /> */}
              <input
                id="inline-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
              />
              <span className="ml-2">
                I have read and understand the Participation Agreement and agree
                to all terms
              </span>
            </button>
            <h4 className="text-[14px] font-medium text-[#7070FF] leading-5 mb-2 mt-4">
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
              className="rounded-3xl bg-[#7070FF] flex items-center text-[16px] font-medium text-white h-[45px] py-[10px] px-[60px] leading-6"
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
        <div className="px-5 bg-white rounded-2xl pb-4">
          <div className="flex justify-between items-center w-full min-h-[67px] border-b">
            <div className="flex items-center">
              <button type="button" className="mr-4 text-white">
                <BackIcon className="w-5 h-5" aria-hidden="true" />
              </button>
              <h4 className="text-[19px] font-semibold text-[#7070FF]">
                Participation Agreement
              </h4>
            </div>
            <div className="flex items-center">
              <button type="button" className="text-white">
                <DownloadIcon className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          </div>
          <div className="mt-4 mb-4">
            <p className="mb-2">
              <span className="text-[#5E5E6F] text-[16px] font-medium leading-6 ">
                Please check this box if you would like to receive a copy of an
                investigative consumer report or consumer credit report at no
                charge if one is obtained by the Company whenever you have a
                right to receive such a copy under California law.
              </span>
            </p>
            <h4 className="text-[16px] font-bold text-[#7070FF] leading-6 mb-4 mt-4">
              Receive Report?
            </h4>
            <div className="flex items-center mb-4">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 mr-4 text-blue-600 bg-gray-100 rounded"
              />
              <h4 className="text-[16px] font-medium text-[#5E5E6F] leading-6 mr-4">
                yes
              </h4>
              <h4 className="text-[16px] font-medium text-[#5E5E6F] leading-6 ">
                No
              </h4>
            </div>
            <p className="mb-2">
              <span className="text-[#5E5E6F] text-[16px] font-medium leading-6 ">
                DISCLOSURE REGARDING BACKGROUND INVESTIGATION ZyraHealth
                (&quot;the Company&quot;) may obtain information about you from
                a third-party consumer reporting agency for employment purposes.
                Thus, you may be the subject of a &quot;consumer report&quot;
                and/or an &quot;investigative consumer report&quot; which may
                include information about your character, general reputation,
                personal characteristics, and/or mode of living, and which can
                involve personal interviews with sources such as your neighbors,
                friends, or associates.
              </span>
            </p>
            <p className="mb-2">
              <span className="text-[#5E5E6F] text-[16px] font-medium leading-6 ">
                DISCLOSURE REGARDING BACKGROUND INVESTIGATION ZyraHealth
                (&quot;the Company&quot;) may obtain information about you from
                a third-party consumer reporting agency for employment purposes.
                Thus, you may be the subject of a &quot;consumer report&quot;
                and/or an &quot;investigative consumer report&quot; which may
                include information about your character, general reputation,
                personal characteristics, and/or mode of living, and which can
                involve personal interviews with sources such as your neighbors,
                friends, or associates.
              </span>
            </p>
            <p className="mb-2">
              <span className="text-[#5E5E6F] text-[16px] font-medium leading-6 ">
                DISCLOSURE REGARDING BACKGROUND INVESTIGATION ZyraHealth
                (&quot;the Company&quot;) may obtain information about you from
                a third-party consumer reporting agency for employment purposes.
                Thus, you may be the subject of a &quot;consumer report&quot;
                and/or an &quot;investigative consumer report&quot; which may
                include information about your character, general reputation,
                personal characteristics, and/or mode of living, and which can
                involve personal interviews with sources such as your neighbors,
                friends, or associates.
              </span>
            </p>
            <p className="mb-2">
              <span className="text-[#5E5E6F] text-[16px] font-medium leading-6 ">
                DISCLOSURE REGARDING BACKGROUND INVESTIGATION ZyraHealth
                (&quot;the Company&quot;) may obtain information about you from
                a third-party consumer reporting agency for employment purposes.
                Thus, you may be the subject of a &quot;consumer report&quot;
                and/or an &quot;investigative consumer report&quot; which may
                include information about your character, general reputation,
                personal characteristics, and/or mode of living, and which can
                involve personal interviews with sources such as your neighbors,
                friends, or associates.
              </span>
            </p>
            <p className="mb-2">
              <span className="text-[#5E5E6F] text-[16px] font-medium leading-6 ">
                DISCLOSURE REGARDING BACKGROUND INVESTIGATION ZyraHealth
                (&quot;the Company&quot;) may obtain information about you from
                a third-party consumer reporting agency for employment purposes.
                Thus, you may be the subject of a &quot;consumer report&quot;
                and/or an &quot;investigative consumer report&quot; which may
                include information about your character, general reputation,
                personal characteristics, and/or mode of living, and which can
                involve personal interviews with sources such as your neighbors,
                friends, or associates.
              </span>
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-2xl">
          <div className="flex gap-3 mt-4">
            <input
              type="text"
              name="price"
              id="price"
              className="block rounded-full border-0 py-1.5 pl-7 pr-20 text-[14px] text-[#5E5E6F] placeholder:text-[#5E5E6F] sm:text-sm sm:leading-6 bg-white w-full"
              placeholder="Signature For Background Check Release"
            />
            <input
              type="text"
              name="price"
              id="price"
              className="block rounded-full border-0 py-1.5 pl-7 pr-20 text-[14px] text-[#5E5E6F] placeholder:text-[#5E5E6F] sm:text-sm sm:leading-6 bg-white w-full"
              placeholder="Signature For Disclosure"
            />
            <button
              type="button"
              className="rounded-3xl bg-[#7070FF] flex items-center text-[16px] font-medium text-white h-[45px] py-[10px] px-[60px] leading-6"
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
