import type { SxProps } from "@mui/material";

const legendWrapper: SxProps = {
  display: "flex",
  gap: 2,
  flexWrap: "wrap",
};

const legendItem: SxProps = {
  display: "flex",
  alignItems: "center",
  gap: 0.5,
};

const legendDot: SxProps = {
  width: 10,
  height: 10,
  borderRadius: "50%",
};


export default {
  legendWrapper,
  legendItem,
  legendDot,
};
