import { Box, Typography, Stepper, Step, StepLabel, Paper, StepConnector, stepConnectorClasses } from "@mui/material";
import { styled } from "@mui/material/styles";
import type { StepIconProps } from "@mui/material/StepIcon";

// Custom connector: Solid Green for completed, Grey for future
const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 22,
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundColor: "#4CAF50", // Solid Green
            height: 4,
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundColor: "#4CAF50", // Solid Green
            height: 4,
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        height: 4,
        border: 0,
        backgroundColor: theme.palette.mode === "dark" ? theme.palette.grey[800] : "#E0E0E0", // Light Grey
        borderRadius: 2,
    },
}));

// Custom step icon
const ColorlibStepIconRoot = styled("div")<{
    ownerState: { completed?: boolean; active?: boolean };
}>(({ theme, ownerState }) => ({
    backgroundColor: "#fff",
    zIndex: 1,
    color: "#fff",
    width: 24,
    height: 24,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    border: "4px solid #E0E0E0", // Default grey border
    transition: "all 0.3s ease",
    ...(ownerState.active && {
        border: "4px solid #4CAF50", // Green border for active
        backgroundColor: "#fff",
        transform: "scale(1.2)", // Slightly larger
        boxShadow: "0 0 0 4px rgba(76, 175, 80, 0.2)",
    }),
    ...(ownerState.completed && {
        border: "4px solid #4CAF50", // Green border
        backgroundColor: "#4CAF50", // Filled green
    }),
}));

function ColorlibStepIcon(props: StepIconProps) {
    const { active, completed, className } = props;
    return (
        <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
            {/* Inner dot for active state if needed, or just cleaner look */}
            {completed && <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: "#fff" }} />}
        </ColorlibStepIconRoot>
    );
}

// Updated steps based on the image "expected" guess (Clean text)
const steps = [
    { label: "Kickoff Workshop", date: "Mar 17" },
    { label: "Data Collection", date: "March 18" },
    { label: "Initial Phase", date: "May 8" },
    { label: "Verification", date: "May 9 - July 12" },
    { label: "Completion Reviews", date: "July 13" },
    { label: "Cycle Conclusion", date: "August 21" },
];

export default function TimelineSection() {
    return (
        <Paper sx={{ px: 2, py: 4, borderRadius: 4, border: "2px solid #E0E8ED", backgroundColor: "#fff" }} elevation={0}>
            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2, alignItems: "center" }}>
                <Typography variant="h6" fontWeight="bold" sx={{ color: "#1D3557" }}>Project Timeline</Typography>
                <Box sx={{ border: "1px solid #E0E8ED", borderRadius: 2, px: 2, py: 0.8, fontSize: 14, cursor: "pointer", color: "#1565C0", fontWeight: 600, display: "flex", alignItems: "center", gap: 1 }}>
                    2026 <span style={{ fontSize: 10 }}>▼</span>
                </Box>
            </Box>

            <Box sx={{ width: "100%" }}>
                <Stepper alternativeLabel activeStep={1} connector={<ColorlibConnector />}>
                    {steps.map((step) => (
                        <Step key={step.label}>
                            <StepLabel StepIconComponent={ColorlibStepIcon}>
                                <Typography variant="caption" color="text.secondary" sx={{ display: "block", mb: 0.5, fontSize: 13, fontWeight: 500 }}>
                                    {step.date}
                                </Typography>
                                <Typography variant="body2" fontWeight="bold" sx={{ color: "#455A64", fontSize: 14, lineHeight: 1.2 }}>
                                    {step.label}
                                </Typography>
                            </StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Box>
        </Paper>
    );
}
