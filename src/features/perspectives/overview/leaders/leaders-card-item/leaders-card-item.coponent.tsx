import { Box, Typography } from "@mui/material";
import { LeadersData } from "../../../DUMMY_DATA";
import styles from "./leaders-card-item.styles";

const LeadersCardItem = () => {
  return (
    <Box sx={styles.container}>
      {LeadersData.map((leader) => (
        <Box key={leader.id} sx={styles.card}>
          <img
            src={leader.avatarUrl}
            alt={leader.name}
            style={{ width: "47px", height: "47px", borderRadius: "50%" }}
          />
          <Box sx={styles.textContainer}>
            <Typography sx={styles.nameText}>{leader.name}</Typography>
            <Typography sx={styles.roleText}>{leader.role}</Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default LeadersCardItem;
