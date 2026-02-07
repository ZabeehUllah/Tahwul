import type { SxProps } from "@mui/material";

const drawerWidth = 256;
const drawerCollapsedWidth = 72;

const drawer = (isCollapsed: boolean): SxProps => ({
  width: isCollapsed ? drawerCollapsedWidth : drawerWidth,
  flexShrink: 0,
  transition: "width 300ms ease-in-out",
});

const paper = (isCollapsed: boolean): SxProps => ({
  width: isCollapsed ? drawerCollapsedWidth : drawerWidth,
  bgcolor: "#1D3557",
  color: "white",
  display: "flex",
  flexDirection: "column",
  height: "100vh",
  px: isCollapsed ? 1 : 2,
  py: 2,
  boxSizing: "border-box",
  transition: "width 300ms ease-in-out",
  overflow: "initial",
});

const logoContainer: SxProps = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  mb: 4,
  position: "relative",
};

const logo = (isCollapsed: boolean): SxProps => ({
  paddingLeft: isCollapsed ? 0 : 2,
  fontWeight: "bold",
  fontSize: "1.2rem",
  transition: "all 200ms ease-in-out",
  display: "flex",
  alignItems: "center",
  height: 40,
  "&>img": {
    height: isCollapsed ? 20 : 40,
  },
});

const menu: SxProps = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: 1,
  marginTop: "20px",
};

const menuItem: SxProps = {
  color: "#7B9FC3",
  flex: "unset",
  "&.active": {
    bgcolor: "rgba(29,53,87,0.8)",
    fontWeight: 600,
    color: "#fff",
  },
  "&:hover": {
    bgcolor: "rgba(29,53,87,0.7)",
    color: "#fff",
  },
};

const icon: SxProps = {
  color: "currentColor",
  minWidth: "40px",
};

const footer = (isCollapsed: boolean): SxProps => ({
  mt: "auto",
  opacity: isCollapsed ? 0 : 0.7,
  fontSize: "0.875rem",
  transition: "opacity 200ms ease-in-out",
  height: isCollapsed ? 0 : "auto",
  overflow: "hidden",
});

const toggleButton: SxProps = {
  position: "absolute",
  top: 24,
  right: -16,
  width: 32,
  height: 32,
  borderRadius: "50%",
  bgcolor: "#fff",
  color: "#747A8B",
  zIndex: 1300,
  boxShadow: "0px 0px 2px 0px #0000001A",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "&:hover": {
    bgcolor: "#24446e",
    color: "white",
  },
};

export default {
  drawer,
  paper,
  logoContainer,
  logo,
  menu,
  menuItem,
  icon,
  footer,
  toggleButton,
};
