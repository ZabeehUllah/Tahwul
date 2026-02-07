import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

import Sidebar from "../ui/sidebar/sidebar.component";
import Topbar from "../ui/topbar/topbar.component";
import layoutStyles from "./layout.styles";

export const Layout: React.FC = () => {
  return (
    <Box sx={layoutStyles.layoutWrapper}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <Box component="main" sx={layoutStyles.mainContent}>
        {/* Topbar */}
        <Topbar />

        {/* Outlet content */}
        <Box sx={layoutStyles.outletContent}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};
