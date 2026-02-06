import CompletedIcon from "../../assets/completedIcon";
import EvidenceIcon from "../../assets/evidenceIcon";
import InProgressIcon from "../../assets/inProgressIcon";
import UnderReviewIcon from "../../assets/underReviewIcon";
import type { Column } from "../../components/table-component/table-component.types";
import type { User } from "../../types/common.types";

export const OverviewCardsData = [
  {
    id: 1,
    label: "Total Evidence",
    value: 4,
    icon: <EvidenceIcon />,
  },
  {
    id: 2,
    label: "Under Review Evidence",
    value: 3,
    icon: <UnderReviewIcon />,
  },
  {
    id: 3,
    label: "In Progress Evidence",
    value: 2,
    icon: <InProgressIcon />,
  },
  {
    id: 4,
    label: "Completed Evidence",
    value: 1,
    icon: <CompletedIcon />,
  },
];

export const commentsData = [
  {
    id: 1,
    name: "Sara Ibrahim",
    date: "2025-08-05",
    comment: "Ensure the plan includes a clear governance model.",
  },
  {
    id: 2,
    name: "Alice Brown",
    date: "2025-08-01",
    comment: "Consider aligning objectives with the new strategic priorities.",
  },
];

export const RecentActivitiesData = [
  {
    id: 1,
    activity: "Roadmap_Version1.docx Uploaded By Rami AlSharif",
    timestamp: "5 mins ago",
  },
  {
    id: 2,
    activity: "KPI_Framework.xlsx Uploaded By Mona Hamed",
    timestamp: "20 mins ago",
  },
  {
    id: 3,
    activity: "Digital_Transformation_Plan.pdf Approved By Advisory Team",
    timestamp: "1 hour ago",
  },
];

export const LeadersData = [
  {
    id: 1,
    name: "Ahmed Khaled",
    role: "Chief Digital Officer",
    avatarUrl: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Sarah Smith",
    role: "Head of Marketing",
    avatarUrl: "https://randomuser.me/api/portraits/women/2.jpg",
  },
];

export const rows: User[] = [
  {
    id: 1,
    documentNumber: "5.4.1.1",
    documentName: "Digital_Transformation_Plan.pdf",
    documentLead: "Ahmed Khaled",
    documentPreparer: "Ahmed Khaled",
    date: "2025-08-01",
    dueDate: "2025-08-01",
    status: "Approved",
  },
  {
    id: 2,
    documentNumber: "5.4.1.2",
    documentName: "Marketing_Strategy.pdf",
    documentLead: "Sarah Smith",
    documentPreparer: "John Doe",
    date: "2025-08-15",
    dueDate: "2025-09-01",
    status: "Pending",
  },
];

export const OverviewDetailsData = [
  {
    label: "Objective",
    content:
      "Develop A Digital Transformation Strategy Aligned With The Organization's Strategy And The Objectives Of Saudi Vision 2030.",
  },
  {
    label: "Implementation Requirements",
    content: `Prepare A Digital Transformation Strategy For The Transition To Electronic Government Transactions, Including The Following:
A. The Organization's Vision, Mission, Strategic Pillars, And Strategic Objectives, And Their Alignment With The Organization's Overall Strategy.
B. Strategic Initiatives, Programs, And Performance Indicators.
C. A Clear Methodology For Integration And Coordination With Relevant External Entities To Achieve The Strategy's Objectives.
D. Required Competencies, Capabilities, And Skills Necessary To Achieve The Strategy's Objectives.`,
  },
  {
    label: "Evidence Documents",
    content:
      "Submit The Approved Digital Transformation Strategy That Includes All The Requirements Of This Standard, Provided That It Has Been Approved Within A Period Not Exceeding 36 Months.",
  },
  {
    label: "Related Regulations",
    content:
      "Council Of Ministers Resolution No. (40) Dated 27/2/1427H, Clause (16).",
  },
  {
    label: "Scope",
    content: "All Government Entities.",
  },
];

export const columns: Column<User>[] = [
  {
    id: "documentNumber",
    label: "Document Number",
    minWidth: 100,
    align: "center",
  },
  {
    id: "documentName",
    label: "Document Name",
    minWidth: 200,
  },
  {
    id: "documentLead",
    label: "Document Lead",
    minWidth: 150,
  },
  {
    id: "documentPreparer",
    label: "Document Preparer",
    minWidth: 150,
  },
  {
    id: "date",
    label: "Date",
    minWidth: 120,
  },
  {
    id: "dueDate",
    label: "Due Date",
    minWidth: 120,
  },
  {
    id: "status",
    label: "Status",
    minWidth: 100,
    align: "center",
    format: (value: User["status"]) => (
      <span
        style={{
          padding: "4px 12px",
          borderRadius: "12px",
          backgroundColor:
            value === "Approved"
              ? "#e8f5e9"
              : value === "Pending"
                ? "#fff3e0"
                : "#ffebee",
          color:
            value === "Approved"
              ? "#2e7d32"
              : value === "Pending"
                ? "#ef6c00"
                : "#c62828",
        }}
      >
        {value}
      </span>
    ),
  },
];
