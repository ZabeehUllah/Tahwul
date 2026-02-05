import { Grid, Paper, Typography, Box } from "@mui/material";
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined';
import PieChartOutlinedIcon from '@mui/icons-material/PieChartOutlined';
import AutorenewOutlinedIcon from '@mui/icons-material/AutorenewOutlined';

const stats = [
    { label: "Overall Progress", value: "78.65%", icon: <Inventory2OutlinedIcon sx={{ color: "#f44336" }} />, sub: "Overall Progress" },
    { label: "Total Criteria", value: "95", icon: <FolderOutlinedIcon sx={{ color: "#f44336" }} />, sub: "Total Criteria" },
    { label: "Completed Criteria", value: "52", icon: <FileCopyOutlinedIcon sx={{ color: "#f44336" }} />, sub: "Completed Criteria" },
    { label: "Evidence Documents", value: "302", icon: <PieChartOutlinedIcon sx={{ color: "#f44336" }} />, sub: "Evidence (Completed)" },
    { label: "Uploaded To DGA", value: "258", icon: <AutorenewOutlinedIcon sx={{ color: "#f44336" }} />, sub: "Uploaded To DGA" },
];

export default function StatsOverview() {
    return (
        <Grid container spacing={2}>
            {stats.map((stat, index) => (
                <Grid size={{ xs: 12, sm: 6, md: 2.4 }} key={index}>
                    <Paper
                        elevation={0}
                        sx={{
                            borderRadius: 4,
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            border: "1px solid #E0E8ED", // Light blue border
                            transition: "all 0.3s",
                            "&:hover": {
                                boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                            }
                        }}
                    >
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "start", p: 2.5 }}>
                            <Box>
                                <Typography variant="h4" fontWeight="bold" sx={{ color: "#1A237E" }}>{stat.value}</Typography>
                                <Typography variant="caption" color="text.secondary" sx={{ fontSize: 13, fontWeight: 500 }}>{stat.sub}</Typography>
                            </Box>
                            {stat.icon}
                        </Box>
                    </Paper>
                </Grid>
            ))}
        </Grid>
    );
}
