import { IconButton, Badge } from "@mui/material";

import styles from "./topbar-notofication.styles";
import NotificationIcon from "../../../../../assets/notificationIcon";


export default function TopbarNotifications() {
  return (
    <IconButton>
      <Badge variant="dot" color="error" sx={styles.badgeSx}>
        <NotificationIcon />
      </Badge>
    </IconButton>
  );
}
