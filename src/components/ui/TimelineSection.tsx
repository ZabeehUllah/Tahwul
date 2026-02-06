import { Box, Typography, Paper } from "@mui/material";

const steps = [
    { label: "Kickoff Workshop", date: "Mar 17", status: "completed" },
    { label: "Data Collection", date: "March 18", status: "active" },
    { label: "Initial Phase", date: "May 8", status: "future" },
    { label: "Verification", date: "May 9 - July 12", status: "future" },
    { label: "Completion Reviews", date: "July 13", status: "future" },
    { label: "Cycle Conclusion", date: "August 21", status: "future" },
];

export default function TimelineSection() {
    const activeIndex = steps.findIndex(step => step.status === "active");

    return (
        <Paper
            elevation={0}
            sx={{
                p: 2,
                borderRadius: 3,
                border: "1px solid #E0E8ED",
                backgroundColor: "#fff",
            }}
        >
            {/* Header */}
            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
                <Typography fontWeight={700} color="#1D3557">
                    Project Timeline
                </Typography>

                <Box
                    sx={{
                        border: "1px solid #E0E8ED",
                        borderRadius: 2,
                        px: 2,
                        py: 0.5,
                        fontSize: 14,
                        fontWeight: 600,
                        color: "#1D3557",
                        cursor: "pointer",
                    }}
                >
                    2026 ▼
                </Box>
            </Box>

            {/* Timeline Bar */}
            <Box sx={{ position: "relative", mb: 2 }}>
                {/* Background bar */}
                <Box
                    sx={{
                        height: 14,
                        borderRadius: 6,
                        backgroundColor: "#F5F8FB",
                    }}
                />

                {/* Active bar */}
                <Box
                    sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        height: 14,
                        width: `${(activeIndex / (steps.length - 3)) * 100}%`,
                        borderRadius: 6,
                        backgroundColor: "#1EA54E",
                    }}
                />

                {/* Dots */}
                <Box
                    sx={{
                        position: "absolute",
                        inset: 0,
                        display: "grid",
                        gridTemplateColumns: `repeat(${steps.length}, 1fr)`,
                    }}
                >
                    {steps.map((step, index) => {
                        const isCompleted = index < activeIndex;
                        const isActive = index === activeIndex;

                        return (
                            <Box
                                key={step.label}
                                sx={{
                                    position: "relative",
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            >
                                <Box
                                    sx={{
                                        position: "absolute",
                                        top: "50%",
                                        transform: "translateY(-50%)",
                                        width: 10,
                                        height: 10,
                                        borderRadius: "50%",
                                        backgroundColor:
                                            isCompleted || isActive ? "#fff" : "#E53935",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        zIndex: 1,
                                    }}
                                >
                                    {isActive && (
                                        <Box
                                            sx={{
                                                width: 6,
                                                height: 6,
                                                borderRadius: "50%",
                                                backgroundColor: "#fff",
                                            }}
                                        />
                                    )}
                                </Box>
                            </Box>
                        );
                    })}
                </Box>
            </Box>

            {/* Dates BELOW bar */}
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: `repeat(${steps.length}, 1fr)`,
                }}
            >
                {steps.map(step => (
                    <Typography
                        key={step.label}
                        sx={{
                            textAlign: "center",
                            fontSize: 14,
                            color: "#8597A8",
                            mb: 0
                        }}
                    >
                        {step.date}
                    </Typography>
                ))}
            </Box>

            {/* Labels */}
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: `repeat(${steps.length}, 1fr)`,
                }}
            >
                {steps.map(step => (
                    <Typography
                        key={step.label}
                        sx={{
                            textAlign: "center",
                            fontSize: 14,
                            fontWeight: 500,
                            color: "#1D3557",
                        }}
                    >
                        {step.label}
                    </Typography>
                ))}
            </Box>
        </Paper>
    );
}
