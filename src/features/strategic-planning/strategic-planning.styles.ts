import type { SxProps } from "@mui/material";

const container: SxProps = {
  display: "flex",
  flexDirection: "column",
  gap: 2,
  width: "100%",
};

const statsWrapper: SxProps = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: 2,
  width: "100%",
  "@media (max-width: 1200px)": {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
  "@media (max-width: 600px)": {
    gridTemplateColumns: "repeat(1, 1fr)",
  },
};

export default {
  container,
  statsWrapper
};
