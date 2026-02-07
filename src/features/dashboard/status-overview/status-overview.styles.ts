import type { SxProps } from "@mui/material";

const card: SxProps = {
  borderRadius: 4,
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  border: "1px solid #E0E8ED",
  transition: "all 0.3s",
  "&:hover": {
    boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
  },
};

const cardContent: SxProps = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  p: 2,
};

const value: SxProps = {
  color: "#1D3557",
  fontWeight: 700,
};

const subText: SxProps = {
  fontSize: 13,
  color: "#8597A8",
};

const iconWrapper: SxProps = {
  pt: 0.5,
};

export default {
  card,
  cardContent,
  value,
  subText,
  iconWrapper,
};
