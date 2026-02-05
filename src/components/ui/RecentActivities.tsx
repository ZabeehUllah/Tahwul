import { Paper, Typography, Box, List, ListItem, ListItemText } from "@mui/material";

const activities = [
    {
        text: 'Document "Strategy_Review.Pdf" Was Uploaded By Ahmed Khaled',
        time: "5 Mins Ago",
        highlight: "Strategy_Review.Pdf",
    },
    {
        text: 'Task "Review Compliance Files" Was Assigned To Mona Hamed',
        time: "20 Mins Ago",
        highlight: "Review Compliance Files",
        active: true, // Special styling from design
    },
    {
        text: 'New Criterion "5.3 Digital Identity" Was Created By Admin',
        time: "1 Hour Ago",
        highlight: "5.3 Digital Identity",
    },
];

export default function RecentActivities() {
    return (
        <Paper
            elevation={0}
            sx={{
                borderRadius: 4,
                height: "100%",
                border: "1px solid #E0E0E0"
            }}
        >
            <Typography variant="h6" fontWeight="bold" sx={{ px: 2, py: 2, color: "#424242" }}>
                Recent Activities
            </Typography>

            <List sx={{ px: 2 }}>
                {activities.map((activity, index) => (
                    <ListItem
                        key={index}
                        alignItems="flex-start"
                        sx={{
                            pb: 3,
                            position: "relative",
                            "&:not(:last-child)": {
                                borderBottom: "1px solid #E0E0E0",
                            },
                            "&::before": {
                                content: '""',
                                position: "absolute",
                                left: -12,
                                top: 28,
                                width: 8,
                                height: 8,
                                borderRadius: "50%",
                                bgcolor: "#f44336",
                            },
                            ml: 2,
                            pl: 3,
                        }}
                    >
                        <ListItemText
                            primary={
                                <Box
                                    component="span"
                                    sx={{
                                        display: "block",
                                        bgcolor: "transparent",
                                        p: 0,
                                        borderRadius: 2,
                                        width: "100%"
                                    }}
                                >
                                    {activity.text.split(activity.highlight).map((part, i, arr) => (
                                        <span key={i}>
                                            {part}
                                            {i < arr.length - 1 && <span style={{ fontWeight: 700 }}>{activity.highlight}</span>}
                                        </span>
                                    ))}
                                </Box>
                            }
                            secondary={
                                <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: "block", textAlign: activity.active ? 'right' : 'left', fontWeight: 500 }}>
                                    {activity.time}
                                </Typography>
                            }
                        />
                    </ListItem>
                ))}
            </List>
        </Paper>
    );
}
