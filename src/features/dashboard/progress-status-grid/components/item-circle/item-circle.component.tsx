import { Box } from "@mui/material";

import {
  statusColors,
  type StatusItem,
} from "../../progress-status-grid.types";
import styles from "./item-circle.styles";

interface ItemCircleProps {
  item: StatusItem;
}

const ItemCircle = ({ item }: ItemCircleProps) => {
  return (
    <Box
      sx={{
        ...styles.itemCircle,
        bgcolor: statusColors[item.status],
      }}
    >
      {item.id}
    </Box>
  );
};

export default ItemCircle;
