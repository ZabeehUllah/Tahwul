import { AppBar, Toolbar, Box } from "@mui/material";

import TopbarNotifications from "./components/topbar-notificaation/topbar-notification";
import TopbarProfile from "./components/topbar-profiles/topbar-profiles.component";
import TopbarSearch from "./components/topbar-search/topbar-search.component";
import styles from "./topbar.styles";

export default function Topbar() {
  return (
    <AppBar position="static" elevation={0} sx={styles.appBarSx}>
      <Toolbar sx={styles.toolbarSx}>
        <TopbarSearch />

        <Box sx={styles.actionsBoxSx}>
          <TopbarNotifications />
          <TopbarProfile />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
