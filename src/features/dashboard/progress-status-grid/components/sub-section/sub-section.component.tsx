import { Box, Typography } from "@mui/material";
import styles from "./sub-section.styles";
import ItemCircle from "../item-circle/item-circle.component";
import type { SubSection } from "../../progress-status-grid.types";

interface SubsectionProps {
  sub: SubSection;
}

const Subsection = ({ sub }: SubsectionProps) => {
  return (
    <Box sx={styles.subsection}>
      <Typography sx={styles.subsectionTitle}>{sub.heading}</Typography>

      <Box sx={styles.itemsWrapper}>
        {sub.items.map((item) => (
          <ItemCircle key={item.id} item={item} />
        ))}
      </Box>
    </Box>
  );
}

export default Subsection;
