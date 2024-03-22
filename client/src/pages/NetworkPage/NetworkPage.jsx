import React, { useState } from "react";
import { Networking } from "./components/networking";
import { Onboarding } from "./components/onboarding";

import company from "./assets/company.png";
import onboarding from "./assets/onboarding.png";

export const NetworkPage = () => {
  const [activeTab, setActiveTab] = useState("Networking");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="network-container">
      <div className="network-tab">
        <button
          className={`tab-button ${activeTab === "Onboarding" ? "active" : ""}`}
          onClick={() => handleTabClick("Onboarding")}>
          <img src={company} />
          Company
        </button>
        <button
          className={`tab-button ${activeTab === "Networking" ? "active" : ""}`}
          onClick={() => handleTabClick("Networking")}>
          <img src={onboarding} />
          Networking
        </button>
      </div>
      {activeTab === "Onboarding" && <Onboarding />}
      {activeTab === "Networking" && <Networking />}
    </div>
  );
};
