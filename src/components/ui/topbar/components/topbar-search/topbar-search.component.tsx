import { Paper, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import styles from "./topbar-search.styles";

export default function TopbarSearch() {
  return (
    <Paper component="form" sx={styles.searchPaperSx}>
      <SearchIcon sx={styles.searchIconSx} />
      <InputBase placeholder="Search" sx={styles.searchInputSx} />
    </Paper>
  );
}
