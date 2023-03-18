import React, { useState, useEffect } from "react";
import { Typography, Button, TextField } from "@mui/material";
import CopyToClipboardButton from "../Buttons/CopyToClipboardButton";
import { AppService } from "../../services/AppService";

function CreateMinipool() {
  const [mnemonic, setMnemonic] = useState<string>();
  const [mnemonicEntered, setMnemonicEntered] = useState<string>();
  const appService = new AppService();
  useEffect(() => {
    // This code will run when the component mounts
    // You can use it to fetch data or set up any other initial state
  }, []);

  const handleWalletInitClick = async () => {
    var seed = await appService.walletInit();
    setMnemonic(seed);
  };

  const handleWalletRecoverClick = async () => {
    var seed = await appService.walletRecover(mnemonic ?? "");
    console.log("continue");
  };

  return (
    <div>
      <h3>Create minipool</h3>
      <p>Approve RPL for your address</p>
      <Button
        disabled={true}
        variant="contained"
        onClick={() => handleWalletInitClick()}
      >
        {" "}
        Approve RPL
      </Button>
      <p>Stake 66 RPL for one minipool</p>
      <Button
        disabled={true}
        variant="contained"
        onClick={() => handleWalletInitClick()}
      >
        {" "}
        Stake 66 RPL
      </Button>
      <p>
        Deposit 16 ETH to create the minipool (the smothing-pool will be
        configured automatically)
      </p>
      <Button variant="contained" onClick={() => handleWalletInitClick()}>
        {" "}
        Deposit 16 ETH
      </Button>
    </div>
  );
}

export default CreateMinipool;
