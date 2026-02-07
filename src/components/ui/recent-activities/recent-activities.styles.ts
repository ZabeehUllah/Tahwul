import type { SxProps } from "@mui/material";

const wrapper: SxProps = {
  backgroundColor: "#ffffff",
  border: "1px solid #E0E8ED",
  borderRadius: "10px",
  padding: "20px",
  flex: 1
};

const title: SxProps = {
  fontSize: "1rem",
  fontWeight: 700,
  color: "#1D3557",
};

const listWrapper: SxProps = {
  display: "flex",
  flexDirection: "column",
  gap: 2,
  marginTop: "20px",
};

const divider: SxProps = {
  marginBottom: "8px",
};

const itemWrapper: SxProps = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  marginTop: "20px",
};

const activityWrapper: SxProps = {
  display: "flex",
  alignItems: "flex-start",
  gap: 1.5,
  maxWidth: "60%",
};

const bullet: SxProps = {
  width: 8,
  height: 8,
  borderRadius: "50%",
  backgroundColor: "#DB1F26",
  marginTop: "6px",
  flexShrink: 0,
};

const activityText: SxProps = {
  fontSize: "0.9rem",
  fontWeight: 500,
  color: "#1D3557",
};

const timestampText: SxProps = {
  fontSize: "0.8rem",
  color: "#8597A8",
};

export default {
  wrapper,
  title,
  listWrapper,
  divider,
  itemWrapper,
  activityWrapper,
  bullet,
  activityText,
  timestampText,
};
