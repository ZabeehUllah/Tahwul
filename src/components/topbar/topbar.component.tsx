import {
  AppBar,
  Toolbar,
  Box,
  InputBase,
  IconButton,
  Avatar,
  Typography,
  Menu,
  MenuItem,
  Paper,
  Badge,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState, type MouseEvent } from "react";
import NotificationIcon from "../../assets/notificationIcon";
import CaretDown from "../../assets/caretDownIcon";

export default function Topbar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        bgcolor: "#ffffff",
        color: "#111827",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Paper
          component="form"
          sx={{
            display: "flex",
            alignItems: "center",
            width: 320,
            px: 2,
            py: 0.5,
            borderRadius: 2,
            bgcolor: "#f3f4f6",
            boxShadow: "none",
            border: "1px solid #E0E8ED",
          }}
        >
          <SearchIcon sx={{ color: "#9ca3af", mr: 1 }} />
          <InputBase
            placeholder="Search"
            sx={{ flex: 1, fontSize: 14 }}
          />
        </Paper>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <IconButton>
            <Badge
              variant="dot"
              color="error"
              sx={{ "& .MuiBadge-badge": { top: 2, right: 4 } }}
            >
              <NotificationIcon />
            </Badge>
          </IconButton>

          {/* Profile */}
          <Box
            onClick={handleMenuOpen}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              cursor: "pointer",
              px: 0.5,
              py: 0.5,
              pr: 1.25,
              borderRadius: 100,
              bgcolor: "#F9FAFA",
              "&:hover": { bgcolor: "#f3f4f6" },
            }}
          >
            <Avatar
              src="https://i.pravatar.cc/40"
              sx={{ width: 32, height: 32 }}
            />
            <Typography fontSize={14} fontWeight={500}>
              Mohamed
            </Typography>
            <CaretDown />
          </Box>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem>Profile</MenuItem>
            <MenuItem>Settings</MenuItem>
            <MenuItem>Logout</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
