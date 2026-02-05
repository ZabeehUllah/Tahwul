export interface Column<T> {
  id: keyof T | string;
  label: string;
  minWidth?: number;
  align?: "left" | "center" | "right";
  format?: (value: any, row: T) => React.ReactNode;
  cellStyle?: React.CSSProperties;
  headerStyle?: React.CSSProperties;
}

export interface EvidenceTableProps<T> {
  rows: T[];
  columns: Column<T>[];
  keyExtractor: (row: T) => string | number;
  headerBgColor?: string;
  borderRadius?: number | string;
  stickyHeader?: boolean;
  size?: "small" | "medium";
  rowHover?: boolean;
  onRowClick?: (row: T) => void;
}