import React, { useState, useEffect } from "react";
import { Typography, Button, TextField } from "@mui/material";
import WalletInit from "./WalletInit";
import RegisterNode from "./RegisterNode";
import CreateMinipool from "./CreateMinipool";

function SetupTab() {
  const [activeTab, setActiveTab] = useState<string>();

  const handleActiveTab = (tab: string) => {
    setActiveTab(tab);
  };
  useEffect(() => {
    setActiveTab("WalletInit");
  }, []);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 3fr",
        height: "100vh",
      }}
    >
      <div className="menu">
        <div
          className={`menu-item ${
            activeTab === "WalletInit" ? "selected" : ""
          }`}
          onClick={() => handleActiveTab("WalletInit")}
        >
          Init wallet
        </div>
        <div
          className={`menu-item ${
            activeTab === "RegisterNode" ? "selected" : ""
          }`}
          onClick={() => handleActiveTab("RegisterNode")}
        >
          Register node
        </div>
        <div
          className={`menu-item ${
            activeTab === "CreateMinipool" ? "selected" : ""
          }`}
          onClick={() => handleActiveTab("CreateMinipool")}
        >
          Create minipool
        </div>
      </div>
      <div className="detail">
        {activeTab === "WalletInit" && <WalletInit />}
        {activeTab === "RegisterNode" && <RegisterNode />}
        {activeTab === "CreateMinipool" && <CreateMinipool />}
      </div>
    </div>
  );
}

export default SetupTab;
