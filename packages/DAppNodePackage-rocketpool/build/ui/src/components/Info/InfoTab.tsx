import React, { useState, useEffect } from "react";
import { Typography, Button, TextField } from "@mui/material";

function InfoTab() {
  useEffect(() => {
    // This code will run when the component mounts
    // You can use it to fetch data or set up any other initial state
  }, []);

  return (
    <div>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </div>
  );
}

export default InfoTab;
