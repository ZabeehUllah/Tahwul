import type { SxProps } from "@mui/material";

const wrapper: SxProps = {
  display: "flex",
  flexDirection: "column",
  gap: 2,
  padding: "20px 10px",
  backgroundColor: "#ffffff",
  border: "1px solid #E0E8ED",
  borderRadius: "10px",
};

const title: SxProps = {
  marginLeft: "20px",
  fontSize: "16px",
  fontWeight: 700,
  color: "#1D3557",
};

const commentsList: SxProps = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
};

const addCommentWrapper: SxProps = {
  display: "flex",
  flexDirection: "column",
  gap: 1,
  padding: "0 20px",
};

const textField: SxProps = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "10px",
    backgroundColor: "#F9FBFC",
  },
};

const button: SxProps = {
  marginLeft: "20px",
  maxWidth: "200px",
  backgroundColor: "#1D3557",
  color: "#ffffff",
  borderRadius: "8px",
  textTransform: "none",
};

export default {
  wrapper,
  title,
  commentsList,
  addCommentWrapper,
  textField,
  button,
};
