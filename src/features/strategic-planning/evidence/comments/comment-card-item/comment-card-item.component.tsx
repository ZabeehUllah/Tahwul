import { Box, Typography } from "@mui/material";
import styles from "./comment-card-item.styles";

const CommentCardItem = ({
  name,
  initial,
}: {
  name: string;
  initial: string;
}) => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.headerWrapper}>
        <Box sx={styles.nameWrapper}>
          <Box sx={styles.avatar}>{initial}</Box>
          <Typography sx={styles.nameText}>{name}</Typography>
        </Box>
        <Typography sx={styles.dateText}>2025-08-05</Typography>
      </Box>

      <Typography sx={styles.commentText}>
        Ensure the plan includes a clear governance model.
      </Typography>
    </Box>
  );
};

export default CommentCardItem;
