import type { SxProps } from "@mui/material";

const container: SxProps = {
  display: "flex",
  gap: 1,
  "@media (max-width: 600px)": {
    flexDirection: "column",
  },
};

const card: SxProps = {
  display: "flex",
  alignItems: "center",
  gap: 2,
  backgroundColor: "#F5F8FA",
  padding: "10px",
  borderRadius: "10px",
};

const avatar: SxProps = {
  width: "47px",
  height: "47px",
  borderRadius: "50%",
  objectFit: "cover",
};

const textContainer: SxProps = {
  display: "flex",
  flexDirection: "column",
};

const nameText: SxProps = {
  fontWeight: 500,
  fontSize: "1rem",
  color: "#1D3557",
};

const roleText: SxProps = {
  fontWeight: 500,
  fontSize: "1rem",
  color: "#8597A8",
};

export default {
  container,
  card,
  avatar,
  textContainer,
  nameText,
  roleText,
};
