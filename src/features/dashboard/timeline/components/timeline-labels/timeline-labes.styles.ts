import type { SxProps } from "@mui/material";

const labelsGrid = (stepsLength: number): SxProps => ({
  display: "grid",
  gridTemplateColumns: `repeat(${stepsLength}, 1fr)`,
});

const labelText = (isMobile: boolean): SxProps => ({
  textAlign: "center",
  fontWeight: 500,
  color: "#1D3557",
  fontSize: isMobile ? 8 : 14,
});

export default {
  labelsGrid,
  labelText,
};
