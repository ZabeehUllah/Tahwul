import type { SxProps, Theme } from "@mui/material";

const container: SxProps<Theme> = {
  backgroundColor: "#fff",
  border: "1px solid #E0E8ED",
  borderRadius: "10px",
  padding: "20px",
};

const title: SxProps<Theme> = {
  fontSize: "1rem",
  fontWeight: 700,
  color: "#1D3557",
  marginBottom: "15px",
};

export default {
  container,
  title,
};
