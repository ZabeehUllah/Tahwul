import type { SxProps } from "@mui/material";

const wrapper: SxProps = {
  margin: "0 20px",
  padding: "10px 0",
  borderRadius: "10px",
  border: "1px solid #E0E8ED",
};

const headerWrapper: SxProps = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 1,
  padding: "10px 20px",
};

const nameWrapper: SxProps = {
  display: "flex",
  alignItems: "center",
  gap: 1,
  minWidth: 0,
};

const avatar: SxProps = {
  width: 32,
  height: 32,
  borderRadius: "50%",
  backgroundColor: "#E6EEF5",
  color: "#1D3557",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: 700,
  fontSize: "14px",
  flexShrink: 0,
};

const nameText: SxProps = {
  fontSize: "14px",
  fontWeight: 700,
  color: "#1D3557",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  minWidth: 0,
};

const dateText: SxProps = {
  fontSize: "14px",
  fontWeight: 400,
  color: "#8597A8",
  whiteSpace: "nowrap",
  flexShrink: 0,
};

const commentText: SxProps = {
  padding: "5px 20px",
  fontSize: "14px",
  fontWeight: 400,
  color: "#1D3557",
};

export default {
  wrapper,
  headerWrapper,
  nameWrapper,
  avatar,
  nameText,
  dateText,
  commentText,
}