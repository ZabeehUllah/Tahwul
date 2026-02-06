import { Paper, Typography, Box } from "@mui/material";
import { RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer } from "recharts";

const data = [
    {
        name: "Score",
        value: 65,
        fill: "#f44336",
    },
];

export default function ComplianceScoreChart() {
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
                Overall Compliance Score
            </Typography>

            <Box sx={{ flex: 1, minHeight: 300, position: "relative" }}>
                <ResponsiveContainer width="100%" height="100%">
                    <RadialBarChart
                        cx="50%"
                        cy="70%"
                        innerRadius="70%"
                        outerRadius="100%"
                        barSize={30}
                        data={data}
                        startAngle={180}
                        endAngle={0}
                    >
                        {/* Background Track Layer */}
                        <PolarAngleAxis
                            type="number"
                            domain={[0, 100]}
                            angleAxisId={0}
                            tick={false}
                        />
                        <RadialBar
                            dataKey="value"
                            cornerRadius={10}
                            fill="#f44336"
                            background={{ fill: "#f5f5f5" }}
                        />
                    </RadialBarChart>
                </ResponsiveContainer>

                {/* Center Text */}
                <Box
                    sx={{
                        position: "absolute",
                        top: "60%",
                        left: "50%",
                        transform: "translate(-50%, -10%)",
                        textAlign: "center"
                    }}
                >
                    <Typography variant="h3" fontWeight="bold" color="#1a237e">
                        65%
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Basic Standards 2025
                    </Typography>
                </Box>
            </Box>
        </Paper>
    );
}
