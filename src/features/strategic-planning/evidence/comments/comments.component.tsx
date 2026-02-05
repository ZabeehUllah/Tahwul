import { Box, Button, TextField, Typography } from "@mui/material";
import CommentCardItem from "./comment-card-item/comment-card-item.component";
import SendIcon from "../../../../assets/sendIcon";
import { commentsData } from "../../DUMMY_DATA";
import styles from "./comments.styles";

const Comments = () => {
  return (
    <Box sx={styles.wrapper}>
      <Typography sx={styles.title}>Comments</Typography>

      <Box sx={styles.commentsList}>
        {commentsData.map((item) => (
          <CommentCardItem
            key={item.id}
            name={item.name}
            initial={item.name.charAt(0).toUpperCase()}
          />
        ))}

        <Box sx={styles.addCommentWrapper}>
          <TextField
            multiline
            rows={4}
            placeholder="Write a comment..."
            variant="outlined"
            fullWidth
            sx={styles.textField}
          />
        </Box>

        <Button sx={styles.button} startIcon={<SendIcon />}>
          Post Comment
        </Button>
      </Box>
    </Box>
  );
};

export default Comments;
