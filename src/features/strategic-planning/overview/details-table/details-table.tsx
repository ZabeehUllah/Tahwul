import { Box, Typography } from "@mui/material";
import styles from "./details-table.styles";
import { OverviewDetailsData } from "../../DUMMY_DATA";

const DetailsTable = () => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.verticalLine} />

      {OverviewDetailsData.map(({ label, content }) => (
        <Box key={label} sx={styles.row}>
          <Box sx={styles.labelBox}>
            <Typography sx={styles.labelText}>{label}</Typography>
          </Box>

          <Box sx={styles.contentBox}>
            <Typography>{content}</Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default DetailsTable;
