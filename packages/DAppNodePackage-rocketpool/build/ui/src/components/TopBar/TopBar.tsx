import { AppBar } from "@mui/material";
import ToolBar from "./ToolBar";
import { Network } from "../../types/Network";

export default function TopBar({
  network,
}: {
  network?: Network;
}): JSX.Element {
  return (
    <AppBar position="static">
      <ToolBar network={network} />
    </AppBar>
  );
}
