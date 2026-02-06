import { Typography, Box } from "@mui/material";

type Status = "Not Started" | "In Progress" | "Completed" | "Partially Uploaded" | "Fully Uploaded" | "Delayed";

interface StatusItem {
    id: number;
    status: Status;
}

interface SubSection {
    heading: string;
    items: StatusItem[];
}

interface ProgressCardProps {
    title: string;
    percentage?: string;
    headerColor?: string;
    subsections: SubSection[];
}

const statusColors: Record<Status, string> = {
    "Not Started": "#9e9e9e",
    "In Progress": "#ff9800",
    "Completed": "#4caf50",
    "Partially Uploaded": "#2196f3",
    "Fully Uploaded": "#03a9f4",
    "Delayed": "#f44336",
};

const data: ProgressCardProps[] = [
    {
        title: "Strategy And Planning",
        percentage: "97.78%",
        headerColor: "#1D3557",
        subsections: [
            {
                heading: "Digital Transformation",
                items: [
                    { id: 1, status: "Completed" },
                    { id: 2, status: "Completed" },
                    { id: 3, status: "Completed" },
                ]
            },
            {
                heading: "Digital Governance",
                items: [
                    { id: 1, status: "Completed" },
                    { id: 2, status: "In Progress" },
                    { id: 3, status: "Completed" },
                ]
            },
            {
                heading: "Enterprise Architecture",
                items: [
                    { id: 1, status: "Completed" },
                    { id: 2, status: "Completed" },
                ]
            }
        ],
    },
    {
        title: "Organization And Culture",
        percentage: "70.83%",
        headerColor: "#1D3557",
        subsections: [
            {
                heading: "Risk Management",
                items: [
                    { id: 1, status: "Completed" },
                    { id: 2, status: "Completed" },
                    { id: 3, status: "Completed" },
                    { id: 4, status: "Completed" },
                    { id: 5, status: "Completed" },
                ]
            },
            {
                heading: "Business Continuity",
                items: [
                    { id: 1, status: "Completed" },
                    { id: 2, status: "Not Started" },
                    { id: 3, status: "Completed" },
                    { id: 4, status: "Completed" },
                    { id: 5, status: "Completed" },
                    { id: 6, status: "Not Started" },
                    { id: 7, status: "Completed" },
                ]
            }
        ],
    },
    {
        title: "Operations And Execution",
        percentage: "80.00%",
        headerColor: "#1D3557",
        subsections: [
            {
                heading: "Support Systems",
                items: [
                    { id: 1, status: "Fully Uploaded" },
                    { id: 2, status: "Completed" },
                    { id: 3, status: "Completed" },
                    { id: 4, status: "Completed" },
                    { id: 5, status: "Completed" },
                ]
            },
            {
                heading: "IT Infrastructure",
                items: [
                    { id: 1, status: "Completed" },
                    { id: 2, status: "Completed" },
                    { id: 3, status: "Completed" },
                    { id: 4, status: "Completed" },
                    { id: 5, status: "Fully Uploaded" },
                    { id: 6, status: "Completed" },
                    { id: 7, status: "Completed" },
                ]
            },
            {
                heading: "Cloud Infrastructure",
                items: [
                    { id: 1, status: "Completed" },
                    { id: 2, status: "Completed" },
                    { id: 3, status: "Fully Uploaded" },
                ]
            }
        ],
    },
    {
        title: "Business Continuity",
        percentage: "90.59%",
        headerColor: "#1D3557",
        subsections: [
            {
                heading: "Governance Platforms",
                items: [
                    { id: 1, status: "Completed" },
                    { id: 2, status: "Completed" },
                    { id: 3, status: "Completed" },
                    { id: 4, status: "Not Started" },
                    { id: 5, status: "Completed" },
                    { id: 6, status: "Completed" },
                    { id: 7, status: "Completed" },
                    { id: 8, status: "Completed" },
                    { id: 9, status: "Completed" },
                ]
            }
        ],
    },
    {
        title: "Information Technology",
        percentage: "75.00%",
        headerColor: "#1D3557",
        subsections: [
            {
                heading: "Governance",
                items: [
                    { id: 1, status: "Completed" },
                    { id: 2, status: "Completed" },
                ]
            },
            {
                heading: "IT Infrastructure",
                items: [
                    { id: 1, status: "Completed" },
                    { id: 2, status: "Not Started" },
                ]
            },
            {
                heading: "Cloud Infrastructure",
                items: [
                    { id: 1, status: "Completed" },
                    { id: 2, status: "Completed" },
                    { id: 3, status: "Completed" },
                ]
            }
        ],
    },
    {
        title: "Comprehensive Governance",
        percentage: "64.44%",
        headerColor: "#1D3557",
        subsections: [
            {
                heading: "Service Quality",
                items: [
                    { id: 1, status: "Completed" },
                    { id: 2, status: "Completed" },
                ]
            },
            {
                heading: "Digital Channels",
                items: [
                    { id: 1, status: "Completed" },
                    { id: 2, status: "Completed" },
                ]
            }
        ],
    },
    {
        title: "Channels And Services",
        percentage: "100%",
        headerColor: "#1D3557",
        subsections: [
            {
                heading: "User Engagement",
                items: [
                    { id: 1, status: "In Progress" },
                    { id: 2, status: "In Progress" },
                    { id: 3, status: "In Progress" },
                ]
            },
            {
                heading: "User Relationship",
                items: [
                    { id: 1, status: "Completed" },
                    { id: 2, status: "In Progress" },
                    { id: 3, status: "In Progress" },
                ]
            }
        ],
    },
    {
        title: "Beneficiary Centralization",
        percentage: "60.00%",
        headerColor: "#1D3557",
        subsections: [
            {
                heading: "Data Governance",
                items: [
                    { id: 1, status: "Completed" },
                    { id: 2, status: "In Progress" },
                    { id: 3, status: "In Progress" },
                ]
            },
            {
                heading: "Data Usage & Sharing",
                items: [
                    { id: 1, status: "Completed" },
                    { id: 2, status: "In Progress" },
                    { id: 3, status: "In Progress" },
                ]
            },
            {
                heading: "Open Data",
                items: [
                    { id: 1, status: "Completed" },
                    { id: 2, status: "In Progress" },
                    { id: 3, status: "In Progress" },
                ]
            }
        ],
    },
    {
        title: "Government Data",
        percentage: "87.50%",
        headerColor: "#1D3557",
        subsections: [
            {
                heading: "Innovation",
                items: [
                    { id: 1, status: "Delayed" },
                    { id: 2, status: "Delayed" },
                ]
            },
            {
                heading: "Creative Solutions",
                items: [
                    { id: 1, status: "Delayed" },
                    { id: 2, status: "Delayed" },
                ]
            }
        ],
    },
    {
        title: "Research And Innovation",
        percentage: "17.65%",
        headerColor: "#1D3557",
        subsections: [
            {
                heading: "Innovation",
                items: [
                    { id: 1, status: "Delayed" },
                    { id: 2, status: "Delayed" },
                ]
            },
            {
                heading: "Creative Solutions",
                items: [
                    { id: 1, status: "In Progress" },
                    { id: 2, status: "Delayed" },
                ]
            }
        ],
    },
];


export default function ProgressStatusGrid() {
    return (
        <Box sx={{ border: '1px solid #E0E8ED', bgcolor: "#fff", px: 2, py: 2, borderRadius: 4 }}>
            {/* Header with Title and Legends */}
            <Box sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 2,
                flexWrap: "wrap",
                gap: 2
            }}>
                <Typography sx={{
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "#1D3557",
                }}>
                    Progress Status
                </Typography>

                <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                    {Object.entries(statusColors).map(([status, color]) => (
                        <Box key={status} sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                            <Box sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: color }} />
                            <Typography variant="caption" color="text.secondary" fontWeight={500}>{status}</Typography>
                        </Box>
                    ))}
                </Box>
            </Box>

            {/* Horizontal Scrollable Grid */}
            <Box sx={{
                overflowX: "auto",
                "&::-webkit-scrollbar": {
                    height: 8,
                },
                "&::-webkit-scrollbar-track": {
                    bgcolor: "#f5f5f5",
                    borderRadius: 4,
                },
                "&::-webkit-scrollbar-thumb": {
                    bgcolor: "#bdbdbd",
                    borderRadius: 4,
                    "&:hover": {
                        bgcolor: "#9e9e9e",
                    },
                },
            }}>
                <Box sx={{
                    display: "flex",
                    gap: 2,
                    pb: 0.5,
                    "@media (max-width: 1200px)": {
                        flexWrap: "wrap",
                    }
                }}>
                    {data.map((card, index) => (
                        <Box
                            key={index}
                            sx={{
                                overflow: "hidden",
                                flex: 1,
                                display: "flex",
                                flexDirection: "column",
                                gap: 1,
                                "@media (max-width: 1200px)": {
                                    flex: "1 1 45%",
                                },
                                "@media (max-width: 600px)": {
                                    flex: "1 1 100%",
                                },
                            }}
                        >
                            {/* Header */}
                            <Box
                                sx={{
                                    bgcolor: card.headerColor,
                                    color: "#fff",
                                    py: 2,
                                    px: 1,
                                    textAlign: "center",
                                    minHeight: 90,
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    gap: 1,
                                    borderRadius: 4,
                                }}
                            >
                                <Typography variant="body2" lineHeight={1.3} sx={{ mb: 0.5, fontSize: 12, fontWeight: 700 }}>
                                    {card.title}
                                </Typography>
                                <Typography variant="h6" sx={{ opacity: 0.95, fontSize: 14, lineHeight: "16px", fontWeight: 700, py: 0.5, px: 1, backgroundColor: "#344968", borderRadius: 100, alignSelf: "center" }}>
                                    {card.percentage}
                                </Typography>
                            </Box>

                            {/* Body with subsections */}
                            <Box sx={{
                                bgcolor: "transparent",
                                display: "flex",
                                flex: 1,
                                flexDirection: "column",
                                gap: 2.5,
                                minHeight: 120,
                            }}>
                                {card.subsections.map((subsection, subIndex) => (
                                    <Box key={subIndex} sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        flex: 1,
                                        height: "100%",
                                        gap: 1,
                                        width: "100%",
                                        borderRadius: 4,
                                        border: "1px solid #E0E8ED",
                                        boxSizing: "border-box",
                                        py: 0.25,
                                    }}>
                                        {/* Subsection Heading */}
                                        <Typography
                                            variant="caption"
                                            sx={{
                                                display: "block",
                                                mb: 1,
                                                color: "#1D3557",
                                                fontWeight: 600,
                                                fontSize: 12,
                                                textAlign: "center",
                                                px: 0.5,
                                            }}
                                        >
                                            {subsection.heading}
                                        </Typography>

                                        <Box sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            flex: 1,
                                            flexWrap: "wrap",
                                            gap: 1,
                                            p: 0.5,
                                        }}>
                                            {subsection.items.map((item) => (
                                                <Box
                                                    key={item.id}
                                                    sx={{
                                                        width: 24,
                                                        height: 24,
                                                        lineHeight: 1,
                                                        borderRadius: "50%",
                                                        bgcolor: statusColors[item.status],
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        color: "#fff",
                                                        fontSize: 14,
                                                    }}
                                                >
                                                    {item.id}
                                                </Box>
                                            ))}
                                        </Box>
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box >
    );
}
