import React from "react";
import { NavLink } from "react-router-dom";
import { Box, Drawer, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";

import paths from "../../router/router.paths";
import sidebarStyles from "./sidebar.styles";

const menuItems = [
  { name: "Dashboard", path: paths.DASHBOARD, icon: <DashboardIcon /> },
  { name: "Strategic Planning", path: paths.STRATEGIC_PLANNING, icon: <AutoGraphIcon /> },
  { name: "Tracking", path: paths.TRACKING, icon: <TrackChangesIcon /> },
  { name: "Users", path: "#", icon: <PeopleIcon /> },
];

const Sidebar: React.FC = () => {
  return (
    <Drawer
      variant="permanent"
      sx={sidebarStyles.drawer}
      PaperProps={{ sx: sidebarStyles.paper }}
    >
      {/* Logo / Brand */}
      <Box sx={sidebarStyles.logo}>
        Tahwul
      </Box>

      {/* Menu */}
      <List sx={sidebarStyles.menu}>
        {menuItems.map((item) => (
          <ListItemButton
            key={item.name}
            component={NavLink}
            to={item.path}
            sx={sidebarStyles.menuItem}
          >
            <ListItemIcon sx={sidebarStyles.icon}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItemButton>
        ))}
      </List>

      {/* Footer */}
      <Box sx={sidebarStyles.footer}>v1.0.0</Box>
    </Drawer>
  );
};

export default Sidebar;
