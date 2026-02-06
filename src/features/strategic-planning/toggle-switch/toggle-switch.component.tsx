import React, { useState } from "react";
import { Box, Button } from "@mui/material";

import styles from "./toggle-switch.styles";
import { ToggleTabs, type ToggleTabValue } from "./toggle-componen.constants";

interface ToggleComponentProps {
  activeTab: ToggleTabValue,
  onTabChange: (tab: ToggleTabValue) => void,
}

const ToggleComponent: React.FC<ToggleComponentProps> = ({ activeTab, onTabChange }) => {

  return (
    <Box>
      <Box sx={styles.toggleSwitchWrapper}>
        <Box sx={styles.toggleSwitchIndicator(activeTab)} />
        <Button
          disableRipple
          variant="text"
          sx={styles.buttonStyles(activeTab === ToggleTabs.OVERVIEW)}
          onClick={() => onTabChange(ToggleTabs.OVERVIEW)}
        >
          Overview
        </Button>
        <Button
          disableRipple
          variant="text"
          sx={styles.buttonStyles(activeTab === ToggleTabs.EVIDENCE)}
          onClick={() => onTabChange(ToggleTabs.EVIDENCE)}
        >
          Evidence
        </Button>
      </Box>
    </Box>
  );
};

export default ToggleComponent;
