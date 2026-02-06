import type { SxProps } from "@mui/material";

const planningProgressWrapper: SxProps = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "#FFFFFF",
  borderRadius: "10px",
  padding: "20px",
};

const contentWrapper: SxProps = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "5px",
};

const chipStyles: SxProps = {
  border: "1px solid #E0E8ED",
  borderRadius: "30px",
  display: "flex",
  justifyContent: "center",
  padding: "10px",
  maxWidth: "7.65rem",
};

const chipStylesContent: SxProps = {
  fontSize: "0.75rem",
  color: "#8597A8",
  fontWeight: "500",
};

const textContentPrimary: SxProps = {
  fontSize: "1rem",
  color: "#1D3557",
  fontWeight: "700",
  marginTop: "10px",
};

const textContentSecondary: SxProps = {
  fontSize: "0.875rem",
  color: "#8597A8",
  fontWeight: "400",
};

const circularProgress: SxProps = {
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const circularProgressContent: SxProps = {
    variant: "caption",
    component: "div",
    color: "text.primary",
    fontWeight: "bold",
};

export default {
  planningProgressWrapper,
  contentWrapper,
  chipStyles,
  chipStylesContent,
  textContentPrimary,
  textContentSecondary,
  circularProgress,
  circularProgressContent
};
