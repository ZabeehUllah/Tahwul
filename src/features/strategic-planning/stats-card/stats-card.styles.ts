import type { SxProps } from "@mui/material";

const statsCardWrapper: SxProps = {
  display: "flex",
  flexGrow: 1,
  alignItems: "center",
  gap: 3,
  backgroundColor: "#FFFFFF",
  border: "1px solid #E0E8ED",
  borderRadius: "10px",
  padding: "20px",
};

const value: SxProps = {
  fontSize: "1.5rem",
  fontWeight: "700",
  color: "#1D3557",
};

const label: SxProps = {
  fontSize: "0.875rem",
  fontWeight: "400",
  color: "#8597A8",
};

export default { statsCardWrapper, value, label };
