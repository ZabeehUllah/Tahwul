import { Paper, Typography, Box } from "@mui/material";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";

const data = [
    { name: "Jan", value: 85 },
    { name: "Feb", value: 75 },
    { name: "Mar", value: 80 },
    { name: "Apr", value: 45 },
    { name: "May", value: 90 },
    { name: "Jun", value: 80 },
    { name: "Jul", value: 60 },
    { name: "Aug", value: 85 },
    { name: "Sept", value: 80 },
    { name: "Oct", value: 55 },
    { name: "Nov", value: 85 },
    { name: "Dec", value: 80 },
];

export default function PerformanceBarChart() {
    return (
        <Paper
            elevation={0}
            sx={{
                borderRadius: 4,
                height: "100%",
                border: "1px solid #E0E0E0"
            }}
        >
            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
                <Typography sx={{
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "#1D3557",
                    p: 2.5
                }}>
                    12-Month Performance
                </Typography>
                {/* Placeholder for potential actions */}
            </Box>

            <Box sx={{ width: "100%", height: 350, px: 2, pb: 2 }}>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 13, fill: "#9e9e9e" }}
                            dy={10}
                        />
                        <Tooltip
                            cursor={{ fill: '#F5F5F5' }}
                            contentStyle={{ borderRadius: 12, border: "none", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
                        />
                        <Bar dataKey="value" radius={[6, 6, 6, 6]} barSize={36}>
                            {data.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill="#2196f3"
                                    fillOpacity={entry.value < 60 ? 0.3 : 1}
                                />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </Box>
        </Paper>
    );
}
