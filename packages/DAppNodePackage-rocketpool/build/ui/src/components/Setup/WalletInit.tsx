import React, { useState, useEffect } from "react";
import { Typography, Button, TextField } from "@mui/material";
import CopyToClipboardButton from "../Buttons/CopyToClipboardButton";
import { AppService } from "../../services/AppService";

function WalletInit() {
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
    await appService.walletRecover(mnemonic ?? "");
    console.log("continue");
  };

  return (
    <div>
      <p>
        In order to use Rocket Pool for the first time you need to create a
        wallet clicking on <strong>Init wallet</strong>
      </p>
      <Button
        disabled={mnemonic != undefined}
        variant="contained"
        onClick={() => handleWalletInitClick()}
      >
        {" "}
        Init Wallet
      </Button>
      {mnemonic && (
        <>
          <p>Your mnemonic, keep it safe 👇</p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <p style={{ color: "red" }}>{mnemonic}</p>
            <CopyToClipboardButton value={mnemonic} />
          </div>

          <TextField
            value={mnemonicEntered}
            onChange={(e) => setMnemonicEntered(e.target.value)}
            fullWidth
            label="Copy the mnemonic before continue"
            id="fullWidth"
            multiline
          />

          <p>
            You can backup your wallet and keys at any time{" "}
            <a href="http://my.dappnode/#/packages/rocketpool.public.dappnode.eth/backup">
              http://my.dappnode/#/packages/rocketpool.public.dappnode.eth/backup
            </a>
          </p>
          <Button
            disabled={mnemonic != mnemonicEntered}
            variant="contained"
            onClick={() => handleWalletRecoverClick()}
          >
            Continue
          </Button>
        </>
      )}
    </div>
  );
}

export default WalletInit;
