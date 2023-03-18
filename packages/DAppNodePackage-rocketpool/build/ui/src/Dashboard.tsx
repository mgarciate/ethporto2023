import React, { useState, useEffect } from "react";
import { ButtonGroup, Button } from "@mui/material";
import InfoTab from "./components/Info/InfoTab";
import SetupTab from "./components/Setup/SetupTab";

function App() {
  const [activeTab, setActiveTab] = useState("Setup");

  useEffect(() => {
    // This code will run when the component mounts
    // You can use it to fetch data or set up any other initial state
  }, []);

  const handleTabClick = (tab: any) => {
    setActiveTab(tab);
  };

  return (
    <div className="App">
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
        sx={{
          // Align center horizontally
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button variant="outlined" onClick={() => handleTabClick("Setup")}>
          Setup
        </Button>
        <Button variant="outlined" onClick={() => handleTabClick("Rewards")}>
          Rewards
        </Button>
        <Button variant="outlined" onClick={() => handleTabClick("Info")}>
          Info
        </Button>
      </ButtonGroup>
      <div className="content">
        {activeTab === "Setup" && <SetupTab />}
        {activeTab === "Rewards" && <RewardsTab />}
        {activeTab === "Info" && <InfoTab />}
      </div>
    </div>
  );
}

function RewardsTab() {
  return (
    <div>
      <h2>Rewards</h2>
      <p>This is the Rewards tab</p>
    </div>
  );
}

export default App;
