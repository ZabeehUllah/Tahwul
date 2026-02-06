import { Grid, Paper, Typography, Box } from "@mui/material";
import ChartBarLineIcon from "../../assets/chartBarLineIcon";
import FolderIcon from "../../assets/folderIcon";
import FolderCheckIcon from "../../assets/folderCheckIcon";
import FileSecurityIcon from "../../assets/fileSecurity";
import FileVerifiedIcon from "../../assets/fileVerifiedIcon";

const stats = [
    { label: "Overall Progress", value: "78.65%", icon: <ChartBarLineIcon />, sub: "Overall Progress" },
    { label: "Total Criteria", value: "95", icon: <FolderIcon />, sub: "Total Criteria" },
    { label: "Completed Criteria", value: "52", icon: <FolderCheckIcon />, sub: "Completed Criteria" },
    { label: "Evidence Documents", value: "302", icon: <FileSecurityIcon />, sub: "Evidence (Completed)" },
    { label: "Evidence (Completed)", value: "302", icon: <FileVerifiedIcon />, sub: "Uploaded To DGA" },
    { label: "Uploaded to DGA", value: "258", icon: <FileVerifiedIcon />, sub: "Uploaded to DGA" },
];

export default function StatsOverview() {
    return (
        <Grid container spacing={2}>
            {stats.map((stat, index) => (
                <Grid size={{ xs: 12, sm: 6, md: 2 }} key={index}>
                    <Paper
                        elevation={0}
                        sx={{
                            borderRadius: 4,
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            border: "1px solid #E0E8ED",
                            transition: "all 0.3s",
                            "&:hover": {
                                boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                            }
                        }}
                    >
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "start", p: 2 }}>
                            <Box>
                                <Typography variant="h4" sx={{ color: "#1D3557", fontWeight: 700 }}>{stat.value}</Typography>
                                <Typography variant="caption" color="##8597A8" sx={{ fontSize: 13 }}>{stat.sub}</Typography>
                            </Box>
                            <Box sx={{ pt: 0.5 }}>{stat.icon}</Box>
                        </Box>
                    </Paper>
                </Grid>
            ))
            }
        </Grid >
    );
}
