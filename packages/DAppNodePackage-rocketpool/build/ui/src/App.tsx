import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import TopBar from "./components/TopBar/TopBar";
import Dashboard from "./Dashboard";

import { Network } from "./types/Network";
import { AppService } from "./services/AppService";
import { WalletStatus } from "./types/WalletStatus";
import { NodeStatus } from "./types/NodeStatus";

function App() {
  const [network, setNetwork] = useState<Network>();
  const [walletStatus, setWalletStatus] = useState<WalletStatus>();
  const [nodeStatus, setNodeStatus] = useState<NodeStatus>();

  const appService = new AppService();

  useEffect(() => {
    appService.getEnvironment("NETWORK").then((network) => {
      setNetwork(network as Network);
    });
    async function fetchData() {
      var walletStatus = await appService.getWalletStatus();
      setWalletStatus(walletStatus);
      var nodeStatus = await appService.getNodeStatus();
      setNodeStatus(nodeStatus);
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <TopBar network={network} />
        <Dashboard walletStatus={walletStatus} nodeStatus={nodeStatus} />
      </header>
    </div>
  );
}

export default App;
