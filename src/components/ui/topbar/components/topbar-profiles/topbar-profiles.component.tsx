import { useState, type MouseEvent } from "react";
import { Box, Avatar, Typography, Menu, MenuItem } from "@mui/material";

import styles from "./topbar-profiles.styles";
import CaretDown from "../../../../../assets/caretDownIcon";

export default function TopbarProfile() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: MouseEvent<HTMLElement>) =>
    setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  return (
    <>
      <Box onClick={handleMenuOpen} sx={styles.profileBoxSx}>
        <Avatar src="https://i.pravatar.cc/40" sx={styles.avatarSx} />
        <Typography sx={styles.profileNameSx}>Mohamed</Typography>
        <CaretDown />
      </Box>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        PaperProps={{
          sx: {
            ...styles.menuPaperSx,
            minWidth: anchorEl
              ? anchorEl.offsetWidth
              : (styles.menuPaperSx.minWidth as number),
          },
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
        <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
      </Menu>
    </>
  );
}
