import type { SxProps } from "@mui/material";

const timelineBarWrapper: SxProps = {
  position: "relative",
  mb: 2,
};

const timelineBarBackground: SxProps = {
  height: 14,
  borderRadius: 6,
  backgroundColor: "#F5F8FB",
};

const timelineBarActive = (
  activeIndex: number,
  stepsLength: number,
): SxProps => ({
  position: "absolute",
  top: 0,
  left: 0,
  height: 14,
  borderRadius: 6,
  backgroundColor: "#1EA54E",
  width: `${(activeIndex / (stepsLength - 3)) * 100}%`,
});

const dotsGrid = (stepsLength: number): SxProps => ({
  position: "absolute",
  inset: 0,
  display: "grid",
  gridTemplateColumns: `repeat(${stepsLength}, 1fr)`,
});

const dotWrapper: SxProps = {
  position: "relative",
  display: "flex",
  justifyContent: "center",
};

const dot = (isCompleted: boolean, isActive: boolean): SxProps => ({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  width: 10,
  height: 10,
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1,
  backgroundColor: isCompleted || isActive ? "#fff" : "#E53935",
});

const innerDot: SxProps = {
  width: 6,
  height: 6,
  borderRadius: "50%",
  backgroundColor: "#fff",
};

export default {
  timelineBarWrapper,
  timelineBarBackground,
  timelineBarActive,
  dotsGrid,
  dotWrapper,
  dot,
  innerDot,
};
