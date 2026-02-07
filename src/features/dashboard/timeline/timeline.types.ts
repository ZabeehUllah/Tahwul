export interface TimelineBarProps {
  steps: { label: string }[];
  activeIndex: number;
}

export interface TimelineDatesProps {
  steps: { label: string; date: string }[];
  isMobile: boolean;
}

export interface TimelineLabelsProps {
  steps: { label: string }[];
  isMobile: boolean;
}
