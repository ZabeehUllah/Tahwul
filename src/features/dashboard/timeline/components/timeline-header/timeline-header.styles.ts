import type { SxProps } from "@mui/material";

const header: SxProps = {
  display: "flex",
  justifyContent: "space-between",
  mb: 2,
};

const title: SxProps = {
  fontWeight: 700,
  color: "#1D3557",
};

const yearSelector: SxProps = {
  border: "1px solid #E0E8ED",
  borderRadius: 2,
  px: 2,
  py: 1,
  fontSize: 14,
  fontWeight: 600,
  color: "#1D3557",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  gap: 1,
};

const menuPaper: SxProps = {
  borderRadius: 2,
  mt: 1,
  minWidth: 120,
  overflow: "hidden",
};

export default {
  header,
  title,
  yearSelector,
  menuPaper,
};
