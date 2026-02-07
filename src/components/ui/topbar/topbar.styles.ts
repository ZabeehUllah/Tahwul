import type { SxProps } from "@mui/material";

const appBarSx: SxProps = {
  bgcolor: "#ffffff",
  color: "#111827",
};

const toolbarSx: SxProps = {
  justifyContent: "space-between",
};

const actionsBoxSx: SxProps = {
  display: "flex",
  alignItems: "center",
  gap: 2,
};

export default {
  appBarSx,
  toolbarSx,
  actionsBoxSx,
};
