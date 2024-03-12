"use client";

import {
  Award,
  Breifcase,
  DocumentMagnify,
  DocumentsIcon,
  DocumentsMinus,
  Settings,
} from "@/svgs/icons";
import React, { useState } from "react";
import Overview from "../Overview/Overview";
import Credentials from "../Credentials/Credentials";
import Education from "../Education/Education";
import Experience from "../Experience/Experience";
import Skills from "../Skills/Skills";
import Preferences from "../Preferences.jsx/Preferences";
import { EducationIcon } from "../../svgs/EducationIcon";
import Documents from "../Documents/Documents";
import { tabIconTypes } from "@/utils/data";

const Home = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const tabData = [
    {
      id: "overview",
      label: "Overview",
      component: <Overview />,
      icon: <DocumentMagnify className="w-5 h-5" aria-hidden="true" />,
    },
    {
      id: "credentials",
      label: "Credentials",
      component: <Credentials />,
      icon: <DocumentsMinus className="w-5 h-5" aria-hidden="true" />,
    },
    {
      id: "education",
      label: "Education",
      component: <Education />,
      icon: <EducationIcon className="w-5 h-5" aria-hidden="true" />,
    },
    {
      id: "experience",
      label: "Experience",
      component: <Experience />,
      icon: <Breifcase className="w-5 h-5" aria-hidden="true" />,
    },
    {
      id: "documents",
      label: "Documents",
      component: <Documents />,
      icon: <DocumentsIcon className="w-5 h-5" aria-hidden="true" />,
    },
    {
      id: "skills",
      label: "Skills",
      component: <Skills />,
      icon: <Award className="w-5 h-5" aria-hidden="true" />,
    },
    {
      id: "preferences",
      label: "Preferences",
      component: <Preferences />,
      icon: <Settings className="w-5 h-5" aria-hidden="true" />,
    },
  ];

  const renderTabs = () => {
    return tabData.map((tab) => {
      // const ComponentIcon = tab.icon;
      return (
        <li
          key={tab.id}
          className="flex items-center w-full py-4 focus-within:z-10"
        >
          <a
            onClick={() => handleTabClick(tab.id)}
            href="#"
            className={`flex items-center justify-center w-full border-r text-body hover:text-primary-default rounded-s-2xl p-2 ${
              activeTab === tab.id ? "text-primary-default" : "text-body"
            }`}
          >
            <button type="button" className="mr-1">
              {tabIconTypes[tab.id]}
            </button>
            <p lassname="text-slate-500 font-medium">{tab.label}</p>
          </a>
        </li>
      );
    });
  };

  const renderTabContent = () => {
    const activeTabComponent = tabData?.find(
      (tab) => tab.id === activeTab
    )?.component;

    return <div className="tab-content">{activeTabComponent}</div>;
  };

  return (
    <div className="w-[calc(100%-3rem)] md:w-[calc(100%-19.5rem)] lg:w-[calc(100%-40rem)] flex flex-col justify-between sm:auto relative">
      <div className="bg-white rounded-2xl">
        <div className="sm:hidden">
          <select
            id="tabs"
            className=" border text-body text-sm block w-full p-2.5 rounded-xl"
          >
            <option>Overview</option>
            <option>Credentials</option>
            <option>Education</option>
            <option>Experience</option>
            <option>Documents</option>
            <option>Skills</option>
            <option>Preferences</option>
          </select>
        </div>
        <div>
          <ul className="text-sm font-medium text-center text-gray-500 sm:flex overflow-hidden hidden">
            {renderTabs()}
          </ul>
        </div>
      </div>
      <div>{renderTabContent()}</div>
    </div>
  );
};

export default Home;
