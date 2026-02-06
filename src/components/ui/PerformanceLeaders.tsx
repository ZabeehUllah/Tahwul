import { Paper, Typography, Box, Avatar, List, ListItem, ListItemAvatar, ListItemText, Divider } from "@mui/material";

const leaders = [
    {
        name: "Ahmed Al-Ali",
        role: "Strategy Perspective",
        score: "96%",
        avatar: "https://i.pravatar.cc/100?img=1",
    },
    {
        name: "Sarah Al-Khaled",
        role: "Beneficiary Perspective",
        score: "94%",
        avatar: "https://i.pravatar.cc/100?img=5",
    },
    {
        name: "Mohammad Al-Mansour",
        role: "IT Perspective",
        score: "92%",
        avatar: "https://i.pravatar.cc/100?img=11",
    },
];

export default function PerformanceLeaders() {
    return (
        <Paper
            elevation={0}
            sx={{
                borderRadius: 4,
                height: "100%",
                border: "1px solid #E0E0E0"
            }}
        >
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", p: 2.5 }}>
                <Typography sx={{
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "#1D3557",
                }}>
                    Top Performing Perspective Leaders
                </Typography>
            </Box>

            <List sx={{ px: 2 }}>
                {leaders.map((leader, index) => (
                    <div key={index}>
                        <ListItem alignItems="center" sx={{ px: 0, py: 2 }}>
                            <ListItemAvatar>
                                <Avatar alt={leader.name} src={leader.avatar} sx={{ width: 56, height: 56, mr: 1, border: "2px solid #fff", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }} />
                            </ListItemAvatar>
                            <ListItemText
                                primary={<Typography fontWeight="bold" fontSize={16}>{leader.name}</Typography>}
                                secondary={<Typography variant="body2" color="text.secondary" mt={0.5}>{leader.role}</Typography>}
                            />
                            <Typography fontWeight="bold" variant="h5" color="#1D3557">{leader.score}</Typography>
                        </ListItem>
                        {index < leaders.length - 1 && <Divider component="li" sx={{ borderStyle: "dashed" }} />}
                    </div>
                ))}
            </List>
        </Paper>
    );
}
