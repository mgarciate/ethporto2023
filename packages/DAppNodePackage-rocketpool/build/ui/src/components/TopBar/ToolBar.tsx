import Toolbar from "@mui/material/Toolbar";
import { Box, Chip } from "@mui/material";

import { Network } from "../../types/Network";

export default function ToolBar({
  network,
}: {
  network?: Network;
}): JSX.Element {
  return (
    <Toolbar>
      <div
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          lineHeight: "50px",
        }}
      >
        <img src="/assets/dappnode_logo.png" alt="logo" height={50} />
        {/* <HeaderTypography
          sx={{ flexGrow: 1, fontWeight: "bold" }}
          text={"Staking Brain"}
        /> */}
        {network && (
          <>
            &nbsp;&nbsp;
            <Chip color="secondary" label={network} />
          </>
        )}
      </div>
      <div style={{ marginLeft: "auto" }}>
        <Box
          sx={{
            padding: 0.5,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        ></Box>
      </div>
    </Toolbar>
  );
}
