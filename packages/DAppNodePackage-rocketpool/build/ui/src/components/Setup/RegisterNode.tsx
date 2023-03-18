import React, { useState, useEffect } from "react";
import { Typography, Button, TextField } from "@mui/material";
import CopyToClipboardButton from "../Buttons/CopyToClipboardButton";
import { AppService } from "../../services/AppService";

function RegisterNode() {
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
      <p>You must have enought ETH and RPL in order to Register your node</p>
      <p>You need at least 16.2 ETH and 66 RPL at the current price</p>
      <p>
        Transfer tokens to your address:{" "}
        <strong>0xc94411ab7055cac2f268d1bdeed8c450ca6dfc5d</strong>
      </p>
      <p>Your balance is 16.2 ETH and 66 RPL</p>
      <Button variant="contained" onClick={() => handleWalletInitClick()}>
        {" "}
        Register node
      </Button>
    </div>
  );
}

export default RegisterNode;
