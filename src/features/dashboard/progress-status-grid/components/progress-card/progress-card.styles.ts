import type { SxProps } from "@mui/material";

const card: SxProps = {
  overflow: "hidden",
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: 1,
  "@media (max-width: 1200px)": {
    flex: "1 1 45%",
  },
  "@media (max-width: 600px)": {
    flex: "1 1 100%",
  },
};

const cardHeader: SxProps = {
  color: "#fff",
  py: 2,
  px: 1,
  textAlign: "center",
  minHeight: 90,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: 1,
  borderRadius: 4,
};

const cardTitle: SxProps = {
  fontSize: 12,
  fontWeight: 700,
};

const percentage: SxProps = {
  fontSize: 14,
  fontWeight: 700,
  lineHeight: "16px",
  py: 0.5,
  px: 1,
  backgroundColor: "#344968",
  borderRadius: 100,
  alignSelf: "center",
};

const body: SxProps = {
  display: "flex",
  flexDirection: "column",
  gap: 2.5,
  minHeight: 120,
};


export default {
  card,
  cardHeader,
  cardTitle,
  percentage,
  body,
};
