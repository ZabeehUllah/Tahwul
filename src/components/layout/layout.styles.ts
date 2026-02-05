import type { SxProps } from "@mui/material";

const layoutWrapper: SxProps = {
  display: "flex",
  minHeight: "100vh",
};

const mainContent: SxProps = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  bgcolor: "background.default",
};

const outletContent: SxProps = {
  flex: 1,
  p: 3,
  overflowY: "auto",
};

export default { layoutWrapper, mainContent, outletContent };
