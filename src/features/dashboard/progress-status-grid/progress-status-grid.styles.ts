import type { SxProps, Theme } from "@mui/material";

const root: SxProps = {
  border: "1px solid #E0E8ED",
  bgcolor: "#fff",
  px: 2,
  py: 2,
  borderRadius: 4,
};

const header: SxProps = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  mb: 2,
  flexWrap: "wrap",
  gap: 2,
};

const title: SxProps = {
  fontSize: "1rem",
  fontWeight: 700,
  color: "#1D3557",
};

const scrollContainer: SxProps = {
  overflowX: "auto",
  "&::-webkit-scrollbar": { height: 8 },
  "&::-webkit-scrollbar-track": {
    bgcolor: "#f5f5f5",
    borderRadius: 4,
  },
  "&::-webkit-scrollbar-thumb": {
    bgcolor: "#bdbdbd",
    borderRadius: 4,
    "&:hover": { bgcolor: "#9e9e9e" },
  },
};

const grid: SxProps = {
  display: "flex",
  gap: 2,
  pb: 0.5,
  "@media (max-width: 1200px)": {
    flexWrap: "wrap",
  },
};

export default {
  root,
  header,
  title,
  scrollContainer,
  grid,
};
