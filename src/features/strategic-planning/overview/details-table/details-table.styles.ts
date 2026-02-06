import type { SxProps } from "@mui/material";

const container: SxProps = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  margin: "auto",
  padding: 2,
  boxSizing: "border-box",
  border: "1px solid #E0E8ED",
  borderRadius: "10px",
  backgroundColor: "#FFFFFF",
  position: "relative",
};

const verticalLine: SxProps = {
  position: "absolute",
  left: `calc(180px + 16px + 8px)`,
  top: 0,
  bottom: 0,
  width: "1px",
  backgroundColor: "#E0E8ED",
  zIndex: 1,
};

const row: SxProps = {
  display: "flex",
  gap: 2,
  paddingY: 1,
};

const labelBox: SxProps = {
  minWidth: 180,
  maxWidth: 180,
  bgcolor: "#F5F8FB",
  borderRadius: 2,
  padding: "12px 16px",
  display: "flex",
  alignItems: "center",
  boxSizing: "border-box",
  position: "relative",
  zIndex: 2,
};

const labelText: SxProps = {
  fontWeight: 400,
  fontSize: "1rem",
  color: "#1D3557",
};

const contentBox: SxProps = {
  flex: 1,
  bgcolor: "#F5F8FB",
  borderRadius: 2,
  padding: "12px 16px",
  whiteSpace: "pre-wrap",
  fontSize: "1rem",
  color: "#1D3557",
  fontWeight: 400,
  lineHeight: 1.5,
  boxSizing: "border-box",
  position: "relative",
  zIndex: 2,
};

export default {
  container,
  verticalLine,
  row,
  labelBox,
  labelText,
  contentBox,
};
