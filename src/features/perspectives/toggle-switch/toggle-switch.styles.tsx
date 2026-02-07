import type { SxProps } from "@mui/material";
import { ToggleTabs, type ToggleTabValue } from "./toggle-componen.constants";

const toggleSwitchWrapper: SxProps = {
  borderRadius: "8px",
  height: "40px",
  width: "250px",
  padding: "5px",
  position: "relative",
  display: "flex",
  overflow: "hidden",
  backgroundColor: "#c8cdd1",
  "@media (max-width: 600px)": {
    width: "200px",
  }
};

const toggleSwitchIndicator = (activeTab: ToggleTabValue): SxProps => ({
  width: "125px",
  height: "40px",
  borderRadius: "8px",
  background: "#ffffff",
  position: "absolute",
  transition: "transform 0.3s ease",
  transform: `translateX(${activeTab === ToggleTabs.OVERVIEW ? 0 : "125px"})`,
  zIndex: 1,
  boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
  "@media (max-width: 600px)": {
    width: "100px",
    transform: `translateX(${activeTab === ToggleTabs.OVERVIEW ? 0 : "100px"})`,
  }
});

const buttonStyles = (isActive: boolean): SxProps => ({
  width: "125px",
  height: "40px",
  fontWeight: "400",
  transition: "all 0.2s 0.1s ease",
  textTransform: "none",
  fontSize: "0.875rem",
  position: "relative",
  zIndex: 2,
  backgroundColor: "transparent",
  color: isActive ? "#000000" : "#8597A8",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "&:hover": {
    backgroundColor: "transparent",
  },
  "& .MuiButton-label": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  "@media (max-width: 600px)": {
    width: "100px",
  }
});

export default { toggleSwitchWrapper, toggleSwitchIndicator, buttonStyles };