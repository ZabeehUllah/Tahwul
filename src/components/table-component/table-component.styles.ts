import type { SxProps, Theme } from "@mui/material";

const tableContainer = (borderRadius: number | string): SxProps<Theme> => ({
  borderRadius,
  overflow: "hidden",
  boxShadow: "none",
  border: "1px solid #E0E8ED",
});

const headerCell = (
  headerBgColor: string,
  borderRadius: number | string,
  minWidth?: number
): SxProps<Theme> => ({
  fontWeight: 600,
  minWidth,
  backgroundColor: headerBgColor,
  borderBottom: "none",
  "&:first-of-type": {
    borderTopLeftRadius: borderRadius,
  },
  "&:last-of-type": {
    borderTopRightRadius: borderRadius,
  },
});

const bodyRow = (clickable: boolean): SxProps<Theme> => ({
  cursor: clickable ? "pointer" : "default",
  "&:last-child td": {
    borderBottom: "none",
  },
});

const sortableHeaderContainer: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  width: "100%",
  cursor: "pointer",
  userSelect: "none",
};

const sortIndicatorContainer: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  marginLeft: 1,
  height: 16,
};

const azStack: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  height: "100%",
  marginRight: 0.5,
  "& span": {
    fontSize: 9,
    lineHeight: "8px",
    height: 8,
    color: "#999",
  },
};

const azStackActive = (order: "asc" | "desc"): SxProps<Theme> => ({
  "& span:first-of-type": {
    fontWeight: order === "asc" ? "bold" : "normal",
    color: "#000",
  },
  "& span:last-of-type": {
    fontWeight: order === "desc" ? "bold" : "normal",
    color: "#000",
  },
});

const arrowIcon: SxProps<Theme> = {
  fontSize: 14,
};

export default {
  tableContainer,
  headerCell,
  bodyRow,
  sortableHeaderContainer,
  sortIndicatorContainer,
  azStack,
  azStackActive,
  arrowIcon,
};
