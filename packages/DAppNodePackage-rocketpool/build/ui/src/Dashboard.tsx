import React, { useState, useEffect } from "react";
import { ButtonGroup, Button } from "@mui/material";
import InfoTab from "./components/Info/InfoTab";
import SetupTab from "./components/Setup/SetupTab";
import { WalletStatus } from "./types/WalletStatus";
import { NodeStatus } from "./types/NodeStatus";

interface DashboardProps {
  walletStatus?: WalletStatus;
  nodeStatus?: NodeStatus;
}

const Dashboard: React.FC<DashboardProps> = ({
  walletStatus,
  nodeStatus,
}): JSX.Element => {
  const [activeTab, setActiveTab] = useState("Setup");

  useEffect(() => {
    // This code will run when the component mounts
    // You can use it to fetch data or set up any other initial state
  }, []);

  console.log(walletStatus?.accountAddress);
  console.log(nodeStatus?.accountAddress);

  const handleTabClick = (tab: any) => {
    setActiveTab(tab);
  };
  if (walletStatus) {
    return (
      <div className="App">
        {walletStatus.walletInitialized == false && (
          <a href="http://my.dappnode/#/installer/%2Fipfs%2FQmb3hrC9ZLBYLRD1T36LRJ9UCQDXLkemcP48BabNDKZMzc">
            Install Rocket Pool package
          </a>
        )}
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
  } else {
    return <></>;
  }
};

function RewardsTab() {
  return (
    <div>
      <h2>Rewards</h2>
      <p>This is the Rewards tab</p>
    </div>
  );
}

export default Dashboard;
