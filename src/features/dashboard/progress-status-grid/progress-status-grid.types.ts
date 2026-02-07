export type Status =
  | "Not Started"
  | "In Progress"
  | "Completed"
  | "Partially Uploaded"
  | "Fully Uploaded"
  | "Delayed";

export interface StatusItem {
  id: number;
  status: Status;
}

export interface SubSection {
  heading: string;
  items: StatusItem[];
}

export interface ProgressCardProps {
  title: string;
  percentage?: string;
  headerColor?: string;
  subsections: SubSection[];
}

export const statusColors: Record<Status, string> = {
  "Not Started": "#9e9e9e",
  "In Progress": "#ff9800",
  Completed: "#4caf50",
  "Partially Uploaded": "#2196f3",
  "Fully Uploaded": "#03a9f4",
  Delayed: "#f44336",
};
