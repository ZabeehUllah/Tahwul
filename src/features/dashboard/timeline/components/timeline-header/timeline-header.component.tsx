import { useState, type MouseEvent } from "react";
import { Box, Typography, Menu, MenuItem } from "@mui/material";

import CaretDown from "../../../../../assets/caretDownIcon";
import styles from "./timeline-header.styles";

const years = [2026, 2025, 2024, 2023];

export default function TimelineHeader() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedYear, setSelectedYear] = useState<number>(2026);

  const handleOpen = (event: MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleSelectYear = (year: number) => {
    setSelectedYear(year);
    handleClose();
  };

  return (
    <Box sx={styles.header}>
      <Typography sx={styles.title}>Project Timeline</Typography>

      <Box sx={styles.yearSelector} onClick={handleOpen}>
        {selectedYear} <CaretDown />
      </Box>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          sx: {
            ...styles.menuPaper,
            minWidth: anchorEl?.offsetWidth ?? 120,
          },
        }}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
      >
        {years.map((year) => (
          <MenuItem
            key={year}
            selected={year === selectedYear}
            onClick={() => handleSelectYear(year)}
          >
            {year}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
