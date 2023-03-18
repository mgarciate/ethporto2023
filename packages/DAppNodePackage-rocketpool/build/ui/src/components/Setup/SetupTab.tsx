import React, { useState, useEffect } from "react";
import { Typography, Button, TextField } from "@mui/material";
import WalletInit from "./WalletInit";

function SetupTab() {
  useEffect(() => {
    // This code will run when the component mounts
    // You can use it to fetch data or set up any other initial state
  }, []);

  return (
    <div>
      <WalletInit />
    </div>
  );
}

export default SetupTab;
