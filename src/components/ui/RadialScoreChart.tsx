import { Paper, Typography, Box } from "@mui/material";
import { RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer } from "recharts";

interface StatItem {
    value: number | string;
    label: string;
    color: string;
}

interface RadialScoreChartProps {
    title: string;
    score: number;
    total?: number;
    color?: string;
    subtext: string;
    innerRadius?: string | number;
    barSize?: number;
    stats?: StatItem[];
}

export default function RadialScoreChart({
    title,
    score,
    total = 100,
    color = "#f44336",
    subtext,
    innerRadius = "70%",
    barSize = 30,
    stats
}: RadialScoreChartProps) {
    const data = [
        {
            name: "Score",
            value: score,
            fill: color,
        },
    ];

    return (
        <Paper
            elevation={0}
            sx={{
                p: 0,
                borderRadius: 4,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                border: "1px solid #E0E0E0"
            }}
        >
            <Typography sx={{
                fontSize: "1rem",
                fontWeight: 700,
                color: "#1D3557",
                p: 2.5
            }}>
                {title}
            </Typography>

            <Box sx={{ flex: 1, minHeight: 300, position: "relative" }}>
                <ResponsiveContainer width="100%" height="100%">
                    <RadialBarChart
                        cx="50%"
                        cy="70%"
                        innerRadius={innerRadius}
                        outerRadius="100%"
                        barSize={barSize}
                        data={data}
                        startAngle={180}
                        endAngle={0}
                    >
                        {/* Background Track Layer */}
                        <PolarAngleAxis
                            type="number"
                            domain={[0, total]}
                            angleAxisId={0}
                            tick={false}
                        />
                        <RadialBar
                            dataKey="value"
                            cornerRadius={10}
                            fill={color}
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
                        {score}%
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {subtext}
                    </Typography>
                </Box>

                {stats && (
                    <Box sx={{ display: "flex", justifyContent: "space-around", mt: 4 }}>
                        {stats.map((stat, index) => (
                            <Box key={index} textAlign="center" sx={{ p: 1, borderRadius: 2, bgcolor: "#f9f9f9", minWidth: 80 }}>
                                <Typography variant="h4" fontWeight="bold" color={stat.color}>
                                    {stat.value}
                                </Typography>
                                <Typography variant="caption" color="text.secondary" fontWeight={600}>
                                    {stat.label}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                )}
            </Box>
        </Paper >
    );
}
