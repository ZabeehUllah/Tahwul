import type { SxProps } from "@mui/material";

export const paperSx: SxProps = {
  borderRadius: 4,
  height: "100%",
  border: "1px solid #E0E8ED",
};

export const headerBoxSx: SxProps = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  p: 2.5,
};

export const headerTypographySx: SxProps = {
  fontSize: "1rem",
  fontWeight: 700,
  color: "#1D3557",
};

export const listSx: SxProps = {
  px: 2,
};

export const listItemSx: SxProps = {
  px: 0,
  py: 2,
};

export const avatarSx: SxProps = {
  width: 56,
  height: 56,
  mr: 1,
  border: "2px solid #fff",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
};

export const primaryTextSx: SxProps = {
  fontWeight: "bold",
  fontSize: 16,
};

export const secondaryTextSx: SxProps = {
  mt: 0.5,
};

export const scoreTextSx: SxProps = {
  fontWeight: "bold",
  color: "#1D3557",
};

export const dividerSx: SxProps = {
  borderStyle: "dashed",
};
