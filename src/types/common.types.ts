export interface User {
  id: number;
  documentNumber: string;
  documentName: string;
  documentLead: string;
  documentPreparer: string;
  date: string;
  dueDate: string;
  status: "Approved" | "Pending" | "Rejected";
}