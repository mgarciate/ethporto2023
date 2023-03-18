import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import TopBar from "./components/TopBar/TopBar";
import Dashboard from "./Dashboard";

import { Network } from "./types/Network";
import { AppService } from "./services/AppService";

function App() {
  const [network, setNetwork] = useState<Network>();

  const appService = new AppService();

  useEffect(() => {
    appService.getNetwork().then((network) => {
      setNetwork(network as Network);
    });
    appService.getWalletStatus().then((walletStatus) => {
      console.log(walletStatus);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <TopBar network={network} />
        <Dashboard />
      </header>
    </div>
  );
}

export default App;
