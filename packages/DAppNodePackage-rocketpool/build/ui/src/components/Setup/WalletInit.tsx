import React, { useState, useEffect } from "react";
import { Typography, Button, TextField } from "@mui/material";
import CopyToClipboardButton from "../Buttons/CopyToClipboardButton";

function WalletInit() {
  useEffect(() => {
    // This code will run when the component mounts
    // You can use it to fetch data or set up any other initial state
  }, []);

  return (
    <div>
      <h2>Setup</h2>
      <p>Init Wallet</p>
      <Button variant="contained">Init Wallet</Button>
      <CopyToClipboardButton value={"test"} />
    </div>
  );
}

export default WalletInit;
