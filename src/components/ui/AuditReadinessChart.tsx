import { Paper, Typography, Box } from "@mui/material";
import { RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer } from "recharts";

const data = [
    {
        name: "Readiness",
        value: 80,
        fill: "#4caf50",
    },
];

export default function AuditReadinessChart() {
    return (
        <Paper
            elevation={0}
            sx={{
                p: 3,
                borderRadius: 4,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                border: "1px solid #E0E0E0"
            }}
        >
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 2, color: "#424242" }}>
                Audit Readiness
            </Typography>

            <Box sx={{ flex: 1, minHeight: 300, position: "relative" }}>
                <ResponsiveContainer width="100%" height="100%">
                    <RadialBarChart
                        cx="50%"
                        cy="70%"
                        innerRadius="80%"
                        outerRadius="100%"
                        barSize={20}
                        data={data}
                        startAngle={180}
                        endAngle={0}
                    >
                        <PolarAngleAxis
                            type="number"
                            domain={[0, 100]}
                            angleAxisId={0}
                            tick={false}
                        />
                        <RadialBar
                            background={{ fill: '#f5f5f5' }}
                            dataKey="value"
                            cornerRadius={10}
                        />
                    </RadialBarChart>
                </ResponsiveContainer>

                {/* Center Text */}
                <Box
                    sx={{
                        position: "absolute",
                        top: "60%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        textAlign: "center"
                    }}
                >
                    <Typography variant="h3" fontWeight="bold" color="#1a237e">
                        80%
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Readiness Level
                    </Typography>
                </Box>

                <Box sx={{ display: "flex", justifyContent: "space-around", mt: 4 }}>
                    <Box textAlign="center" sx={{ p: 1, borderRadius: 2, bgcolor: "#f9f9f9", minWidth: 80 }}>
                        <Typography variant="h4" fontWeight="bold" color="#F44336">12</Typography>
                        <Typography variant="caption" color="text.secondary" fontWeight={600}>Overdue Stds</Typography>
                    </Box>
                    <Box textAlign="center" sx={{ p: 1, borderRadius: 2, bgcolor: "#f9f9f9", minWidth: 80 }}>
                        <Typography variant="h4" fontWeight="bold" color="#FF9800">5</Typography>
                        <Typography variant="caption" color="text.secondary" fontWeight={600}>Missing Evidence</Typography>
                    </Box>
                </Box>
            </Box>
        </Paper>
    );
}
