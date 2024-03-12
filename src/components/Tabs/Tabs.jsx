// Install required packages: npm install react react-dom tailwindcss

// App.js
import React, { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const tabData = [
    { id: "overview", label: "Overview" },
    { id: "credentials", label: "Credentials" },
    { id: "education", label: "Education" },
    { id: "experience", label: "Experience" },
    { id: "documents", label: "Documents" },
    { id: "skills", label: "Skills" },
    { id: "preferences", label: "Preferences" },
  ];

  const renderTabs = () => {
    return tabData.map((tab) => (
      <li
        key={tab.id}
        className="flex items-center w-full py-6 focus-within:z-10"
      >
        <button
          onClick={() => handleTabClick(tab.id)}
          className={`flex items-center justify-center w-full border-r text-body hover:text-primary-default ${
            activeTab === tab.id ? "text-primary-default" : ""
          }`}
        >
          {tab.label}
        </button>
      </li>
    ));
  };

  const renderTabContent = () => {
    return tabData.map((tab) => (
      <div
        key={tab.id}
        id={`${tab.id}-tab`}
        className={`tab-content ${activeTab === tab.id ? "block" : "hidden"}`}
      >
        <p>{`${tab.label} Content Goes Here`}</p>
      </div>
    ));
  };

  return (
    <div className="bg-white rounded-2xl p-4">
      <div className="sm:hidden"></div>
      <div>
        <ul className="text-sm font-medium text-center text-gray-500 sm:flex overflow-hidden hidden">
          {renderTabs()}
        </ul>
      </div>
      {renderTabContent()}
    </div>
  );
};

export default Tabs;
