import type { SxProps } from "@mui/material";

const subsection: SxProps = {
  display: "flex",
  flexDirection: "column",
  flex: 1,
  gap: 1,
  borderRadius: 4,
  border: "1px solid #E0E8ED",
  py: 0.25,
};

const subsectionTitle: SxProps = {
  color: "#1D3557",
  fontWeight: 600,
  fontSize: 12,
  textAlign: "center",
  px: 0.5,
};

const itemsWrapper: SxProps = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
  gap: 1,
  p: 0.5,
};

export default {
  subsection,
  subsectionTitle,
  itemsWrapper,
};
