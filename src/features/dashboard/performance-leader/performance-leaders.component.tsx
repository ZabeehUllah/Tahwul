import {
  Paper,
  Typography,
  Box,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
} from "@mui/material";

import {
  paperSx,
  headerBoxSx,
  headerTypographySx,
  listSx,
  listItemSx,
  avatarSx,
  primaryTextSx,
  secondaryTextSx,
  scoreTextSx,
  dividerSx,
} from "./performance-leader.styles";
import { leaders } from "./performance-leader.constants";

export default function PerformanceLeaders() {
  return (
    <Paper elevation={0} sx={paperSx}>
      <Box sx={headerBoxSx}>
        <Typography sx={headerTypographySx}>
          Top Performing Perspective Leaders
        </Typography>
      </Box>

      <List sx={listSx}>
        {leaders.map((leader, index) => (
          <div key={index}>
            <ListItem alignItems="center" sx={listItemSx}>
              <ListItemAvatar>
                <Avatar alt={leader.name} src={leader.avatar} sx={avatarSx} />
              </ListItemAvatar>

              <ListItemText
                primary={
                  <Typography sx={primaryTextSx}>{leader.name}</Typography>
                }
                secondary={
                  <Typography sx={secondaryTextSx} color="text.secondary">
                    {leader.role}
                  </Typography>
                }
              />

              <Typography variant="h5" sx={scoreTextSx}>
                {leader.score}
              </Typography>
            </ListItem>

            {index < leaders.length - 1 && (
              <Divider component="li" sx={dividerSx} />
            )}
          </div>
        ))}
      </List>
    </Paper>
  );
}
