import type { SxProps, Theme } from "@mui/material";

const profileBoxSx: SxProps<Theme> = {
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
};

const avatarSx: SxProps<Theme> = {
  width: 32,
  height: 32,
};

const profileNameSx: SxProps<Theme> = {
  fontSize: 14,
  fontWeight: 500,
};

// New: menu Paper styling
const menuPaperSx: SxProps<Theme> = {
  mt: 1,
  minWidth: 150, // fallback width
  borderRadius: 2,
  overflow: "hidden",
};

export default {
  profileBoxSx,
  avatarSx,
  profileNameSx,
  menuPaperSx,
};
