import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Tooltip,
  useMediaQuery,
} from "@mui/material";

import sidebarStyles from "./sidebar.styles";
import ArrowLeft from "../../../assets/arrowLeftIcon";
import ArrowRight from "../../../assets/arrowRightIcon";
import { menuItems } from "./sidebar.constant";

const Sidebar: React.FC = () => {
  const isTablet = useMediaQuery("(max-width:900px)");
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  useEffect(() => {
    if (isTablet) {
      setIsCollapsed(true);
    }
  }, [isTablet]);

  return (
    <Drawer
      variant="permanent"
      sx={sidebarStyles.drawer(isCollapsed)}
      PaperProps={{ sx: sidebarStyles.paper(isCollapsed) }}
    >
      {!isTablet && (
        <IconButton onClick={toggleSidebar} sx={sidebarStyles.toggleButton}>
          {isCollapsed ? <ArrowRight /> : <ArrowLeft />}
        </IconButton>
      )}

      {/* Logo / Brand */}
      <Box sx={sidebarStyles.logo(isCollapsed)}>
        <img src="./images/logo.svg" alt="Logo" />
      </Box>

      {/* Menu */}
      <List sx={sidebarStyles.menu}>
        {menuItems.map((item) => (
          <Tooltip
            key={item.name}
            title={isCollapsed ? item.name : ""}
            placement="right"
            arrow
          >
            <ListItemButton
              component={NavLink}
              to={item.path}
              sx={sidebarStyles.menuItem}
            >
              <ListItemIcon color="red" sx={sidebarStyles.icon}>
                {item.icon}
              </ListItemIcon>
              {!isCollapsed && <ListItemText primary={item.name} />}
            </ListItemButton>
          </Tooltip>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
