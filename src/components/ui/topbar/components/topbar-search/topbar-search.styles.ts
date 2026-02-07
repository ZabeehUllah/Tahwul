import type { SxProps } from "@mui/material";

const searchPaperSx: SxProps = {
  display: "flex",
  alignItems: "center",
  width: 320,
  px: 2,
  py: 0.5,
  borderRadius: 2,
  bgcolor: "#f3f4f6",
  boxShadow: "none",
  border: "1px solid #E0E8ED",
};

const searchIconSx: SxProps = {
  color: "#9ca3af",
  mr: 1,
};

const searchInputSx: SxProps = {
  flex: 1,
  fontSize: 14,
};

export default {
  searchPaperSx,
  searchIconSx,
  searchInputSx,
};
