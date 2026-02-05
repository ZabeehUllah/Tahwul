import type { SxProps } from "@mui/material";

const drawerWidth = 256;

const drawer: SxProps = {
  width: drawerWidth,
  flexShrink: 0,
};

const paper: SxProps = {
  width: drawerWidth,
  bgcolor: "#1D3557",
  color: "white",
  display: "flex",
  flexDirection: "column",
  height: "100vh",
  p: 2,
  boxSizing: "border-box",
};

const logo: SxProps = {
  fontWeight: "bold",
  fontSize: "1.2rem",
  mb: 4,
};

const menu: SxProps = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: 1,
};

const menuItem: SxProps = {
  color: "inherit",
  "&.active": {
    bgcolor: "rgba(29,53,87,0.8)",
    fontWeight: 600,
  },
  "&:hover": {
    bgcolor: "rgba(29,53,87,0.7)",
  },
};

const icon: SxProps = {
  color: "inherit",
  minWidth: "40px",
};

const footer: SxProps = {
  mt: "auto",
  opacity: 0.7,
  fontSize: "0.875rem",
};

export default { drawer, paper, logo, menu, menuItem, icon, footer };
