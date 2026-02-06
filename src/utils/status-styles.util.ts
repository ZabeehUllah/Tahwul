type Status = "Approved" | "Pending" | "Rejected";

interface StatusStyle {
  backgroundColor: string;
  color: string;
}

const STATUS_STYLES: Record<Status, StatusStyle> = {
  Approved: {
    backgroundColor: "#e8f5e9",
    color: "#2e7d32",
  },
  Pending: {
    backgroundColor: "#fff3e0",
    color: "#ef6c00",
  },
  Rejected: {
    backgroundColor: "#ffebee",
    color: "#c62828",
  },
};

export const getStatusStyles = (status: string): StatusStyle => {
  return (
    STATUS_STYLES[status as Status] ?? {
      backgroundColor: "#ffebee",
      color: "#c62828",
    }
  );
};
