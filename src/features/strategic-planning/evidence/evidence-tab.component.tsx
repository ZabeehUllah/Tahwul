import { Box } from "@mui/material";

import Comments from "./comments/comments.component";
import RecentActivities from "./recent-activities/recent-activities.component";
import CustomDataGrid from "../../../components/ui/table-component/table-component";

import styles from "./evidence-tab.styles";
import { columns, rows } from "../DUMMY_DATA";

const EvidenceTab = () => {
  return (
    <>
      <CustomDataGrid
        rows={rows}
        columns={columns}
        keyExtractor={(row) => row.id}
        headerBgColor="#F5F8FB"
        borderRadius="12px"
        stickyHeader
        rowHover
        onRowClick={() => console.log("Row")}
      />

      <Box sx={styles.evidenceSection}>
        <Box sx={styles.commentsWrapper}>
          <Comments />
        </Box>

        <Box sx={styles.recentActivitiesWrapper}>
          <RecentActivities />
        </Box>
      </Box>
    </>
  );
};

export default EvidenceTab;
