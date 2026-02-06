import type { SxProps } from "@mui/material";

const layoutWrapper: SxProps = {
  display: "flex",
  minHeight: "100vh",
  overflow: "auto",
};

const mainContent: SxProps = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  bgcolor: "background.default",
  overflowY: "auto",
};

const outletContent: SxProps = {
  backgroundColor: "#E0E8ED",
  flex: 1,
  p: 3,
  overflowY: "auto",
  backgroundColor: "#f5f8fa",
};

export default { layoutWrapper, mainContent, outletContent };
