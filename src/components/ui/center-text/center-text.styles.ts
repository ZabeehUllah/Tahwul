import type { SxProps } from "@mui/material";

const centerText: SxProps = {
  position: "absolute",
  top: "60%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  textAlign: "center",
};

const percentage: SxProps = {
  fontWeight: 700,
  color: "#1a237e",
};

export default {
  centerText,
  percentage,
};
